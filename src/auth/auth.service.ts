import { Injectable, ForbiddenException, Redirect } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.model';
import { responseErrors } from 'src/common/translations/translation';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config/dist';

const { UPS, EMAIL_TAKEN, BAD_CREDENTIALS } = responseErrors;

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  async signup(credentials: AuthDto) {
    const hashedPassword = await argon.hash(credentials.password);
    const user: User = new User();
    user.login = credentials.login;
    user.password = hashedPassword;

    try {
      await this.userService.create(user.dataValues);
      return 'You can login';
    } catch (err: any) {
      if (err.name === 'SequelizeUniqueConstraintError') throw new ForbiddenException(EMAIL_TAKEN);

      throw new Error(UPS);
    }
  }

  async signin(credentials: AuthDto) {
    try {
      const user = await this.userService.findOne(credentials.login);
      if (!user) return new ForbiddenException(BAD_CREDENTIALS);
      const checkPassword = await argon.verify(user.password, credentials.password);

      if (checkPassword)
        return this.signToken(
          user.dataValues.id,
          user.dataValues.login,
          user.dataValues.Roles.map((role) => role.dataValues.name)
        );
    } catch (err) {
      throw new Error(UPS);
    }
  }

  async signToken(
    userId: number,
    email: string,
    roles: string[]
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
      roles,
    };
    const signature = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: signature,
    });

    return { access_token: token };
  }
}

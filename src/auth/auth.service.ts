import { Injectable, ForbiddenException, UnprocessableEntityException } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.model';
import { responseErrors } from 'src/common/translations/translation';
const { UPS, EMAIL_TAKEN, BAD_CREDENTIALS } = responseErrors;

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signup(credentials: AuthDto) {
    const hashedPassword = await argon.hash(credentials.password);
    const user: User = new User();
    user.login = credentials.login;
    user.password = hashedPassword;

    try {
      const savedUser = await this.userService.create(user.dataValues);
      return savedUser.dataValues;
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') throw new ForbiddenException(EMAIL_TAKEN);

      throw new Error(UPS);
    }
  }

  async signin(credentials: AuthDto) {
    try {
      const user = await this.userService.findOne(credentials.login);
      if (!user) return new ForbiddenException(BAD_CREDENTIALS);
      const checkPassword = await argon.verify(user.password, credentials.password);

      if (checkPassword) return true;
      return false;
    } catch (err) {
      throw new Error(UPS);
    }
  }
}

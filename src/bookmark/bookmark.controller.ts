import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/decorator/decorator.roles';
import { JwtGuard } from 'src/auth/guard';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { ROLE } from 'src/common/types/role.type';
import { IBookmark } from 'src/common/interfaces/bookmark.interface';
import { BookmarkService } from './bookmark.service';
import { GetUser } from 'src/auth/decorator';
import { IUserDto } from 'src/common/interfaces/userDto.interface';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Roles(ROLE.admin)
  @UseGuards(JwtGuard, RolesGuard)
  @Post()
  addBookmark(@Body() body: IBookmark, @GetUser() user: IUserDto) {
    return this.bookmarkService.create(body);
  }

  @Get()
  getBookmarks() {
    return this.bookmarkService.findAll();
  }
}

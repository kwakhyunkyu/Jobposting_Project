import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserGuard } from '../auth/jwt/jwt.user.guard';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 회원가입
  @UsePipes(ValidationPipe)
  @Post('/signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  // 유저정보 상세조회
  @UseGuards(UserGuard)
  @Get('/user-page/:id')
  findOne(@Request() req, @Param('id') id: number) {
    if (id) {
      return this.userService.findOne(id);
    }
    // AuthGuard로 받은 req안에 user에 접근하면 현재 로그인한 유저(회사)의 정보에 접근할 수 있습니다.
    return this.userService.findOne(req.user.id);
  }

  // 유저정보 수정
  @UseGuards(UserGuard)
  @Patch()
  update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(req.user.id, updateUserDto);
  }

  // 회원탈퇴 (softDelete)
  // 유저정보 수정
  @UseGuards(UserGuard)
  @Delete()
  remove(@Request() req) {
    return this.userService.remove(req.user.id);
  }
}

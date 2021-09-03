import { Delete, NotFoundException, Param, Put } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAll(): Promise<User[]> {
    try {
      return await this.userService.findAll();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get('/:username')
  async findOne(@Param('username') username: string): Promise<User> {
    try {
      return await this.userService.findOne(username);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    try {
      return await this.userService.create(user);
    } catch (error) {
      return error.message;
    }
  }

  @Put('/:id')
  async modify(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    try {
      return await this.userService.update(id, user);
    } catch (error) {
      return error.message;
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<User> {
    try {
      return await this.userService.delete(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}

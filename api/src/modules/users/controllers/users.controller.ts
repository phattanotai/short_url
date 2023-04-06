import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { CreateUser } from '../models/dto/CreateUser.dto';
import { UsersService } from '../services/users/users.service';
import { Role } from '../models/enum/role.enum';
import { UpdateUser } from '../models/dto/UpdateUser.dto';
import { Request } from 'src/interfaces/ExpressReq.interface';
import { Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('userRole')
  userRole() {
    try {
      return Role;
    } catch (error) {
      throw new InternalServerErrorException(
        'UserController->getRole ' + error.message,
      );
    }
  }

  @Post()
  async create(@Res() response, @Body() createdUserDto: CreateUser) {
    try {
      return this.userService
        .create(createdUserDto)
        .then((saveData) => {
          if (saveData) {
            return response.status(200).json({
              status: 200,
              message: 'create success',
            });
          } else {
            return response.status(201).json({
              status: 201,
              message: 'create fail',
            });
          }
        })
        .catch((error) => {
          throw new HttpException(error.message, HttpStatus.CONFLICT);
        });
    } catch (error) {
      throw new InternalServerErrorException(
        'UserController->create ' + error.message,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Res() response: Response,
    @Param('id') id: number,
    @Body() createdUserDto: UpdateUser,
  ) {
    try {
      return this.userService
        .update(id, createdUserDto)
        .then((updateStatus: any) => {
          if (updateStatus) {
            return response.status(200).json({
              status: 200,
              message: 'update success',
            });
          } else {
            return response.status(201).json({
              status: 201,
              message: 'update fail',
            });
          }
        })
        .catch((error) => {
          throw new HttpException(error.message, HttpStatus.CONFLICT);
        });
    } catch (error) {
      throw new InternalServerErrorException(
        'UserController->Put ' + error.message,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Res() response: Response) {
    try {
      return this.userService.findAll().then((users) => {
        if (users.length) {
          return response.status(200).json({
            status: 200,
            data: users,
          });
        } else {
          return response.status(203).json({
            status: 203,
            data: [],
          });
        }
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'UserController->findAll ' + error.message,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async find(@Res() response: Response, @Param('id') id: number) {
    try {
      return this.userService.findOne(id).then((user) => {
        if (user) {
          return response.status(200).json({
            status: 200,
            data: user,
          });
        } else {
          return response.status(203).json({
            status: 203,
            data: [],
          });
        }
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'UserController->find ' + error.message,
      );
    }
  }
}

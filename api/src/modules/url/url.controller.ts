import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  InternalServerErrorException,
  Req,
  Res,
  Put,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';

import { Request } from '../../interfaces/ExpressReq.interface';
import { Response } from 'express';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Res() response: Response,
    @Req() request: Request,
    @Body() createUrlDto: CreateUrlDto,
  ) {
    try {
      let pckd: string;
      // check if pckd is passed in, else throw error
      if (createUrlDto.pckd) {
        pckd = createUrlDto.pckd;
        // check if pckd is valid
        if (await this.urlService.isDuplicatePckd(pckd)) {
          return response.status(201).json({
            status: 201,
            message: 'The custom backhalf already exists, try a different one.',
          });
        }
      } else {
        pckd = await this.urlService.createRandomPckd();
      }

      createUrlDto.user = request.user;
      createUrlDto.pckd = pckd;
      return this.urlService
        .create(createUrlDto)
        .then((saveData) => {
          if (saveData) {
            return response.status(200).json({
              status: 200,
              message: 'create success',
              data: { createPckd: pckd },
            });
          } else {
            return response.status(201).json({
              status: 201,
              message: 'create fail',
            });
          }
        })
        .catch((error) => {
          return response.status(201).json({
            status: 201,
            message: error,
          });
        });
    } catch (error) {
      throw new InternalServerErrorException('url->create ' + error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Res() response: Response, @Req() request: Request) {
    try {
      const user = request.user;

      return this.urlService.findAll(user).then((data) => {
        if (data.length) {
          return response.status(200).json({
            status: 200,
            data: data,
          });
        } else {
          return response.status(203).json({
            status: 203,
            data: [],
          });
        }
      });
    } catch (error) {
      throw new InternalServerErrorException('url->findAll ' + error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Res() response: Response, @Param('id') id: string) {
    try {
      return this.urlService.findOne(+id).then((data) => {
        if (data) {
          return response.status(200).json({
            status: 200,
            data: data,
          });
        } else {
          return response.status(203).json({
            status: 203,
            data: [],
          });
        }
      });
    } catch (error) {
      throw new InternalServerErrorException('url->findOne ' + error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('getPckdInfo/:id')
  async getPckdInfo(@Res() response: Response, @Param('id') id: string) {
    try {
      return this.urlService.findOne(+id).then(async (data) => {
        if (data) {
          const hits = await this.urlService.findHits(data.id);
          const byCountryGraph = await this.urlService.byCountryGraph(data.id);

          Object.assign(data, { byCountryGraph: byCountryGraph, hits: hits });
          return response.status(200).json({
            status: 200,
            data: data,
          });
        } else {
          return response.status(203).json({
            status: 203,
            data: [],
          });
        }
      });
    } catch (error) {
      throw new InternalServerErrorException('url->findOne ' + error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Res() response: Response,
    @Req() request: Request,
    @Param('id') id: string,
    @Body() updateUrlDto: UpdateUrlDto,
  ) {
    try {
      return this.urlService
        .update(+id, updateUrlDto)
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
        });
    } catch (error) {
      throw new InternalServerErrorException('url->update ' + error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    try {
      return this.urlService.remove(+id).then((data: any) => {
        if (data) {
          return response.status(200).json({
            status: 200,
            message: 'delete success',
          });
        } else {
          return response.status(201).json({
            status: 201,
            message: 'delete fail',
          });
        }
      });
    } catch (error) {
      throw new InternalServerErrorException('url->remove ' + error.message);
    }
  }

  // hit

  @UseGuards(JwtAuthGuard)
  @Get('hit/:id')
  async getHitById(@Res() response: Response, @Param('id') id: string) {
    try {
      return this.urlService.getHitById(+id).then((data) => {
        if (data) {
          return response.status(200).json({
            status: 200,
            data: data,
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
        'url->getHitById ' + error.message,
      );
    }
  }
}

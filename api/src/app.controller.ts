import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { RealIP } from 'nestjs-real-ip';
import { Request } from './interfaces/ExpressReq.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('urlId/:id')
  async handleAll(
    @Req() request: Request,
    @Res() response: Response,
    @Param('id') id: string,
    @RealIP() ip: string,
  ) {
    try {
      if (ip === '::1') ip = '52.220.107.161'; // '74.125.24.100';
      const data = await this.appService.handleAll(id);

      if (!data || !data.target) {
        return response.status(404).json({
          statusCode: 404,
          error: 'Not Found',
        });
      }

      if (data.enableTracking) {
        this.appService.handleHitInsert(data, ip, request);
      }

      response.redirect(data.target);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        statusCode: 500,
        error: 'Server Error',
      });
    }
  }
}

import { MiddlewareConsumer, Module, NestModule, Scope } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';
import { OrmConfigAsync } from './ormconfig';
import { RouterModule } from 'nest-router';
import { routes } from './routes';
import { LoggingInterceptor } from './intercecptors/logging.interceptor';
import { LoggingMiddleware } from './middleware/logging.middleware';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { UrlModule } from './modules/url/url.module';
import { TbUrl } from './modules/url/entities/url.entity';
import { TbHits } from './modules/url/entities/hits.entity';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('EXPIRESIN') },
      }),
    }),
    TypeOrmModule.forFeature([TbUrl, TbHits]),
    TypeOrmModule.forRootAsync(OrmConfigAsync()),
    AuthModule,
    UsersModule,
    UrlModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}

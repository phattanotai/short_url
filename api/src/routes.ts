import { Routes } from 'nest-router';
import { AppModule } from './app.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { UrlModule } from './modules/url/url.module';

const path = '/api';

export const routes: Routes = [
  // {
  //   path: path,
  //   module: AppModule,
  // },
  // {
  //   path: path,
  //   module: AuthModule,
  // },
  // {
  //   path: path,
  //   module: UrlModule,
  // },
  // {
  //   path: path,
  //   module: UsersModule,
  // },
];

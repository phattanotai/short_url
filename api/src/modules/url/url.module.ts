import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { TbUrl } from './entities/url.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TbHits } from './entities/hits.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TbUrl, TbHits])],
  controllers: [UrlController],
  providers: [UrlService],
})
export class UrlModule {}

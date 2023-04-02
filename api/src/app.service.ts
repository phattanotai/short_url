import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from './interfaces/ExpressReq.interface';
import { Repository } from 'typeorm';
import { TbHits } from './modules/url/entities/hits.entity';
import { TbUrl } from './modules/url/entities/url.entity';
import * as parser from 'ua-parser-js';
import { IpregistryClient } from '@ipregistry/client';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TbUrl)
    private urlRepository: Repository<TbUrl>,
    @InjectRepository(TbHits)
    private hitsRepository: Repository<TbHits>,
    private configService: ConfigService,
  ) {}

  async handleAll(id: string) {
    try {
      const data = await this.urlRepository.findOne({
        where: [
          {
            pckd: id,
          },
        ],
        select: ['id', 'title', 'target', 'hitCount', 'enableTracking'],
      });

      this.urlRepository.update(data.id, {
        hitCount: data.hitCount + 1,
      });

      return data;
    } catch (error) {}
  }

  async handleHitInsert(pckd: TbUrl, ip: string, request: Request) {
    const userAgent = request.headers['user-agent'];
    const parsedUserAgent = parser(userAgent);

    const {
      browser: { name: browserName, version: browserVersion },
      os: { name: OSName, version: OSVersion },
    } = parsedUserAgent;

    let ipInfo = {};
    if (ip) {
      const rawIspInfo = await this.isp(ip).catch((error) => {
        console.error('IP address error: ', error);
      });

      if (rawIspInfo) {
        ipInfo = {
          type: rawIspInfo.type,
          isp: rawIspInfo.isp,
          timezoneName: rawIspInfo.timezone.name,
          timezoneOffset: rawIspInfo.timezone.offset,
          timezoneId: rawIspInfo.timezone.id,
          timezoneAbbreviation: rawIspInfo.timezone.abbreviation,
          locationName: rawIspInfo.location.name,
          locationCity: rawIspInfo.location.city,
          locationPostal: rawIspInfo.location.postal,
          locationCountryName: rawIspInfo.location.country.name,
          locationCountryCode: rawIspInfo.location.country.code,
          locationContinentName: rawIspInfo.location.continent.name,
          locationContinentCode: rawIspInfo.location.continent.code,
        };
      }
    }

    const data = {
      ip: ip,
      pckd: pckd,
      ...ipInfo,
      browserName: browserName,
      browserVersion: browserVersion,
      OSName: OSName,
      OSVersion: OSVersion,
    };

    this.hitsRepository.save(data).catch((error) => {
      console.error('save hits error: ', error);
    });
  }

  isp = async (ip: string) => {
    let returner;

    try {
      const client = new IpregistryClient(
        this.configService.get('IPREGISTRY_API_KEY'),
      );

      if (client) {
        // const { data } = await client.lookup('74.125.24.100');
        const { data } = await client.lookup(ip);

        returner = {
          type: data?.company?.type,
          isp: data?.connection?.organization,
          timezone: {
            name: data?.time_zone?.name,
            offset: data?.time_zone?.offset,
            id: data?.time_zone?.id,
            abbreviation: data?.time_zone?.abbreviation,
          },
          location: {
            name: data?.location?.region?.name,
            city: data?.location?.city,
            postal: data?.location?.postal,
            country: {
              name: data?.location?.country?.name,
              code: data?.location?.country?.code,
            },
            continent: {
              code: data?.location?.continent?.code,
              name: data?.location?.continent?.name,
            },
          },
        };
      }

      return returner;
    } catch (err) {
      throw err;
    }
  };
}

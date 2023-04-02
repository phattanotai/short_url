import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';
import { TbUrl } from './entities/url.entity';
import { generateId } from '../../helpers/helpers';
import { TbHits } from './entities/hits.entity';
import { Role } from '../users/models/enum/role.enum';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(TbUrl)
    private urlRepository: Repository<TbUrl>,
    @InjectRepository(TbHits)
    private hitsRepository: Repository<TbHits>,
  ) {}

  async create(createUrlDto: CreateUrlDto) {
    try {
      return this.urlRepository.save(createUrlDto).then((savedData: any) => {
        return savedData;
      });
    } catch (error) {
      throw { message: 'UrlService->create' + error.message };
    }
  }

  findAll(user: any) {
    try {
      if (user.role !== Role.ADMIN) {
        return this.urlRepository.find({
          where: [
            {
              user: user.id,
            },
          ],
          relations: ['user'],
        });
      } else {
        return this.urlRepository.find();
      }
    } catch (error) {
      throw { message: 'UrlService->findAll ' + error.message };
    }
  }

  findOne(id: number) {
    try {
      return this.urlRepository.findOne({ id });
    } catch (error) {
      throw { message: 'UrlService->findOne ' + error.message };
    }
  }

  async update(id: number, updateUrlDto: UpdateUrlDto) {
    try {
      return this.urlRepository
        .update(id, updateUrlDto)
        .then((savedData: any) => {
          return savedData.affected;
        });
    } catch (error) {
      throw { message: 'UrlService->update ' + error.message };
    }
  }

  async remove(id: number) {
    try {
      return this.urlRepository.delete(id).then((savedData: any) => {
        return savedData.affected;
      });
    } catch (error) {
      throw { message: 'UrlService->remove ' + error.message };
    }
  }

  async findHits(id: number) {
    try {
      const data = (
        await this.hitsRepository.find({ where: [{ pckd: id }] })
      ).map((d) => {
        return {
          ...d,
          browser: {
            name: d.browserName,
            version: d.browserVersion,
          },
          os: {
            name: d.OSName,
            version: d.OSVersion,
          },
        };
      });

      return data;
    } catch (error) {
      throw { message: 'UrlService->findHits ' + error.message };
    }
  }

  byCountryGraph = async (pckdId: number) => {
    try {
      // const data = await this.hitsRepository.find({
      //   where: [{ pckd: pckdId }],
      // });
      const data = await this.hitsRepository
        .createQueryBuilder()
        .select('locationCountryCode')
        .addSelect('locationCountryName')
        .addSelect('count(locationCountryCode) as count')
        .where('pckdId = :id', { id: pckdId })
        .groupBy('locationCountryCode')
        .addGroupBy('locationCountryName')
        .execute();

      return data.map((i) => ({
        country: { code: i.locationCountryCode, name: i.locationCountryName },
        count: Number(i.count),
      }));
    } catch (error) {
      throw { message: 'UrlService->byCountryGraph ' + error.message };
    }
  };

  getHitById = async (id: number) => {
    try {
      const data = await this.hitsRepository.findOne({ where: [{ id: id }] });

      return {
        ...data,
        browser: {
          name: data.browserName,
          version: data.browserVersion,
        },
        os: {
          name: data.OSName,
          version: data.OSVersion,
        },
        timezone: {
          name: data.timezoneName,
          offset: data.timezoneOffset,
          id: data.timezoneId,
          abbreviation: data.timezoneAbbreviation,
        },
        location: {
          name: data.locationName,
          city: data.locationCity,
          postal: data.locationPostal,
          country: {
            name: data.locationCountryName,
            code: data.locationCountryCode,
          },
          continent: {
            name: data.locationContinentName,
            code: data.locationContinentCode,
          },
        },
      };
    } catch (error) {
      throw { message: 'UrlService->findHits ' + error.message };
    }
  };

  isDuplicatePckd = async (pckd: string) => {
    // check for duplicate column prisma
    const column = await this.urlRepository.count({
      where: {
        pckd: pckd,
      },
    });

    if (column > 0) {
      return true;
    }
    return false;
  };

  createRandomPckd = async (size = 7) => {
    let pckd = generateId(size);
    while (await this.isDuplicatePckd(pckd)) {
      pckd = generateId(size);
    }
    return pckd;
  };
}

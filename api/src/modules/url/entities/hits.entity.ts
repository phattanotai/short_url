import { TbUsers } from 'src/modules/users/models/entities/users.entity';
import {
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbUrl } from './url.entity';

@Entity()
export class TbHits {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => TbUrl, (url) => url.id)
  pckd: TbUrl;

  @Column({ type: 'varchar', default: () => "'null'" })
  ip: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  type: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  isp: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  timezoneName: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  timezoneOffset: number;

  @Column({ type: 'varchar', default: () => "'null'" })
  timezoneId: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  timezoneAbbreviation: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  locationName: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  locationCity: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  locationPostal: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  locationCountryName: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  locationCountryCode: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  locationContinentName: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  locationContinentCode: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  browserName: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  browserVersion: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  OSName: string;

  @Column({ type: 'varchar', default: () => "'null'" })
  OSVersion: string;

  @Column({ type: 'timestamp', default: () => 'now()' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'now()' })
  updatedAt: Date;

  @BeforeUpdate()
  update() {
    this.updatedAt = new Date();
  }
}

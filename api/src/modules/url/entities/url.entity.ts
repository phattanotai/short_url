import { TbUsers } from 'src/modules/users/models/entities/users.entity';
import {
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TbUrl {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TbUsers, (user) => user.id)
  user: TbUsers;

  @Column({
    length: 10000,
  })
  target: string;

  @Column()
  pckd: string;

  @Column({ type: 'boolean', default: true })
  enableTracking: boolean;

  @Column({ type: 'int', default: 0 })
  hitCount: number;

  @Column()
  title: string;

  @Column({ type: 'timestamp', default: () => 'now()' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'now()' })
  updatedAt: Date;

  @BeforeUpdate()
  update() {
    this.updatedAt = new Date();
  }
}

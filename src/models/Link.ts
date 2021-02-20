import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('link')
class Link {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  code: string;

  @Column()
  hit: number;

  @CreateDateColumn()
  created_at: Date;

}

export default Link;
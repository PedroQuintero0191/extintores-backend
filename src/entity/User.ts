// import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column({type: 'varchar', length: 20, nullable: false})
  login: string;

  @Column({type: 'varchar', length: 20, nullable: false})
  password: string;

  @CreateDateColumn()
  CREATED_AT: 'string';

  @UpdateDateColumn()
  UPDATED_AT: 'string';
  
}
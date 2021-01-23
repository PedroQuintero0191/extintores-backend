// import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import Exting from "./Exting";

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column({type: 'varchar', length: 20, nullable: true})
  address: string;

  @Column({type: 'varchar', length: 15, nullable: true})
  phone: number;

  @Column({type: 'varchar', length: 20, nullable: false})
  doc: string;

  @OneToMany(
               () => Exting,
               (exting) => exting.customer,
               {eager: true, cascade: true}
    )
    public exting: Exting[];

  @CreateDateColumn()
  CREATED_AT: 'string';

  @UpdateDateColumn()
  UPDATED_AT: 'string';
  
}
export default Customer;
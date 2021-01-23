// import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import Exting from "./Exting";

@Entity()
export class History {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({type: 'varchar', length: 20, nullable: true})
  extinguisher: string;

  @Column({type: 'varchar', length: 20, nullable: true})
  customer: string;

  @Column({type: 'varchar', length: 20, nullable: true})
  user: string;

  @Column({ type: 'date' })
  last_recharge: Date;

  @ManyToOne(
    () => Exting, 
    (exting) => exting.history)
  public exting: Exting[];

  @CreateDateColumn()
  CREATED_AT: 'string';

  @UpdateDateColumn()
  UPDATED_AT: 'string';
  
}
export default History;
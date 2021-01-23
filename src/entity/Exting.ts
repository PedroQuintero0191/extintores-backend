// import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, BeforeInsert, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import Customer from "./Customer";
import History from "./History";

@Entity()
export class Exting {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  serial: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column({ type: 'date' })
  last_recharge: Date;

  @Column({ type: 'date' })
  next_recharge: Date;

  @ManyToOne(
    () => Customer, 
    (customer) => customer.exting)
  @JoinColumn({name: 'customer_id'})
  public customer: Customer;

  @OneToMany(
      () => History,
      (history) => history.exting,
      {eager: true, cascade: true}
  )
  public history: History[];

  @CreateDateColumn()
  CREATED_AT: 'string';

  @UpdateDateColumn()
  UPDATED_AT: 'string';
  
}
export default Exting;
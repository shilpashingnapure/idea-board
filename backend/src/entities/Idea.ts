import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("ideas") 
export class Idea {
    @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' , length : 280 })
  text!: string;

  @Column({ type: 'int', default: 0 })
  upvotes!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
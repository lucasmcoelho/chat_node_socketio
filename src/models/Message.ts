import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("message")
export default class Message {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  user: string;

  @Column()
  user_destino: string;

  @Column()
  text: string;
}

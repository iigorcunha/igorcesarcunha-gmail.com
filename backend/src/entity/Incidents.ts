import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Ongs } from './Ongs';

@Entity()
export class Incidents {
  
  @PrimaryGeneratedColumn()
    id: number;
  
  @Column({
    nullable: false,
  })
    title: string;
    
  
  @Column({
    nullable: false,
  })
    description:string
  
  @Column({
    nullable: false,
  })
    value:string
  
  @ManyToOne(type => Ongs, ongs => ongs.incidents)
    ong_id: Ongs;
}

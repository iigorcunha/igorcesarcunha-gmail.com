import {Entity, PrimaryColumn, Column, OneToMany} from "typeorm";
import { Incidents } from './Incidents';

@Entity()
export class Ongs {

  @PrimaryColumn()
    id: string;
  
  @Column()
    name: string;
  
  @Column()
    email: string;

  @Column()
    whatsapp: string;

  @Column()
    cidade: string;

  @Column({
    length: 2
  })
    uf: string;
  
  @OneToMany(type => Incidents, incidents => incidents.ong_id)
    incidents: Incidents[];
}

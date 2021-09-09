import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @ObjectIdColumn()
  _id: number;

  @Column()
  name: string;
}

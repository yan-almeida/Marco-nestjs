import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class EnumerationEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 50 })
  readonly titulo: string;
}

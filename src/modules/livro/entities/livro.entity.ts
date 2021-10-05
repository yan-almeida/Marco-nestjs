import { UniqueIdentifierEntity } from 'src/common/entities/unique-identifier.entity';
import { NormalizedColumn } from 'src/decorators/normalized-column.decorator';
import { Autor } from 'src/modules/autor/entities/autor.entity';
import { Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Livro extends UniqueIdentifierEntity {
  constructor(nome: string, valor: number, estoque: number, autores: Autor[]) {
    super();

    this.nome = nome;
    this.valor = valor;
    this.estoque = estoque;

    this.autores = autores;
  }

  @NormalizedColumn({ length: 120 })
  nome: string;

  @NormalizedColumn()
  valor: number;

  @NormalizedColumn({
    type: 'decimal',
    precision: 5,
    scale: 2,
    default: 0,
  })
  estoque: number;

  @ManyToMany(() => Autor, (autor) => autor.livros)
  @JoinTable()
  autores: Autor[];
}

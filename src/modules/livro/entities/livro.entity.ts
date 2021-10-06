import { UniqueIdentifierEntity } from 'src/common/entities/unique-identifier.entity';
import { NormalizedColumn } from 'src/decorators/normalized-column.decorator';
import { Autor } from 'src/modules/autor/entities/autor.entity';
import { Venda } from 'src/modules/venda/entities/venda.entity';
import { Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

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

  @OneToMany(() => Venda, (venda) => venda.livro)
  vendas: Venda[];
}

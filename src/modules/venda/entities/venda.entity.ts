import { UniqueIdentifierEntity } from 'src/common/entities/unique-identifier.entity';
import { NormalizedColumn } from 'src/decorators/normalized-column.decorator';
import { Livro } from 'src/modules/livro/entities/livro.entity';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Venda extends UniqueIdentifierEntity {
  constructor(valor: number, cliente: Usuario, livro: Livro) {
    super();

    this.valor = valor;
    this.cliente = cliente;
    this.livro = livro;
  }

  @NormalizedColumn()
  valor: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.vendas)
  @JoinColumn({ name: 'usuario_id' })
  cliente: Usuario;

  @ManyToOne(() => Livro, (livro) => livro.vendas)
  @JoinColumn({ name: 'livro_id' })
  livro: Livro;
}

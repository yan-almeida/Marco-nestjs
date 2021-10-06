import { UniqueIdentifierEntity } from 'src/common/entities/unique-identifier.entity';
import { Roles } from 'src/common/enums/roles.enum';
import { EncryptedColumn } from 'src/decorators/encrypted-column.decorator';
import { NormalizedColumn } from 'src/decorators/normalized-column.decorator';
import { Venda } from 'src/modules/venda/entities/venda.entity';
import { Entity, OneToMany } from 'typeorm';

@Entity()
export class Usuario extends UniqueIdentifierEntity {
  constructor(
    nome: string,
    email: string,
    telefone: string,
    endereco: string,
    senha: string,
    role: string,
  ) {
    super();

    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
    this.senha = senha;
    this.role = role;
  }

  @EncryptedColumn()
  nome: string;

  @EncryptedColumn()
  email: string;

  @EncryptedColumn()
  telefone: string;

  @NormalizedColumn()
  endereco: string;

  @NormalizedColumn({
    default: Roles.CLIENTE,
  })
  role: string;

  @NormalizedColumn()
  senha: string;

  @OneToMany(() => Venda, (venda) => venda.cliente)
  vendas: Venda[];
}

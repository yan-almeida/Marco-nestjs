import { UniqueIdentifierEntity } from 'src/common/entities/unique-identifier.entity';
import { EncryptedColumn } from 'src/decorators/encrypted-column.decorator';
import { Livro } from 'src/modules/livro/entities/livro.entity';
import { Entity, ManyToMany } from 'typeorm';

@Entity()
export class Autor extends UniqueIdentifierEntity {
  constructor(nome: string, email: string, telefone: string) {
    super();

    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }

  @EncryptedColumn()
  nome: string;

  @EncryptedColumn()
  email: string;

  @EncryptedColumn()
  telefone: string;

  @ManyToMany(() => Livro, (livro) => livro.autores)
  livros: Livro[];
}

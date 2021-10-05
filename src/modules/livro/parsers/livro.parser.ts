import { AutorDto } from 'src/modules/autor/dto/autor.dto';
import { Autor } from 'src/modules/autor/entities/autor.entity';
import { AutorParser } from 'src/modules/autor/parsers/autor.parser';
import { LivroDto } from '../dto/livro.dto';
import { Livro } from '../entities/livro.entity';

export class LivroParser {
  static toLivroDto(entity: Livro): LivroDto {
    return {
      id: entity.id,
      nome: entity.nome,
      valor: entity.valor,
      estoque: entity.estoque,
      autores: this.#parseAutores(entity.autores),
    };
  }

  static #parseAutores(autores: Autor[]): AutorDto[] {
    return autores.map(AutorParser.toAutorDto);
  }
}

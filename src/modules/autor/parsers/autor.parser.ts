import { AutorDto } from '../dto/autor.dto';
import { Autor } from '../entities/autor.entity';

export class AutorParser {
  static toAutorDto(entity: Autor): AutorDto {
    return {
      id: entity.id,
      nome: entity.nome,
      email: entity.email,
      telefone: entity.telefone,
    };
  }
}

import { UsuarioDto } from '../dto/usuario.dto';
import { Usuario } from '../entities/usuario.entity';

export class UsuarioParser {
  static toUsuarioDto(entity: Usuario): UsuarioDto {
    return {
      id: entity.id,
      nome: entity.nome,
      email: entity.email,
      endereco: entity.endereco,
      telefone: entity.telefone,
      role: entity.role,
    };
  }
}

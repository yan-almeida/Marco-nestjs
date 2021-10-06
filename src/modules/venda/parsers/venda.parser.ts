import { LivroParser } from 'src/modules/livro/parsers/livro.parser';
import { UsuarioParser } from 'src/modules/usuario/parsers/usuario.parser';
import { VendaDto } from '../dto/venda.dto';
import { Venda } from '../entities/venda.entity';

export class VendaParser {
  static toVendaDto(entity: Venda): VendaDto {
    return {
      id: entity.id,
      cliente: UsuarioParser.toUsuarioDto(entity.cliente),
      livro: LivroParser.toLivroDto(entity.livro),
    };
  }
}

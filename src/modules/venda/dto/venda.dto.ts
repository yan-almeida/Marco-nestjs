import { ApiProperty } from '@nestjs/swagger';
import { LivroDto } from 'src/modules/livro/dto/livro.dto';
import { UsuarioDto } from 'src/modules/usuario/dto/usuario.dto';

export class VendaDto {
  @ApiProperty({ format: 'uuid', type: String })
  id: string;

  @ApiProperty()
  cliente: UsuarioDto;

  @ApiProperty()
  livro: LivroDto;
}

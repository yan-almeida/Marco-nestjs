import { ApiProperty } from '@nestjs/swagger';
import { AutorDto } from 'src/modules/autor/dto/autor.dto';

export class LivroDto {
  @ApiProperty({
    format: 'uuid',
    type: 'string',
  })
  id: string;

  @ApiProperty({
    example: 'Pequeno Principe',
  })
  nome: string;

  @ApiProperty({ example: 22.89 })
  valor: number;

  @ApiProperty({ example: Math.floor(Math.random() * 100) })
  estoque: number;

  @ApiProperty({
    type: [AutorDto],
  })
  autores: AutorDto[];
}

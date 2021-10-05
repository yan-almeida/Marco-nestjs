import { ApiProperty } from '@nestjs/swagger';

export class AutorDto {
  @ApiProperty({
    format: 'uuid',
    type: 'string',
  })
  id: string;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  telefone: string;
}

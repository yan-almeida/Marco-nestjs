import { ApiProperty } from '@nestjs/swagger';

export class AutorDto {
  @ApiProperty({
    format: 'uuid',
    type: 'string',
  })
  id: string;

  @ApiProperty({
    example: 'Marco',
  })
  nome: string;

  @ApiProperty({
    example: 'example@example.com',
  })
  email: string;

  @ApiProperty({ example: '(00) 9 0000-0000' })
  telefone: string;
}

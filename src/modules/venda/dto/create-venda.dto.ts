import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateVendaDto {
  @ApiProperty({
    format: 'uuid',
    type: 'string',
  })
  @IsUUID('4', { message: 'GUID é inválido - Cliente.' })
  idCliente: string;

  @ApiProperty({
    format: 'uuid',
    type: 'string',
  })
  @IsUUID('4', { message: 'GUID é inválido - Livro.' })
  idLivro: string;
}

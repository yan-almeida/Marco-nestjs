import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateLivroDto {
  @ApiProperty({
    example: 'Pequeno Principe',
  })
  @IsString({ message: 'Nome é inválido.' })
  @MaxLength(120, {
    message: 'Tamanho máximo do nome deve ser menor que 120 caracteres.',
  })
  @MinLength(2, {
    message: 'Tamanho mínimo do nome deve ser maior que 2 caracteres.',
  })
  nome: string;

  @ApiProperty({ example: 22 })
  @IsNumber({}, { message: 'Valor é inválido.' })
  valor: number;

  @ApiProperty({ example: Math.floor(Math.random() * 100) })
  @IsNumber({}, { message: 'Estoque é inválido.' })
  estoque: number;

  @ApiProperty({
    format: 'uuid',
    type: [String],
  })
  @IsArray({ message: 'Array de ids é inválido.' })
  @Type(() => String)
  idsAutores: string[];
}

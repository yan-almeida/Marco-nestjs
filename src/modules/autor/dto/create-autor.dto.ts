import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAutorDto {
  @ApiProperty({
    example: 'Marco',
  })
  @IsString({ message: 'Nome é inválido.' })
  @MaxLength(255, {
    message: 'Tamanho máximo do nome deve ser menor que 255 caracteres.',
  })
  @MinLength(2, {
    message: 'Tamanho mínimo do nome deve ser maior que 2 caracteres.',
  })
  nome: string;

  @ApiProperty({
    example: 'example@example.com',
  })
  @MaxLength(255, {
    message: 'Tamanho máximo do email deve ser menor que 255 caracteres.',
  })
  @MinLength(2, {
    message: 'Tamanho mínimo do email deve ser maior que 2 caracteres.',
  })
  @IsEmail({}, { message: 'Email inválido.' })
  email: string;

  @ApiProperty({ example: '(00) 9 0000-0000' })
  @MaxLength(16, {
    message: 'Tamanho máximo do telefone deve ser menor que 16 caracteres.',
  })
  @IsString({ message: 'Telefone é inválido.' })
  @MinLength(8, {
    message: 'Tamanho mínimo do telefone deve ser maior que 8 caracteres.',
  })
  @Transform((property) => property.value.replace(/\D+/g, ''))
  telefone: string;
}

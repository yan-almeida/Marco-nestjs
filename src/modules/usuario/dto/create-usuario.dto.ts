import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Roles } from 'src/common/enums/roles.enum';
import { HashPasswordTransform } from 'src/transformers/hash-password.transform';
import { KeepAllNumbersTransform } from 'src/transformers/keep-all-numbers.transform';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Faker = require('faker-br');

export class CreateUsuarioDto {
  @ApiProperty({ example: Faker.name.findName() })
  @IsString({ message: 'Nome é inválido.' })
  @MaxLength(255, {
    message: 'Tamanho máximo do nome deve ser menor que 255 caracteres.',
  })
  @MinLength(2, {
    message: 'Tamanho mínimo do nome deve ser maior que 2 caracteres.',
  })
  nome: string;

  @ApiProperty({
    example: Faker.internet.email(),
  })
  @MaxLength(255, {
    message: 'Tamanho máximo do email deve ser menor que 255 caracteres.',
  })
  @MinLength(2, {
    message: 'Tamanho mínimo do email deve ser maior que 2 caracteres.',
  })
  @IsEmail({}, { message: 'Email inválido.' })
  email: string;

  @ApiPropertyOptional({ example: Faker.phone.phoneNumber() })
  @MaxLength(16, {
    message: 'Tamanho máximo do telefone deve ser menor que 16 caracteres.',
  })
  @IsOptional()
  @IsString({ message: 'Telefone é inválido.' })
  @MinLength(8, {
    message: 'Tamanho mínimo do telefone deve ser maior que 8 caracteres.',
  })
  @Transform(KeepAllNumbersTransform)
  telefone?: string;

  @ApiPropertyOptional({
    example: `${Faker.address.streetAddress()} - ${Faker.address.state()}`,
  })
  @IsOptional()
  endereco?: string;

  @ApiProperty({
    enum: Roles,
    example: Roles.CLIENTE,
  })
  @IsString({ message: 'Role é inválida.' })
  @IsEnum(Roles, { message: 'Role não existente.' })
  role: string;

  @ApiProperty({ example: Faker.internet.password() })
  @IsString({ message: 'A senha é obrigatória.' })
  @Transform(HashPasswordTransform)
  senha: string;
}

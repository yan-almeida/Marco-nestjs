import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Roles } from 'src/common/enums/roles.enum';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Faker = require('faker-br');

export class UsuarioDto {
  @ApiProperty({ format: 'uuid', type: String })
  id: string;

  @ApiProperty({ example: Faker.name.findName() })
  nome: string;

  @ApiProperty({
    example: Faker.internet.email(),
  })
  email: string;

  @ApiPropertyOptional({ example: Faker.phone.phoneNumber() })
  telefone?: string;

  @ApiPropertyOptional({
    example: `${Faker.address.streetAddress()} - ${Faker.address.state()}`,
  })
  endereco?: string;

  @ApiProperty({
    enum: Roles,
    example: Roles.CLIENTE,
  })
  role: string;
}

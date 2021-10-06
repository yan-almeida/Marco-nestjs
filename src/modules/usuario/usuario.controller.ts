import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiController } from 'src/decorators/swagger/api-controller.decorator';
import { BadRequestResponse } from 'src/decorators/swagger/bad-request-response.decorator';
import { CreatedResponse } from 'src/decorators/swagger/created-response.decorator';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioParser } from './parsers/usuario.parser';
import { UsuarioService } from './usuario.service';

@ApiController('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @CreatedResponse({
    type: UsuarioDto,
    description: 'Criação de Usuário',
  })
  @BadRequestResponse()
  async create(@Body() dto: CreateUsuarioDto): Promise<UsuarioDto> {
    const result = await this.usuarioService.create(dto);

    return UsuarioParser.toUsuarioDto(result);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }
}

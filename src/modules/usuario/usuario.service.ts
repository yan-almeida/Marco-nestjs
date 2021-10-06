import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError } from 'src/exceptions/entity-not-found-error.exception';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly _usuarioRepo: Repository<Usuario>,
  ) {}

  create(dto: CreateUsuarioDto) {
    const usuario = this._usuarioRepo.create(dto);

    return this._usuarioRepo.save(usuario);
  }

  findAll() {
    return `This action returns all usuario`;
  }

  async findOne(id: string) {
    const usuario = await this._usuarioRepo.findOne(id);

    if (!usuario) {
      throw new EntityNotFoundError(Usuario, id);
    }

    return usuario;
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: string) {
    return `This action removes a #${id} usuario`;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError } from 'src/exceptions/entity-not-found-error.exception';
import { Repository } from 'typeorm';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { Autor } from './entities/autor.entity';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor) private readonly _autorRepo: Repository<Autor>,
  ) {}

  create(dto: CreateAutorDto) {
    const autor = this._autorRepo.create(dto);

    return this._autorRepo.save(autor);
  }

  async findAll() {
    const autores = await this._autorRepo.find();

    if (autores.length === 0) {
      throw new EntityNotFoundError(Autor);
    }

    return autores;
  }

  async findOne(id: string) {
    const autor = await this._autorRepo.findOne(id);

    if (!autor) {
      throw new EntityNotFoundError(Autor, id);
    }

    return autor;
  }

  async update(id: string, dto: UpdateAutorDto) {
    await this.findOne(id);

    await this._autorRepo.update(id, dto);

    return this.findOne(id);
  }

  async remove(id: string) {
    const deleteResult = await this._autorRepo.delete(id);

    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Autor, id);
    }
  }
}

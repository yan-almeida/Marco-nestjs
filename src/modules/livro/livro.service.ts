import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AutorService } from '../autor/autor.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';

@Injectable()
export class LivroService {
  constructor(
    @InjectRepository(Livro) private readonly _livroRepo: Repository<Livro>,
    private readonly autorService: AutorService,
  ) {}

  async create(dto: CreateLivroDto) {
    const autores = await this.autorService.findByIds(dto.idsAutores);

    const livro = this._livroRepo.create({
      ...dto,
      autores,
    });

    return this._livroRepo.save(livro);
  }

  findAll() {
    return `This action returns all livro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} livro`;
  }

  update(id: number, dto: UpdateLivroDto) {
    return `This action updates a #${id} livro`;
  }

  remove(id: number) {
    return `This action removes a #${id} livro`;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { Page } from '../../common/dtos/page.dto';
import { AutorService } from '../autor/autor.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { FilterLivroDto } from './dto/filter-livro.dto';
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

  async findAll(filter: FilterLivroDto) {
    const queryBuilder = this._livroRepo.createQueryBuilder('l');

    filter.createPaginationQuery(queryBuilder);
    filter.createWhere(queryBuilder);

    const [livros, count] = await queryBuilder.getManyAndCount();

    return Page.of(livros, count);
  }

  async findOne(id: string) {
    const livro = await this._livroRepo.findOne(id, { relations: ['autores'] });

    if (!livro) {
      throw new EntityNotFoundError(Livro, id);
    }

    return livro;
  }

  update(id: number, dto: UpdateLivroDto) {
    return `This action updates a #${id} livro`;
  }

  remove(id: number) {
    return `This action removes a #${id} livro`;
  }
}

import { Body, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiController } from 'src/decorators/swagger/api-controller.decorator';
import { BadRequestResponse } from 'src/decorators/swagger/bad-request-response.decorator';
import { CreatedResponse } from 'src/decorators/swagger/created-response.decorator';
import { NotFoundResponse } from 'src/decorators/swagger/not-found-response.decorator';
import { Page } from '../../common/dtos/page.dto';
import { OkResponse } from '../../decorators/swagger/ok-response.decorator';
import { CreateLivroDto } from './dto/create-livro.dto';
import { FilterLivroDto } from './dto/filter-livro.dto';
import { LivroDto } from './dto/livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { LivroService } from './livro.service';
import { LivroParser } from './parsers/livro.parser';

@ApiController('livro')
export class LivroController {
  constructor(private readonly _livroService: LivroService) {}

  @Post()
  @CreatedResponse({
    description: 'Criação de Livro',
    type: LivroDto,
  })
  @BadRequestResponse()
  @NotFoundResponse()
  async create(@Body() dto: CreateLivroDto): Promise<LivroDto> {
    const result = await this._livroService.create(dto);

    return LivroParser.toLivroDto(result);
  }

  @Get()
  @OkResponse({
    description: 'Listagem de Livros - paginação',
    type: LivroDto,
  })
  async findAll(@Query() filter: FilterLivroDto): Promise<Page<LivroDto>> {
    const paginated = await this._livroService.findAll(filter);

    return paginated.map(LivroParser.toLivroDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._livroService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLivroDto: UpdateLivroDto) {
    return this._livroService.update(+id, updateLivroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._livroService.remove(+id);
  }
}

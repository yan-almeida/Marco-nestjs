import {
  Body,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiController } from 'src/decorators/swagger/api-controller.decorator';
import { BadRequestResponse } from 'src/decorators/swagger/bad-request-response.decorator';
import { CreatedResponse } from 'src/decorators/swagger/created-response.decorator';
import { NoContentResponse } from 'src/decorators/swagger/no-content-response.decorator';
import { NotFoundResponse } from 'src/decorators/swagger/not-found-response.decorator';
import { OkResponse } from 'src/decorators/swagger/ok-response.decorator';
import { AutorService } from './autor.service';
import { AutorDto } from './dto/autor.dto';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { AutorParser } from './parsers/autor.parser';

@ApiController('autor')
export class AutorController {
  constructor(private readonly _autorService: AutorService) {}

  @Post()
  @CreatedResponse({
    type: AutorDto,
    description: 'Criação de Autor',
  })
  @BadRequestResponse()
  async create(@Body() dto: CreateAutorDto): Promise<AutorDto> {
    const result = await this._autorService.create(dto);

    return AutorParser.toAutorDto(result);
  }

  @Get()
  @OkResponse({
    type: [AutorDto],
    description: 'Listagem de Autores',
  })
  @NotFoundResponse()
  async findAll(): Promise<AutorDto[]> {
    const result = await this._autorService.findAll();

    return result.map(AutorParser.toAutorDto);
  }

  @Get(':id')
  @OkResponse({
    type: AutorDto,
    description: 'Listagem de Autor',
  })
  @NotFoundResponse()
  @BadRequestResponse()
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    const result = await this._autorService.findOne(id);

    return AutorParser.toAutorDto(result);
  }

  @Patch(':id')
  @OkResponse({
    type: AutorDto,
    description: 'Atualização de Autor',
  })
  @NotFoundResponse()
  @BadRequestResponse()
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateAutorDto,
  ) {
    const result = await this._autorService.update(id, dto);

    return AutorParser.toAutorDto(result);
  }

  @Delete(':id')
  @NoContentResponse({
    description: 'Deleção de Autor',
  })
  @NotFoundResponse()
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this._autorService.remove(id);
  }
}

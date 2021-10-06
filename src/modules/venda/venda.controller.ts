import { Body, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiController } from 'src/decorators/swagger/api-controller.decorator';
import { BadRequestResponse } from 'src/decorators/swagger/bad-request-response.decorator';
import { CreatedResponse } from 'src/decorators/swagger/created-response.decorator';
import { NotFoundResponse } from 'src/decorators/swagger/not-found-response.decorator';
import { CreateVendaDto } from './dto/create-venda.dto';
import { VendaDto } from './dto/venda.dto';
import { VendaParser } from './parsers/venda.parser';
import { VendaService } from './venda.service';

@ApiController('venda')
export class VendaController {
  constructor(private readonly _vendaService: VendaService) {}

  @Post()
  @CreatedResponse({
    type: VendaDto,
    description: 'Criação de Venda',
  })
  @BadRequestResponse()
  @NotFoundResponse()
  async create(@Body() dto: CreateVendaDto): Promise<VendaDto> {
    const result = await this._vendaService.create(dto);

    return VendaParser.toVendaDto(result);
  }

  @Get()
  findAll() {
    return this._vendaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._vendaService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._vendaService.remove(+id);
  }
}

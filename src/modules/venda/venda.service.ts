import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LivroService } from '../livro/livro.service';
import { UsuarioService } from '../usuario/usuario.service';
import { CreateVendaDto } from './dto/create-venda.dto';
import { Venda } from './entities/venda.entity';

@Injectable()
export class VendaService {
  constructor(
    @InjectRepository(Venda) private readonly _vendaRepo: Repository<Venda>,
    private readonly _usuarioService: UsuarioService,
    private readonly _livroService: LivroService,
  ) {}

  async create(dto: CreateVendaDto) {
    const { cliente, livro } = await this.#searchClienteLivro(dto);

    const venda = this._vendaRepo.create({
      cliente,
      livro,
      valor: livro.valor,
    });

    return this._vendaRepo.save(venda);
  }

  findAll() {
    return `This action returns all venda`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venda`;
  }

  remove(id: number) {
    return `This action removes a #${id} venda`;
  }

  async #searchClienteLivro(dto: CreateVendaDto) {
    const cliente = await this._usuarioService.findOne(dto.idCliente);

    const livro = await this._livroService.findOne(dto.idLivro);

    return {
      cliente,
      livro,
    };
  }
}

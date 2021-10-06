import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivroModule } from '../livro/livro.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { Venda } from './entities/venda.entity';
import { VendaController } from './venda.controller';
import { VendaService } from './venda.service';

@Module({
  imports: [TypeOrmModule.forFeature([Venda]), LivroModule, UsuarioModule],
  controllers: [VendaController],
  providers: [VendaService],
  exports: [VendaService],
})
export class VendaModule {}

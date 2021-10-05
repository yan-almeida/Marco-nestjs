import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorModule } from '../autor/autor.module';
import { Livro } from './entities/livro.entity';
import { LivroController } from './livro.controller';
import { LivroService } from './livro.service';

@Module({
  imports: [TypeOrmModule.forFeature([Livro]), AutorModule],
  controllers: [LivroController],
  providers: [LivroService],
  exports: [LivroService],
})
export class LivroModule {}

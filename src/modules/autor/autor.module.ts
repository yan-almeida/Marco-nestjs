import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorController } from './autor.controller';
import { AutorService } from './autor.service';
import { Autor } from './entities/autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Autor])],
  controllers: [AutorController],
  providers: [AutorService],
  exports: [AutorService],
})
export class AutorModule {}

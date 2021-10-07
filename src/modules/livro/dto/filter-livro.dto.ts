import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { SelectQueryBuilder } from 'typeorm';
import { PaginationDto } from '../../../common/dtos/pagination.dto';
import { Livro } from '../entities/livro.entity';

export class FilterLivroDto extends PaginationDto<Livro> {
  @ApiPropertyOptional({ example: 'Pequeno Principe' })
  @IsString({ message: 'Nome é inválido.' })
  @IsOptional()
  nome: string;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  valorMin: number;

  @ApiPropertyOptional({ example: 20 })
  @IsOptional()
  valorMax: number;

  createWhere(queryBuilder: SelectQueryBuilder<Livro>): void {
    this.withFilter(this.nome, () =>
      queryBuilder.andWhere('l.nome like :nome', {
        nome: this.createLike(this.nome),
      }),
    );

    this.withFilter(this.valorMin, () =>
      queryBuilder.andWhere('l.valor >= :valorMin', {
        valorMin: this.valorMin,
      }),
    );

    this.withFilter(this.valorMax, () =>
      queryBuilder.andWhere('l.valor <= :valorMax', {
        valorMax: this.valorMax,
      }),
    );
  }
}

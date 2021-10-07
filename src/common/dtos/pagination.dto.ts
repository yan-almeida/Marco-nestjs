import { ApiPropertyOptional } from '@nestjs/swagger';
import { Allow, IsNumberString, IsOptional } from 'class-validator';
import { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder';
import {
  BuilderFunction,
  EntityFilterBuilder,
} from '../builders/entity-filter.builder';

export abstract class PaginationDto<T> {
  @ApiPropertyOptional({
    description: 'Paginação: limite de entidade retornadas na consulta',
  })
  @IsOptional()
  @IsNumberString()
  limit: number;

  @ApiPropertyOptional({
    description:
      'Paginação: quantidade de entidades para considerar como offset na consulta',
  })
  @IsOptional()
  @IsNumberString()
  skip: number;

  @IsOptional()
  @Allow()
  order: {
    [prop: string]: 'ASC' | 'DESC';
  };

  createOrder(queryBuilder: SelectQueryBuilder<T>): void {
    if (this.order) {
      Object.entries(this.order).forEach(([field, value]) => {
        queryBuilder.addOrderBy(`${queryBuilder.alias}.${field}`, value);
      });
    }
  }

  createPaginationQuery(queryBuilder: SelectQueryBuilder<T>): void {
    queryBuilder.skip(this.skip ?? 0).take(this.limit ?? 10);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createWhere(queryBuilder: SelectQueryBuilder<T>): void {
    // to override
  }

  protected getWithArray(value: any) {
    return EntityFilterBuilder.getAsArray(value);
  }

  protected withFilter<E>(field: E, fnc: BuilderFunction<E>) {
    EntityFilterBuilder.withFilter(field, fnc);
  }

  protected withOrderBy<E>(field: E, value: E, fnc: BuilderFunction<E>) {
    EntityFilterBuilder.withOrderBy(field, value, fnc);
  }

  protected createLike(value: string) {
    return EntityFilterBuilder.createLike(value);
  }
}

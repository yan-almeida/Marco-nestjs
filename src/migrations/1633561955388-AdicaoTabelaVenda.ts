import { MigrationInterface, QueryRunner } from 'typeorm';

export class AdicaoTabelaVenda1633561955388 implements MigrationInterface {
  name = 'AdicaoTabelaVenda1633561955388';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tb_venda" ("id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "valor" integer NOT NULL, CONSTRAINT "PK_3b1cbfa751ba42d551e0e461f29" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tb_venda"`);
  }
}

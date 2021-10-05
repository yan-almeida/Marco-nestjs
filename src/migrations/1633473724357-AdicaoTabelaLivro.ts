import { MigrationInterface, QueryRunner } from 'typeorm';

export class AdicaoTabelaLivro1633473724357 implements MigrationInterface {
  name = 'AdicaoTabelaLivro1633473724357';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tb_livro" ("id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nome" character varying NOT NULL, "valor" integer NOT NULL, "estoque" integer NOT NULL, CONSTRAINT "PK_a34ac974cd1881d4d8f7711557f" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tb_livro"`);
  }
}

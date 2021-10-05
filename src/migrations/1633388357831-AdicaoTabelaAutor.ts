import { MigrationInterface, QueryRunner } from 'typeorm';

export class AdicaoTabelaAutor1633388357831 implements MigrationInterface {
  name = 'AdicaoTabelaAutor1633388357831';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tb_autor" ("id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, CONSTRAINT "PK_82afde2a7fc8e765a3d3803513b" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tb_autor"`);
  }
}

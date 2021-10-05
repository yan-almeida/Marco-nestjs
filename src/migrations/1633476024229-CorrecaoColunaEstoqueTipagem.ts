import { MigrationInterface, QueryRunner } from 'typeorm';

export class CorrecaoColunaEstoqueTipagem1633476024229
  implements MigrationInterface
{
  name = 'CorrecaoColunaEstoqueTipagem1633476024229';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tb_livro" DROP COLUMN "nome"`);
    await queryRunner.query(
      `ALTER TABLE "tb_livro" ADD "nome" character varying(120) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "tb_livro" DROP COLUMN "estoque"`);
    await queryRunner.query(
      `ALTER TABLE "tb_livro" ADD "estoque" numeric(5,2) NOT NULL DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tb_livro" DROP COLUMN "estoque"`);
    await queryRunner.query(
      `ALTER TABLE "tb_livro" ADD "estoque" integer NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "tb_livro" DROP COLUMN "nome"`);
    await queryRunner.query(
      `ALTER TABLE "tb_livro" ADD "nome" character varying NOT NULL`,
    );
  }
}

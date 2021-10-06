import { MigrationInterface, QueryRunner } from 'typeorm';

export class AdicaoRelacionamentVendaClienteELivroManyToOne1633562283314
  implements MigrationInterface
{
  name = 'AdicaoRelacionamentVendaClienteELivroManyToOne1633562283314';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tb_venda" ADD "usuario_id" uuid`);
    await queryRunner.query(`ALTER TABLE "tb_venda" ADD "livro_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "tb_venda" ADD CONSTRAINT "FK_7f09c9214bbb6319420255aa9ba" FOREIGN KEY ("usuario_id") REFERENCES "tb_usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_venda" ADD CONSTRAINT "FK_4303583e9cc4a1544a3dfc9ce33" FOREIGN KEY ("livro_id") REFERENCES "tb_livro"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tb_venda" DROP CONSTRAINT "FK_4303583e9cc4a1544a3dfc9ce33"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_venda" DROP CONSTRAINT "FK_7f09c9214bbb6319420255aa9ba"`,
    );
    await queryRunner.query(`ALTER TABLE "tb_venda" DROP COLUMN "livro_id"`);
    await queryRunner.query(`ALTER TABLE "tb_venda" DROP COLUMN "usuario_id"`);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class AdicaoRelacionamentoAutorELivroManyToMany1633474059133
  implements MigrationInterface
{
  name = 'AdicaoRelacionamentoAutorELivroManyToMany1633474059133';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tb_livro_autores_autor" ("livroId" uuid NOT NULL, "autorId" uuid NOT NULL, CONSTRAINT "PK_b455c8db20de31a5ee6ea41bdc7" PRIMARY KEY ("livroId", "autorId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d2ee73bd10b8d029269d6ed489" ON "tb_livro_autores_autor" ("livroId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_7f58ee0e32f117139d0a477ec0" ON "tb_livro_autores_autor" ("autorId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_livro_autores_autor" ADD CONSTRAINT "FK_d2ee73bd10b8d029269d6ed489e" FOREIGN KEY ("livroId") REFERENCES "tb_livro"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_livro_autores_autor" ADD CONSTRAINT "FK_7f58ee0e32f117139d0a477ec00" FOREIGN KEY ("autorId") REFERENCES "tb_autor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tb_livro_autores_autor" DROP CONSTRAINT "FK_7f58ee0e32f117139d0a477ec00"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tb_livro_autores_autor" DROP CONSTRAINT "FK_d2ee73bd10b8d029269d6ed489e"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_7f58ee0e32f117139d0a477ec0"`);
    await queryRunner.query(`DROP INDEX "IDX_d2ee73bd10b8d029269d6ed489"`);
    await queryRunner.query(`DROP TABLE "tb_livro_autores_autor"`);
  }
}

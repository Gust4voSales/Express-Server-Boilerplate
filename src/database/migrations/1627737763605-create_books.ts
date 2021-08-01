import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBooks1627737763605 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "books",
			columns: [
				{
					name: "id",
					type: "integer",
					unsigned: true,
					isPrimary: true,
					isGenerated: true,
					generationStrategy: "increment",
				},
				{
					name: "title",
					type: "varchar",
				},
				{
					name: "author",
					type: "varchar",
				},
				{
					name: "pages",
					type: "integer",
				},
			],
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		queryRunner.dropTable('books')
	}
}

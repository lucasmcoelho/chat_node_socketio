import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTabelaMensagem1621732499738 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"message",
                columns:[
                    {
                        name: "id",
                        type: "integer",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name:"user",
                        type:"varchar"
                    },
                    {
                        name:"user_destino",
                        type:"varchar"
                    },
                    {
                        name:"text",
                        type:"varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("message");
    }

}

import {
    Column, PrimaryColumn, PrimaryGeneratedColumn,
} from "typeorm";

export abstract class Asset {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({nullable: true})
    description!: string;
}

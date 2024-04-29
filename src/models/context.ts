import {
    Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne
} from "typeorm";
import {Character} from "./character";

@Entity()
export class Context {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    prompt!: string;

    @Column()
    utterance!: string;

    @Column()
    response!: string;

    @ManyToOne(() => Character, (character) => character.contexts, {onDelete: "CASCADE"})
    character!: Character;
}

import {
    Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne, OneToMany
} from "typeorm";
import {Character} from "./character";
import {Game} from "./game";
import {Dialogue} from "./dialogue";

@Entity()
export class Context {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    prompt!: string;

    @OneToMany(() => Dialogue, (dialogue) => dialogue.context, {onDelete: "CASCADE"})
    dialogues!: Dialogue[];

    @ManyToOne(() => Character, (character) => character.contexts, {onDelete: "SET NULL"})
    character!: Character;

    @ManyToOne(() => Game, (game) => game.contexts, {onDelete: "SET NULL"})
    game!: Game;
}

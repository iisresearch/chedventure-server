import {
    Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne, OneToMany
} from "typeorm";
import {Character} from "./character";
import {Game} from "./game";
import {Message} from "./message";

@Entity()
export class Context {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    prompt!: string;

    @OneToMany(() => Message, (message) => message.context, { cascade: true, nullable: true, eager: true, onDelete: "CASCADE"})
    messages!: Message[];

    @ManyToOne(() => Character, (character) => character.contexts, {onDelete: "SET NULL"})
    character!: Character;

    @ManyToOne(() => Game, (game) => game.contexts, {onDelete: "SET NULL"})
    game!: Game;
}

import {
    Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne
} from "typeorm";
import {Context} from "./context";
import {Character} from "./character";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    intent!: number;

    @Column({default: ''})
    continuation!: string;

    @Column({default: ''})
    contextualisation!: string;

    @Column("text",{default: ''})
    utterance!: string;

    @Column("text",{default: ''})
    response!: string;

    @Column({default: ''})
    fallback!: string;

    @Column({default: ''})
    variable!: string;

    @ManyToOne(() => Context, (context) => context.messages, {onDelete: "CASCADE"})
    context!: Context;

    @ManyToOne(() => Character, (character) => character.messages, {onDelete: "CASCADE"})
    character!: Character;
}

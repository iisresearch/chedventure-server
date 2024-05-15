import {
    Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne
} from "typeorm";
import {Context} from "./context";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    intent!: number;

    @Column({nullable: true})
    continuation!: number;

    @Column({nullable: true})
    contextualisation!: string;

    @Column()
    utterance!: string;

    @Column()
    response!: string;

    @ManyToOne(() => Context, (context) => context.messages, {onDelete: "CASCADE"})
    context!: Context;
}

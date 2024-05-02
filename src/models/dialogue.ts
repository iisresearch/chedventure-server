import {
    Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne
} from "typeorm";
import {Context} from "./context";

@Entity()
export class Dialogue {
    @PrimaryGeneratedColumn()
    intent!: number;

    @Column()
    continuation!: number;

    @Column()
    contextualisation!: string;

    @Column()
    utterance!: string;

    @Column()
    response!: string;

    @ManyToOne(() => Context, (context) => context, {onDelete: "CASCADE"})
    context!: Context;
}

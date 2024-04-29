import {
    Entity,
    Column,
    OneToMany, ManyToOne
} from "typeorm";
import {Asset} from "./asset";
import {Game} from "./game";
import {Context} from "./context";

@Entity()
export class Character extends Asset {
    @Column({nullable: true})
    title!: string;

    @Column()
    chatbotUrl!: string;

    @ManyToOne(() => Game, (game) => game.characters, {onDelete: "CASCADE"})
    game!: Game;

    @OneToMany(() => Context, context => context.character, {cascade: true, nullable: true, onDelete: "CASCADE"})
    contexts!: Context[];
}

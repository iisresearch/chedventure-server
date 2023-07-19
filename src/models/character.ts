import {
    Entity,
    Column,
    PrimaryGeneratedColumn, OneToMany, PrimaryColumn, ManyToOne
} from "typeorm";
import {Asset} from "./asset";
import {Game} from "./game";

@Entity()
export class Character extends Asset {
    @Column({ nullable: true})
    title!: string;

    @Column()
    chatbotUrl!: string;

    @ManyToOne(() => Game, (game) => game.characters, {onDelete: "CASCADE"})
    game!: Game;
}

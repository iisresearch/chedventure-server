import {
    Entity,
    Column,
    OneToMany, ManyToOne, UpdateDateColumn
} from "typeorm";
import {Asset} from "./asset";
import {Game} from "./game";
import {Context} from "./context";
import {Message} from "./message";

@Entity()
export class Character extends Asset {
    @Column({nullable: true})
    title!: string;

    @Column({default: 0})
    history!: number;

    @Column()
    chatbotUrl!: string;
    // Last Update is also updated via contextSubscriber and messageSubscriber to update the lastUpdated
    @UpdateDateColumn()
    lastUpdated!: Date;

    @ManyToOne(() => Game, (game) => game.characters, {onDelete: "CASCADE"})
    game!: Game;

    @OneToMany(() => Context, context => context.character, {cascade: true, nullable: true, onDelete: "CASCADE"})
    contexts!: Context[];

    @OneToMany(() => Message, message => message.character, {cascade: true, nullable: true, onDelete: "CASCADE"})
    messages!: Message[];
}

import {
    Entity,
    Column,
    PrimaryGeneratedColumn, OneToMany, PrimaryColumn, ManyToOne
} from "typeorm";
import {Asset} from "./asset";
import {Game} from "./game";
import {Room} from "./room";
import {HitboxToRoomToGame} from "./hitboxToRoomToGame";

@Entity()
export class RoomToGame extends Asset {
    /*
    @Column()
    gameId!: number;

    @Column()
    roomId!: number;

    @Column({nullable: true})
    targetRoomId!: number;

    @Column({nullable: true})
    targetCharacterId!: number;
    */

    /*@Column()
    name!: string;

    @Column({nullable: true})
    description!: string;*/

    @Column("text",{ array: true, nullable: true})
    instructions!: string[];

    @ManyToOne(() => Room, (room) => room.roomToGames, {onDelete: "CASCADE"})
    room!: Room;

    @ManyToOne(() => Game, (game) => game.roomToGames, {onDelete: "CASCADE"})
    game!: Game;

    @OneToMany(() => HitboxToRoomToGame, (hitboxToRoomToGame) =>hitboxToRoomToGame.roomToGame, { onDelete: 'CASCADE',cascade: true, eager: true })
    hitboxesToRoomToGame!: HitboxToRoomToGame[];

}








import {
    Entity,
    Column,
    PrimaryGeneratedColumn, OneToMany, PrimaryColumn, ManyToOne
} from "typeorm";
import {RoomToGame} from "./roomToGame";
import {Character} from "./character";
import {Hitbox} from "./hitbox";

@Entity()
export class HitboxToRoomToGame {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({nullable: true})
    displayHitbox!: boolean

    @Column({nullable: true})
    blink!: boolean

    @ManyToOne(() => Hitbox, {onDelete: "SET NULL"})
    hitbox!: Hitbox

    @ManyToOne(() => RoomToGame, (roomToGame) => roomToGame.hitboxesToRoomToGame, {onDelete: "CASCADE"})
    roomToGame!: RoomToGame;

    @ManyToOne(() => RoomToGame, {nullable: true, onDelete: "SET NULL"})
    targetRoom!: RoomToGame;

    @ManyToOne(() => Character, {nullable: true, onDelete: "SET NULL"})
    targetCharacter!: Character;

}

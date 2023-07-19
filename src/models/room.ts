import {
    Entity,
    Column,
    PrimaryGeneratedColumn, OneToMany
} from "typeorm";
import {Asset} from "./asset";
import {Hitbox} from "./hitbox";
import {RoomToGame} from "./roomToGame";

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({nullable: true})
    createdByUserId!: string;

    @Column({type: "bytea"})
    image!: Buffer;

    @OneToMany(() => Hitbox, (hitbox) =>hitbox.room, {nullable: true, cascade: true, eager: true, onDelete: "CASCADE"})
    hitboxes!: Hitbox[];

    @OneToMany(() => RoomToGame, roomToGame => roomToGame.room, {nullable: true})
    roomToGames!: RoomToGame[];

}

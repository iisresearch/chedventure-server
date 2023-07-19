import {
    Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne, OneToMany
} from "typeorm";
import {Coordinate} from "./coordinate";
import {Room} from "./room";

@Entity()
export class Hitbox {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToMany(() => Coordinate, (coordinate) =>coordinate.hitbox, { cascade: true, eager: true, onDelete: "CASCADE"})
    coordinates!: Coordinate[];

    @ManyToOne(() => Room, (room) => room.hitboxes, {onDelete: "SET NULL"})
    room!: Room;
}

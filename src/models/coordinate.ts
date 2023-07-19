import {
    Entity,
    Column,
    PrimaryGeneratedColumn, ManyToOne
} from "typeorm";
import {Hitbox} from "./hitbox";

@Entity()
export class Coordinate {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    x!: number;

    @Column()
    y!: number;

    @ManyToOne(() => Hitbox, (hitbox) => hitbox.coordinates, {onDelete: "CASCADE"})
    hitbox!: Hitbox;
}

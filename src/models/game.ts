import {
    Entity,
    Column,
    PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn
} from "typeorm";
import {RoomToGame} from "./roomToGame";
import {Character} from "./character";


@Entity()
export class Game {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column({nullable: true})
    subtitle!: string;

    @Column()
    author!: string;

    @Column()
    version!: string;

    @Column("text",{nullable: true})
    documentation!: string;

    @Column('boolean', {default: false})
    isPublished: boolean = false;

    @Column()
    userId!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @OneToOne(() => RoomToGame, {cascade: true, nullable: true, onDelete: "SET NULL"})
    @JoinColumn()
    initialRoom!: RoomToGame;

    @OneToMany(() => RoomToGame, roomToGame => roomToGame.game, {cascade: true, nullable: true, onDelete: "CASCADE"})
    roomToGames!: RoomToGame[];

    @OneToMany(() => Character, character => character.game, {cascade: true, nullable: true, onDelete: "CASCADE"})
    characters!: Character[];
}


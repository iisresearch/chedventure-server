import { MigrationInterface, QueryRunner } from "typeorm"
import {Room} from "../models/room";
import {Coordinate} from "../models/coordinate";
import {Hitbox} from "../models/hitbox";
import {Character} from "../models/character";
import {CharacterSeeds} from "../seeds/game.seed";
import {saveRoom} from "../repositories/room";

export class SeederHitboxes1658916351144 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        /*

        const conference_room = await queryRunner.manager
            .getRepository(Room)
            .createQueryBuilder("room")
            .select("room.id")
            .where("room.name = :name", { name: "Conference Room"})
            .getOne();



        const coordinate_cr_left1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 1,
                y: 275,
            })
        );
        const coordinate_cr_left2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 1,
                y: 422,
            })
        );
        const coordinate_cr_left3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 161,
                y: 422,
            })
        );
        const coordinate_cr_left4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 161,
                y: 275,
            })
        );
        const hitbox_cr_left = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox>(Hitbox, {
                coordinates: [coordinate_cr_left1, coordinate_cr_left2, coordinate_cr_left3, coordinate_cr_left4]
            })
        );

        // 581,246,579,413,736,416,737,246

        const coordinate_cr_right1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 581,
                y: 246,
            })
        );
        const coordinate_cr_right2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 579,
                y: 413,
            })
        );
        const coordinate_cr_right3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 736,
                y: 416,
            })
        );
        const coordinate_cr_right4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 737,
                y: 246,
            })
        );
        const hitbox_cr_right = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox>(Hitbox, {
                coordinates: [coordinate_cr_right1, coordinate_cr_right2, coordinate_cr_right3, coordinate_cr_right4]
            })
        );

        Promise.all([conference_room, hitbox_cr_left, hitbox_cr_right]).then(async function ([cr, hl, hr]) {
            if (cr) {
                const h = cr.hitboxes

                h.push(hl);
                h.push(hr);
                cr.hitboxes = h;
                await saveRoom(cr);
            }
        })*/


        /*Promise.resolve(conference_room).then(async function (cr) {
            if (cr) {
                const h = cr.hitboxes

                h.push(hitbox_cr_left);
                h.push(hitbox_cr_right);
                cr.hitboxes = h;
                await saveRoom(cr);
            }
        })*/

        /*

        Promise.all([conference_room, hitbox_cr_right, hitbox_cr_left]).then(async ([cr, hr, hl]) => {
            if(cr) {
                const g = await queryRunner.manager.save(
                    queryRunner.manager.update<Room>(Room, cr, {
                        hitboxes: [hl, hr]
                    })
                );
            }
        });


        */


        /*

        const coordinate_fr_top1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 113,
                y: 119,
            })
        )
        const coordinate_fr_top2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 230,
                y: 140,
            })
        )
        const coordinate_fr_top3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 445,
                y: 18,
            })
        )
        const coordinate_fr_top4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 417,
                y: 3,
            })
        )

        const coordinate_fr_top5 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 230,
                y: 2,
            })
        )

        const hitbox_fr_top = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox>(Hitbox, {
                coordinates: [coordinate_fr_top1, coordinate_fr_top2, coordinate_fr_top3, coordinate_fr_top4, coordinate_fr_top5]
            })
        )

        const coordinate_fr_bot1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 4,
                y: 452,
            })
        )
        const coordinate_fr_bot2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 6,
                y: 560,
            })
        )
        const coordinate_fr_bot3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 729,
                y: 561,
            })
        )
        const coordinate_fr_bot4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 221,
                y: 434,
            })
        )

        const coordinate_fr_bot5 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 113,
                y: 442,
            })
        )

        const hitbox_fr_bot = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox>(Hitbox, {
                coordinates: [coordinate_fr_bot1, coordinate_fr_bot2, coordinate_fr_bot3, coordinate_fr_bot4, coordinate_fr_bot5]
            })
        )

        // 222,205,220,270,378,240,377,152,300,180

        const coordinate_fr_midleft1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 222,
                y: 205,
            })
        )
        const coordinate_fr_midleft2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 220,
                y: 270,
            })
        )
        const coordinate_fr_midleft3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 378,
                y: 240,
            })
        )
        const coordinate_fr_midleft4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 377,
                y: 152,
            })
        )

        const coordinate_fr_midleft5 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 300,
                y: 180,
            })
        )

        const hitbox_fr_midleft = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox>(Hitbox, {
                coordinates: [coordinate_fr_midleft1, coordinate_fr_midleft2, coordinate_fr_midleft3, coordinate_fr_midleft4, coordinate_fr_midleft5]
            })
        )

        // 403,233,556,201,552,92,403,137

        const coordinate_fr_midright1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 403,
                y: 233,
            })
        )
        const coordinate_fr_midright2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 556,
                y: 201,
            })
        )
        const coordinate_fr_midright3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 552,
                y: 92,
            })
        )
        const coordinate_fr_midright4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate>(Coordinate, {
                x: 403,
                y: 137,
            })
        )

        const hitbox_fr_midright = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox>(Hitbox, {
                coordinates: [coordinate_fr_midright1, coordinate_fr_midright2, coordinate_fr_midright3, coordinate_fr_midright4]
            })
        )*/


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

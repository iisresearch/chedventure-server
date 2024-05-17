import {getRepository, MigrationInterface, QueryRunner} from "typeorm"
import {
    GameSeed,
    RoomSeed,
    CoordinateSeed1,
    CoordinateSeed2,
    CoordinateSeed1H2,
    CoordinateSeed2H2,
    RoomSeed_Conference,
    CoordinateSeed3H2,
    CharacterSeeds,
    InstructionsGroundPlanSeed,
    InstructionsConferenceRoomSeed,
    RoomSeed_EmptyRoom,
    CoordinateSeed1H3,
    RoomSeed_WindowOffice,
    CoordinateSeed1H4,
    CoordinateBuildingSeed1Hitbox,
    RoomSeed_Building, InstructionsBuildingRoomSeed
} from "../seeds/game.seed";
import {Game} from "../models/game";
import {saveGame} from "../repositories/game";
import {Room} from "../models/room";
import {saveRoom} from "../repositories/room";
import {Hitbox} from "../models/hitbox";
import {Coordinate} from "../models/coordinate";
import {RoomToGame} from "../models/roomToGame";
import {HitboxToRoomToGame} from "../models/hitboxToRoomToGame";
import {Character} from "../models/character";
import {query} from "express";

/**
 * TODO: Cleanup migration
 *
 * Migration to seed a demo-gamec to the database.
 *
 * Run migrations with following command:
 * 'npx typeorm-ts-node-esm migration:run -d src/data-source.ts'
 *
 * If you want to rerun a migration you first have to delete the migration in the migration table in the DB.
 *
 * Useful resources when creating game:
 *
 *  To draw hitboxes on an image & get coordinates (image must be 750px wide):
 *  https://www.image-map.net
 *
 *  Image to Base64 converter:
 *  https://codebeautify.org/image-to-base64-converter
 *
 */

export class SeederGame1655728994711 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const coordinate1H1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate,Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1[0].x,
                y: CoordinateSeed1[0].y,
            })
        );
        const coordinate2H1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1[1].x,
                y: CoordinateSeed1[1].y,
            })
        );
        const coordinate3H1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1[2].x,
                y: CoordinateSeed1[2].y,
            })
        );
        const coordinate4H1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1[3].x,
                y: CoordinateSeed1[3].y,
            })
        );
        const hitbox1 = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate1H1, coordinate2H1, coordinate3H1, coordinate4H1]
            })
        );
        const coordinate1H2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed2[0].x,
                y: CoordinateSeed2[0].y,
            })
        );
        const coordinate2H2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed2[1].x,
                y: CoordinateSeed2[1].y,
            })
        );
        const coordinate3H2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed2[2].x,
                y: CoordinateSeed2[2].y,
            })
        );
        const coordinate4H2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed2[3].x,
                y: CoordinateSeed2[3].y,
            })
        );
        const hitbox2 = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate1H2, coordinate2H2, coordinate3H2, coordinate4H2]
            })
        );

        // 23,18,21,145,149,143,149,20


        const coordinate3_gp_1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 23,
                y: 18,
            })
        );
        const coordinate3_gp_2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 21,
                y: 145,
            })
        );
        const coordinate3_gp_3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 149,
                y: 143,
            })
        );
        const coordinate3_gp_4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 149,
                y: 20,
            })
        );
        const hitbox3_gp = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate3_gp_1, coordinate3_gp_2, coordinate3_gp_3, coordinate3_gp_4]
            })
        );

        // 620,20,615,203,732,204,733,20

        const coordinate4_gp_1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 620,
                y: 20,
            })
        );
        const coordinate4_gp_2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 615,
                y: 203,
            })
        );
        const coordinate4_gp_3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 732 ,
                y: 204,
            })
        );
        const coordinate4_gp_4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 733,
                y: 20,
            })
        );
        const hitbox4_gp = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate4_gp_1, coordinate4_gp_2, coordinate4_gp_3, coordinate4_gp_4]
            })
        );


        // 246,19,246,137,335,137,335,20

        const coordinate5_gp_1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 246,
                y: 20,
            })
        );
        const coordinate5_gp_2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 246,
                y: 137,
            })
        );
        const coordinate5_gp_3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 335 ,
                y: 137,
            })
        );
        const coordinate5_gp_4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 335,
                y: 20,
            })
        );
        const hitbox5_gp = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate5_gp_1, coordinate5_gp_2, coordinate5_gp_3, coordinate5_gp_4]
            })
        );


        // 608,208,608,361,730,365,730,210

        const coordinate6_gp_1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 608,
                y: 208,
            })
        );
        const coordinate6_gp_2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 608,
                y: 361,
            })
        );
        const coordinate6_gp_3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 730 ,
                y: 365,
            })
        );
        const coordinate6_gp_4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 730,
                y: 210,
            })
        );
        const hitbox6_gp = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate6_gp_1, coordinate6_gp_2, coordinate6_gp_3, coordinate6_gp_4]
            })
        );



        const groundplanRoom = await queryRunner.manager.save(
            queryRunner.manager.create<Room, Partial<Room>>(Room, {
                image: Buffer.from(RoomSeed.image_base64, 'base64'),
                name: "Ground plan",
                hitboxes: [hitbox1, hitbox2, hitbox3_gp, hitbox4_gp, hitbox5_gp, hitbox6_gp]
            })
        );

        const coordinate1H3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H2[0].x,
                y: CoordinateSeed1H2[0].y,
            })
        );
        const coordinate2H3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H2[1].x,
                y: CoordinateSeed1H2[1].y,
            })
        );
        const coordinate3H3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H2[2].x,
                y: CoordinateSeed1H2[2].y,
            })
        );
        const coordinate4H3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H2[3].x,
                y: CoordinateSeed1H2[3].y,
            })
        );

        const hitbox3 = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate1H3, coordinate2H3, coordinate3H3, coordinate4H3]
            })
        );

        const coordinate1H4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed2H2[0].x,
                y: CoordinateSeed2H2[0].y,
            })
        );
        const coordinate2H4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed2H2[1].x,
                y: CoordinateSeed2H2[1].y,
            })
        );
        const coordinate3H4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed2H2[2].x,
                y: CoordinateSeed2H2[2].y,
            })
        );
        const coordinate4H4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed2H2[3].x,
                y: CoordinateSeed2H2[3].y,
            })
        );

        const hitbox4 = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate1H4, coordinate2H4, coordinate3H4, coordinate4H4]
            })
        );

        const coordinate1H5 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed3H2[0].x,
                y: CoordinateSeed3H2[0].y,
            })
        );
        const coordinate2H5 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed3H2[1].x,
                y: CoordinateSeed3H2[1].y,
            })
        );
        const coordinate3H5 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed3H2[2].x,
                y: CoordinateSeed3H2[2].y,
            })
        );
        const coordinate4H5 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed3H2[3].x,
                y: CoordinateSeed3H2[3].y,
            })
        );

        const hitbox5 = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate1H5, coordinate2H5, coordinate3H5, coordinate4H5]
            })
        );

        const coordinate_cr_left1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 1,
                y: 275,
            })
        );
        const coordinate_cr_left2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 1,
                y: 422,
            })
        );
        const coordinate_cr_left3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 161,
                y: 422,
            })
        );
        const coordinate_cr_left4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 161,
                y: 275,
            })
        );
        const hitbox_cr_left = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate_cr_left1, coordinate_cr_left2, coordinate_cr_left3, coordinate_cr_left4]
            })
        );

        // 581,246,579,413,736,416,737,246

        const coordinate_cr_right1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 581,
                y: 246,
            })
        );
        const coordinate_cr_right2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 579,
                y: 413,
            })
        );
        const coordinate_cr_right3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 736,
                y: 416,
            })
        );
        const coordinate_cr_right4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 737,
                y: 246,
            })
        );
        const hitbox_cr_right = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate_cr_right1, coordinate_cr_right2, coordinate_cr_right3, coordinate_cr_right4]
            })
        );

        const conferenceRoom = await queryRunner.manager.save(
            queryRunner.manager.create<Room, Partial<Room>>(Room, {
                image: Buffer.from(RoomSeed_Conference.image_base64, 'base64'),
                name: "Conference Room",
                hitboxes: [hitbox3, hitbox4, hitbox5, hitbox_cr_left, hitbox_cr_right]
            })
        );

        const coordinate1H6 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H3[0].x,
                y: CoordinateSeed1H3[0].y,
            })
        );
        const coordinate2H6 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H3[1].x,
                y: CoordinateSeed1H3[1].y,
            })
        );
        const coordinate3H6 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H3[2].x,
                y: CoordinateSeed1H3[2].y,
            })
        );
        const coordinate4H6 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H3[3].x,
                y: CoordinateSeed1H3[3].y,
            })
        );

        const hitbox6 = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate1H6, coordinate2H6, coordinate3H6, coordinate4H6]
            })
        );

        const emptyRoom = await queryRunner.manager.save(
            queryRunner.manager.create<Room, Partial<Room>>(Room, {
                image: Buffer.from(RoomSeed_EmptyRoom.image_base64, 'base64'),
                name: "Empty meeting room",
                hitboxes: [hitbox6]
            })
        )

        const coordinate1H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[0].x,
                y: CoordinateSeed1H4[0].y,
            })
        );
        const coordinate2H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[1].x,
                y: CoordinateSeed1H4[1].y,
            })
        );
        const coordinate3H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[2].x,
                y: CoordinateSeed1H4[2].y,
            })
        );
        const coordinate4H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[3].x,
                y: CoordinateSeed1H4[3].y,
            })
        );

        const coordinate5H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[4].x,
                y: CoordinateSeed1H4[4].y,
            })
        );
        const coordinate6H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[5].x,
                y: CoordinateSeed1H4[5].y,
            })
        );
        const coordinate7H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[6].x,
                y: CoordinateSeed1H4[6].y,
            })
        );
        const coordinate8H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[7].x,
                y: CoordinateSeed1H4[7].y,
            })
        );

        const coordinate9H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[8].x,
                y: CoordinateSeed1H4[8].y,
            })
        );
        const coordinate10H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[9].x,
                y: CoordinateSeed1H4[9].y,
            })
        );
        const coordinate11H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[10].x,
                y: CoordinateSeed1H4[10].y,
            })
        );
        const coordinate12H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[11].x,
                y: CoordinateSeed1H4[11].y,
            })
        );

        const coordinate13H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[12].x,
                y: CoordinateSeed1H4[12].y,
            })
        );
        const coordinate14H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[13].x,
                y: CoordinateSeed1H4[13].y,
            })
        );
        const coordinate15H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[14].x,
                y: CoordinateSeed1H4[14].y,
            })
        );
        const coordinate16H7 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateSeed1H4[15].x,
                y: CoordinateSeed1H4[15].y,
            })
        );

        const hitbox7 = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate1H7, coordinate2H7, coordinate3H7, coordinate4H7, coordinate5H7, coordinate6H7, coordinate7H7, coordinate8H7, coordinate9H7, coordinate10H7, coordinate11H7, coordinate12H7, coordinate13H7, coordinate14H7, coordinate15H7, coordinate16H7]
            })
        );

        // 217,182,77,183,77,346,214,329

        const coordinate1_rek = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 217,
                y: 182,
            })
        );
        const coordinate2_rek = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 77,
                y: 183,
            })
        );
        const coordinate3_rek = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 77,
                y: 346,
            })
        );
        const coordinate4_rek = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 214,
                y: 329,
            })
        );
        const hitbox_rek_2 = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate1_rek, coordinate2_rek, coordinate3_rek, coordinate4_rek]
            })
        );

        // 552,227,710,224,703,479,551,488

        const coordinate1_rek_2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 552,
                y: 227,
            })
        );
        const coordinate2_rek_2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 710,
                y: 224,
            })
        );
        const coordinate3_rek_2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 703,
                y: 479,
            })
        );
        const coordinate4_rek_2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 551,
                y: 488,
            })
        );
        const hitbox_rek_3 = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate1_rek_2, coordinate2_rek_2, coordinate3_rek_2, coordinate4_rek_2]
            })
        );

        const roomElonKsum = await queryRunner.manager.save(
            queryRunner.manager.create<Room, Partial<Room>>(Room, {
                image: Buffer.from(RoomSeed_WindowOffice.image_base64, 'base64'),
                name: "Meeting room",
                hitboxes: [hitbox7, hitbox_rek_2, hitbox_rek_3]
            })
        )

        const coordinate1H8 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateBuildingSeed1Hitbox[0].x,
                y: CoordinateBuildingSeed1Hitbox[0].y,
            })
        );
        const coordinate2H8 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateBuildingSeed1Hitbox[1].x,
                y: CoordinateBuildingSeed1Hitbox[1].y,
            })
        );
        const coordinate3H8 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateBuildingSeed1Hitbox[2].x,
                y: CoordinateBuildingSeed1Hitbox[2].y,
            })
        );
        const coordinate4H8 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateBuildingSeed1Hitbox[3].x,
                y: CoordinateBuildingSeed1Hitbox[3].y,
            })
        );

        const coordinate5H8 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateBuildingSeed1Hitbox[4].x,
                y: CoordinateBuildingSeed1Hitbox[4].y,
            })
        );
        const coordinate6H8 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: CoordinateBuildingSeed1Hitbox[5].x,
                y: CoordinateBuildingSeed1Hitbox[5].y,
            })
        );

        const hitboxBuilding = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate1H8, coordinate2H8, coordinate3H8, coordinate4H8, coordinate5H8, coordinate6H8]
            })
        );

        const coordinate_fr_top1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 113,
                y: 119,
            })
        )
        const coordinate_fr_top2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 230,
                y: 140,
            })
        )
        const coordinate_fr_top3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 445,
                y: 18,
            })
        )
        const coordinate_fr_top4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 417,
                y: 3,
            })
        )

        const coordinate_fr_top5 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 230,
                y: 2,
            })
        )

        const hitbox_fr_top = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate_fr_top1, coordinate_fr_top2, coordinate_fr_top3, coordinate_fr_top4, coordinate_fr_top5]
            })
        )

        const coordinate_fr_bot1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 4,
                y: 452,
            })
        )
        const coordinate_fr_bot2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 6,
                y: 560,
            })
        )
        const coordinate_fr_bot3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 729,
                y: 561,
            })
        )
        const coordinate_fr_bot4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 221,
                y: 434,
            })
        )

        const coordinate_fr_bot5 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 113,
                y: 442,
            })
        )

        const hitbox_fr_bot = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate_fr_bot1, coordinate_fr_bot2, coordinate_fr_bot3, coordinate_fr_bot4, coordinate_fr_bot5]
            })
        )

        // 222,205,220,270,378,240,377,152,300,180

        const coordinate_fr_midleft1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 222,
                y: 205,
            })
        )
        const coordinate_fr_midleft2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 220,
                y: 270,
            })
        )
        const coordinate_fr_midleft3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 378,
                y: 240,
            })
        )
        const coordinate_fr_midleft4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 377,
                y: 152,
            })
        )



        const hitbox_fr_midleft = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate_fr_midleft1, coordinate_fr_midleft2, coordinate_fr_midleft3, coordinate_fr_midleft4]
            })
        )

        // 440,125,441,227,553,202,554,90

        const coordinate_fr_midright1 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 440,
                y: 125,
            })
        )
        const coordinate_fr_midright2 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 440,
                y: 227,
            })
        )
        const coordinate_fr_midright3 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 553,
                y: 202,
            })
        )
        const coordinate_fr_midright4 = await queryRunner.manager.save(
            queryRunner.manager.create<Coordinate, Partial<Coordinate>>(Coordinate, {
                x: 554,
                y: 90,
            })
        )

        const hitbox_fr_midright = await queryRunner.manager.save(
            queryRunner.manager.create<Hitbox, Partial<Hitbox>>(Hitbox, {
                coordinates: [coordinate_fr_midright1, coordinate_fr_midright2, coordinate_fr_midright3, coordinate_fr_midright4]
            })
        )

        const buildingRoom = await queryRunner.manager.save(
            queryRunner.manager.create<Room, Partial<Room>>(Room, {
                image: Buffer.from(RoomSeed_Building.image_base64, 'base64'),
                name: "Floors",
                hitboxes: [hitboxBuilding, hitbox_fr_top, hitbox_fr_bot, hitbox_fr_midleft, hitbox_fr_midright]
            })
        )

        /**
         *
         *
         *
         *
         * First game for user TW
         *
         *
         *
         *
         */

        const character1TW = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[0].name,
                title: CharacterSeeds[0].title,
                description: CharacterSeeds[0].description,
                chatbotUrl: CharacterSeeds[0].chatbotUrl,
            })
        )

        const character2TW = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[1].name,
                title: CharacterSeeds[1].title,
                description: CharacterSeeds[1].description,
                chatbotUrl: CharacterSeeds[1].chatbotUrl,
            })
        )

        const character3TW = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[2].name,
                title: CharacterSeeds[2].title,
                description: CharacterSeeds[2].description,
                chatbotUrl: CharacterSeeds[2].chatbotUrl,
            })
        )

        const character4TW = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[3].name,
                title: CharacterSeeds[3].title,
                description: CharacterSeeds[3].description,
                chatbotUrl: CharacterSeeds[3].chatbotUrl,
            })
        )

        const hitboxToRoomToGame1TW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox1,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame2TW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox2,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame3TW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox3,
                displayHitbox: false,
                blink: false,
                targetCharacter: character1TW,
            })
        )

        const hitboxToRoomToGame4TW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox4,
                displayHitbox: true,
                blink: true,
                targetCharacter: character2TW,
            })
        )

        const hitboxToRoomToGame5TW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox5,
                displayHitbox: true,
                blink: false,
                targetCharacter: character3TW,
            })
        )

        const hitboxToRoomToGame6TW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox6,
                displayHitbox: false,
                blink: false,
            })
        )

        const hitboxToRoomToGame7TW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox7,
                displayHitbox: true,
                blink: true,
                targetCharacter: character4TW,
            })
        )

        const roomToGameTW = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Ground Plan",
                room: groundplanRoom,
                instructions: InstructionsGroundPlanSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame1TW, hitboxToRoomToGame2TW]
            })
        )

        const roomToGameConferenceRoomTW = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Conference Room",
                description: "There are 3 stakeholders waiting for a conversation with you in the conference room: Sally Mustermann, Product Manager; Ximena Hans, CEO; Lucy Biplab, Secretary. This room nicely displays the 3 options available for hitboxes in ChEdventure; You can decide to hide a hitbox entirely, show a hitbox permanently, or lastly show a hitbox with a blinking animation effect.",
                room: conferenceRoom,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame3TW, hitboxToRoomToGame4TW, hitboxToRoomToGame5TW]
            })
        )

        const roomToGameEmptyRoomTW = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Empty Room",
                description: "No one seems to be in this room... suspicious.",
                room: emptyRoom,
                instructions: ["A secret passage might lead to a new room"],
                hitboxesToRoomToGame: [hitboxToRoomToGame6TW]
            })
        )

        const roomToGameElonKsumTW = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Executive office",
                room: roomElonKsum,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame7TW]
            })
        )

        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame2TW.id, { targetRoom: roomToGameConferenceRoomTW})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame1TW.id, { targetRoom: roomToGameEmptyRoomTW})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame6TW.id, { targetRoom: roomToGameElonKsumTW})


        const hitboxToRoomToGameBuildingTW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitboxBuilding,
                displayHitbox: true,
                blink: true,
                targetRoom: roomToGameTW,
            })
        )

        const roomToGameBuildingTW = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "FHNW Building",
                room: buildingRoom,
                instructions: InstructionsBuildingRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGameBuildingTW]
            })
        )


        const gameTW = await queryRunner.manager.save(
            queryRunner.manager.create<Game, Partial<Game>>(Game, {
                subtitle: GameSeed.subtitle,
                name: GameSeed.name,
                author: GameSeed.author,
                version: GameSeed.version,
                createdAt: GameSeed.createdAt,
                updatedAt: GameSeed.updatedAt,
                isPublished: GameSeed.isPublished,
                documentation: GameSeed.documentation,
                userId: "00u4qyna9zRpbj2wx5d7",
                initialRoom: roomToGameTW,
                roomToGames: [roomToGameTW, roomToGameConferenceRoomTW, roomToGameEmptyRoomTW, roomToGameElonKsumTW],
                characters: [character1TW, character2TW, character3TW, character4TW],
            })
        );



        /**
         *
         *
         *
         *
         * Second game for user CP
         *
         *
         *
         *
         */

        const character1CP = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[0].name,
                title: CharacterSeeds[0].title,
                description: CharacterSeeds[0].description,
                chatbotUrl: CharacterSeeds[0].chatbotUrl,
            })
        )

        const character2CP = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[1].name,
                title: CharacterSeeds[1].title,
                description: CharacterSeeds[1].description,
                chatbotUrl: CharacterSeeds[1].chatbotUrl,
            })
        )

        const character3CP = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[2].name,
                title: CharacterSeeds[2].title,
                description: CharacterSeeds[2].description,
                chatbotUrl: CharacterSeeds[2].chatbotUrl,
            })
        )

        const character4CP = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[3].name,
                title: CharacterSeeds[3].title,
                description: CharacterSeeds[3].description,
                chatbotUrl: CharacterSeeds[3].chatbotUrl,
            })
        )

        const hitboxToRoomToGame1CP = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox1,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame2CP = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox2,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame3CP = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox3,
                displayHitbox: false,
                blink: false,
                targetCharacter: character1CP,
            })
        )

        const hitboxToRoomToGame4CP = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox4,
                displayHitbox: true,
                blink: true,
                targetCharacter: character2CP,
            })
        )

        const hitboxToRoomToGame5CP = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox5,
                displayHitbox: true,
                blink: false,
                targetCharacter: character3CP,
            })
        )

        const hitboxToRoomToGame6CP = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox6,
                displayHitbox: false,
                blink: false,
            })
        )

        const hitboxToRoomToGame7CP = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox7,
                displayHitbox: true,
                blink: true,
                targetCharacter: character4CP,
            })
        )

        const roomToGameCP = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Ground Plan",
                room: groundplanRoom,
                instructions: InstructionsGroundPlanSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame1CP, hitboxToRoomToGame2CP]
            })
        )

        const roomToGameConferenceRoomCP = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Conference Room",
                description: "There are 3 stakeholders waiting for a conversation with you in the conference room: Sally Mustermann, Product Manager; Ximena Hans, CEO; Lucy Biplab, Secretary. This room nicely displays the 3 options available for hitboxes in ChEdventure; You can decide to hide a hitbox entirely, show a hitbox permanently, or lastly show a hitbox with a blinking animation effect.",
                room: conferenceRoom,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame3CP, hitboxToRoomToGame4CP, hitboxToRoomToGame5CP]
            })
        )

        const roomToGameEmptyRoomCP = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Empty Room",
                description: "No one seems to be in this room... suspicious.",
                room: emptyRoom,
                instructions: ["A secret passage might lead to a new room"],
                hitboxesToRoomToGame: [hitboxToRoomToGame6CP]
            })
        )

        const roomToGameElonKsumCP = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Executive office",
                room: roomElonKsum,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame7CP]
            })
        )

        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame2CP.id, { targetRoom: roomToGameConferenceRoomCP})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame1CP.id, { targetRoom: roomToGameEmptyRoomCP})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame6CP.id, { targetRoom: roomToGameElonKsumCP})


        const hitboxToRoomToGameBuildingCP = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitboxBuilding,
                displayHitbox: true,
                blink: true,
                targetRoom: roomToGameCP,
            })
        )

        const roomToGameBuildingCP = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "FHNW Building",
                room: buildingRoom,
                instructions: InstructionsBuildingRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGameBuildingCP]
            })
        )


        const gameCP = await queryRunner.manager.save(
            queryRunner.manager.create<Game, Partial<Game>>(Game, {
                subtitle: GameSeed.subtitle,
                name: GameSeed.name,
                author: GameSeed.author,
                version: GameSeed.version,
                createdAt: GameSeed.createdAt,
                updatedAt: GameSeed.updatedAt,
                isPublished: GameSeed.isPublished,
                documentation: GameSeed.documentation,
                userId: "00u5hlkpb4ovxWM445d7",
                initialRoom: roomToGameCP,
                roomToGames: [roomToGameCP, roomToGameConferenceRoomCP, roomToGameEmptyRoomCP, roomToGameElonKsumCP],
                characters: [character1CP, character2CP, character3CP, character4CP],
            })
        );


        /**
         *
         *
         *
         *
         * Third game for user AM
         *
         *
         *
         *
         */

        const character1AM = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[0].name,
                title: CharacterSeeds[0].title,
                description: CharacterSeeds[0].description,
                chatbotUrl: CharacterSeeds[0].chatbotUrl,
            })
        )

        const character2AM = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[1].name,
                title: CharacterSeeds[1].title,
                description: CharacterSeeds[1].description,
                chatbotUrl: CharacterSeeds[1].chatbotUrl,
            })
        )

        const character3AM = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[2].name,
                title: CharacterSeeds[2].title,
                description: CharacterSeeds[2].description,
                chatbotUrl: CharacterSeeds[2].chatbotUrl,
            })
        )

        const character4AM = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[3].name,
                title: CharacterSeeds[3].title,
                description: CharacterSeeds[3].description,
                chatbotUrl: CharacterSeeds[3].chatbotUrl,
            })
        )

        const hitboxToRoomToGame1AM = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox1,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame2AM = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox2,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame3AM = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox3,
                displayHitbox: false,
                blink: false,
                targetCharacter: character1AM,
            })
        )

        const hitboxToRoomToGame4AM = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox4,
                displayHitbox: true,
                blink: true,
                targetCharacter: character2AM,
            })
        )

        const hitboxToRoomToGame5AM = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox5,
                displayHitbox: true,
                blink: false,
                targetCharacter: character3AM,
            })
        )

        const hitboxToRoomToGame6AM = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox6,
                displayHitbox: false,
                blink: false,
            })
        )

        const hitboxToRoomToGame7AM = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox7,
                displayHitbox: true,
                blink: true,
                targetCharacter: character4AM,
            })
        )

        const roomToGameAM = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Ground Plan",
                room: groundplanRoom,
                instructions: InstructionsGroundPlanSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame1AM, hitboxToRoomToGame2AM]
            })
        )

        const roomToGameConferenceRoomAM = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Conference Room",
                description: "There are 3 stakeholders waiting for a conversation with you in the conference room: Sally Mustermann, Product Manager; Ximena Hans, CEO; Lucy Biplab, Secretary. This room nicely displays the 3 options available for hitboxes in ChEdventure; You can decide to hide a hitbox entirely, show a hitbox permanently, or lastly show a hitbox with a blinking animation effect.",
                room: conferenceRoom,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame3AM, hitboxToRoomToGame4AM, hitboxToRoomToGame5AM]
            })
        )

        const roomToGameEmptyRoomAM = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Empty Room",
                description: "No one seems to be in this room... suspicious.",
                room: emptyRoom,
                instructions: ["A secret passage might lead to a new room"],
                hitboxesToRoomToGame: [hitboxToRoomToGame6AM]
            })
        )

        const roomToGameElonKsumAM = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Executive office",
                room: roomElonKsum,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame7AM]
            })
        )

        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame2AM.id, { targetRoom: roomToGameConferenceRoomAM})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame1AM.id, { targetRoom: roomToGameEmptyRoomAM})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame6AM.id, { targetRoom: roomToGameElonKsumAM})


        const hitboxToRoomToGameBuildingAM = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitboxBuilding,
                displayHitbox: true,
                blink: true,
                targetRoom: roomToGameAM,
            })
        )

        const roomToGameBuildingAM = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "FHNW Building",
                room: buildingRoom,
                instructions: InstructionsBuildingRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGameBuildingAM]
            })
        )


        const gameAM = await queryRunner.manager.save(
            queryRunner.manager.create<Game, Partial<Game>>(Game, {
                subtitle: GameSeed.subtitle,
                name: GameSeed.name,
                author: GameSeed.author,
                version: GameSeed.version,
                createdAt: GameSeed.createdAt,
                updatedAt: GameSeed.updatedAt,
                isPublished: GameSeed.isPublished,
                documentation: GameSeed.documentation,
                userId: "00u5hlgvi3NeBuR3z5d7",
                initialRoom: roomToGameAM,
                roomToGames: [roomToGameAM, roomToGameConferenceRoomAM, roomToGameEmptyRoomAM, roomToGameElonKsumAM],
                characters: [character1AM, character2AM, character3AM, character4AM],
            })
        );



        /**
         *
         *
         *
         *
         * Fourth game for user SGG
         *
         *
         *
         *
         */

        const character1SGG = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[0].name,
                title: CharacterSeeds[0].title,
                description: CharacterSeeds[0].description,
                chatbotUrl: CharacterSeeds[0].chatbotUrl,
            })
        )

        const character2SGG = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[1].name,
                title: CharacterSeeds[1].title,
                description: CharacterSeeds[1].description,
                chatbotUrl: CharacterSeeds[1].chatbotUrl,
            })
        )

        const character3SGG = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[2].name,
                title: CharacterSeeds[2].title,
                description: CharacterSeeds[2].description,
                chatbotUrl: CharacterSeeds[2].chatbotUrl,
            })
        )

        const character4SGG = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[3].name,
                title: CharacterSeeds[3].title,
                description: CharacterSeeds[3].description,
                chatbotUrl: CharacterSeeds[3].chatbotUrl,
            })
        )

        const hitboxToRoomToGame1SGG = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox1,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame2SGG = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox2,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame3SGG = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox3,
                displayHitbox: false,
                blink: false,
                targetCharacter: character1SGG,
            })
        )

        const hitboxToRoomToGame4SGG = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox4,
                displayHitbox: true,
                blink: true,
                targetCharacter: character2SGG,
            })
        )

        const hitboxToRoomToGame5SGG = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox5,
                displayHitbox: true,
                blink: false,
                targetCharacter: character3SGG,
            })
        )

        const hitboxToRoomToGame6SGG = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox6,
                displayHitbox: false,
                blink: false,
            })
        )

        const hitboxToRoomToGame7SGG = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox7,
                displayHitbox: true,
                blink: true,
                targetCharacter: character4SGG,
            })
        )

        const roomToGameSGG = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Ground Plan",
                room: groundplanRoom,
                instructions: InstructionsGroundPlanSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame1SGG, hitboxToRoomToGame2SGG]
            })
        )

        const roomToGameConferenceRoomSGG = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Conference Room",
                description: "There are 3 stakeholders waiting for a conversation with you in the conference room: Sally Mustermann, Product Manager; Ximena Hans, CEO; Lucy Biplab, Secretary. This room nicely displays the 3 options available for hitboxes in ChEdventure; You can decide to hide a hitbox entirely, show a hitbox permanently, or lastly show a hitbox with a blinking animation effect.",
                room: conferenceRoom,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame3SGG, hitboxToRoomToGame4SGG, hitboxToRoomToGame5SGG]
            })
        )

        const roomToGameEmptyRoomSGG = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Empty Room",
                description: "No one seems to be in this room... suspicious.",
                room: emptyRoom,
                instructions: ["A secret passage might lead to a new room"],
                hitboxesToRoomToGame: [hitboxToRoomToGame6SGG]
            })
        )

        const roomToGameElonKsumSGG = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Executive office",
                room: roomElonKsum,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame7SGG]
            })
        )

        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame2SGG.id, { targetRoom: roomToGameConferenceRoomSGG})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame1SGG.id, { targetRoom: roomToGameEmptyRoomSGG})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame6SGG.id, { targetRoom: roomToGameElonKsumSGG})


        const hitboxToRoomToGameBuildingSGG = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitboxBuilding,
                displayHitbox: true,
                blink: true,
                targetRoom: roomToGameSGG,
            })
        )

        const roomToGameBuildingSGG = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "FHNW Building",
                room: buildingRoom,
                instructions: InstructionsBuildingRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGameBuildingSGG]
            })
        )


        const gameSGG = await queryRunner.manager.save(
            queryRunner.manager.create<Game, Partial<Game>>(Game, {
                subtitle: GameSeed.subtitle,
                name: GameSeed.name,
                author: GameSeed.author,
                version: GameSeed.version,
                createdAt: GameSeed.createdAt,
                updatedAt: GameSeed.updatedAt,
                isPublished: GameSeed.isPublished,
                documentation: GameSeed.documentation,
                userId: "00u5y3jxn3x6IfOtl5d7",
                initialRoom: roomToGameSGG,
                roomToGames: [roomToGameSGG, roomToGameConferenceRoomSGG, roomToGameEmptyRoomSGG, roomToGameElonKsumSGG],
                characters: [character1SGG, character2SGG, character3SGG, character4SGG],
            })
        );

        /**
         *
         *
         *
         *
         * Fifth game for user SJ
         *
         *
         *
         *
         */

        const character1SJ = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[0].name,
                title: CharacterSeeds[0].title,
                description: CharacterSeeds[0].description,
                chatbotUrl: CharacterSeeds[0].chatbotUrl,
            })
        )

        const character2SJ = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[1].name,
                title: CharacterSeeds[1].title,
                description: CharacterSeeds[1].description,
                chatbotUrl: CharacterSeeds[1].chatbotUrl,
            })
        )

        const character3SJ = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[2].name,
                title: CharacterSeeds[2].title,
                description: CharacterSeeds[2].description,
                chatbotUrl: CharacterSeeds[2].chatbotUrl,
            })
        )

        const character4SJ = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[3].name,
                title: CharacterSeeds[3].title,
                description: CharacterSeeds[3].description,
                chatbotUrl: CharacterSeeds[3].chatbotUrl,
            })
        )

        const hitboxToRoomToGame1SJ = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox1,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame2SJ = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox2,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame3SJ = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox3,
                displayHitbox: false,
                blink: false,
                targetCharacter: character1SJ,
            })
        )

        const hitboxToRoomToGame4SJ = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox4,
                displayHitbox: true,
                blink: true,
                targetCharacter: character2SJ,
            })
        )

        const hitboxToRoomToGame5SJ = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox5,
                displayHitbox: true,
                blink: false,
                targetCharacter: character3SJ,
            })
        )

        const hitboxToRoomToGame6SJ = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox6,
                displayHitbox: false,
                blink: false,
            })
        )

        const hitboxToRoomToGame7SJ = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox7,
                displayHitbox: true,
                blink: true,
                targetCharacter: character4SJ,
            })
        )

        const roomToGameSJ = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Ground Plan",
                room: groundplanRoom,
                instructions: InstructionsGroundPlanSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame1SJ, hitboxToRoomToGame2SJ]
            })
        )

        const roomToGameConferenceRoomSJ = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Conference Room",
                description: "There are 3 stakeholders waiting for a conversation with you in the conference room: Sally Mustermann, Product Manager; Ximena Hans, CEO; Lucy Biplab, Secretary. This room nicely displays the 3 options available for hitboxes in ChEdventure; You can decide to hide a hitbox entirely, show a hitbox permanently, or lastly show a hitbox with a blinking animation effect.",
                room: conferenceRoom,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame3SJ, hitboxToRoomToGame4SJ, hitboxToRoomToGame5SJ]
            })
        )

        const roomToGameEmptyRoomSJ = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Empty Room",
                description: "No one seems to be in this room... suspicious.",
                room: emptyRoom,
                instructions: ["A secret passage might lead to a new room"],
                hitboxesToRoomToGame: [hitboxToRoomToGame6SJ]
            })
        )

        const roomToGameElonKsumSJ = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Executive office",
                room: roomElonKsum,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame7SJ]
            })
        )

        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame2SJ.id, { targetRoom: roomToGameConferenceRoomSJ})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame1SJ.id, { targetRoom: roomToGameEmptyRoomSJ})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame6SJ.id, { targetRoom: roomToGameElonKsumSJ})


        const hitboxToRoomToGameBuildingSJ = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitboxBuilding,
                displayHitbox: true,
                blink: true,
                targetRoom: roomToGameSJ,
            })
        )

        const roomToGameBuildingSJ = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "FHNW Building",
                room: buildingRoom,
                instructions: InstructionsBuildingRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGameBuildingSJ]
            })
        )


        const gameSJ = await queryRunner.manager.save(
            queryRunner.manager.create<Game, Partial<Game>>(Game, {
                subtitle: GameSeed.subtitle,
                name: GameSeed.name,
                author: GameSeed.author,
                version: GameSeed.version,
                createdAt: GameSeed.createdAt,
                updatedAt: GameSeed.updatedAt,
                isPublished: GameSeed.isPublished,
                documentation: GameSeed.documentation,
                userId: "00u5y3d2gow1zkjwe5d7",
                initialRoom: roomToGameSJ,
                roomToGames: [roomToGameSJ, roomToGameConferenceRoomSJ, roomToGameEmptyRoomSJ, roomToGameElonKsumSJ],
                characters: [character1SJ, character2SJ, character3SJ, character4SJ],
            })
        );

        /**
         *
         *
         *
         *
         * Sixth game for user SS
         *
         *
         *
         *
         */

        const character1SS = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[0].name,
                title: CharacterSeeds[0].title,
                description: CharacterSeeds[0].description,
                chatbotUrl: CharacterSeeds[0].chatbotUrl,
            })
        )

        const character2SS = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[1].name,
                title: CharacterSeeds[1].title,
                description: CharacterSeeds[1].description,
                chatbotUrl: CharacterSeeds[1].chatbotUrl,
            })
        )

        const character3SS = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[2].name,
                title: CharacterSeeds[2].title,
                description: CharacterSeeds[2].description,
                chatbotUrl: CharacterSeeds[2].chatbotUrl,
            })
        )

        const character4SS = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[3].name,
                title: CharacterSeeds[3].title,
                description: CharacterSeeds[3].description,
                chatbotUrl: CharacterSeeds[3].chatbotUrl,
            })
        )

        const hitboxToRoomToGame1SS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox1,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame2SS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox2,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame3SS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox3,
                displayHitbox: false,
                blink: false,
                targetCharacter: character1SS,
            })
        )

        const hitboxToRoomToGame4SS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox4,
                displayHitbox: true,
                blink: true,
                targetCharacter: character2SS,
            })
        )

        const hitboxToRoomToGame5SS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox5,
                displayHitbox: true,
                blink: false,
                targetCharacter: character3SS,
            })
        )

        const hitboxToRoomToGame6SS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox6,
                displayHitbox: false,
                blink: false,
            })
        )

        const hitboxToRoomToGame7SS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox7,
                displayHitbox: true,
                blink: true,
                targetCharacter: character4SS,
            })
        )

        const roomToGameSS = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Ground Plan",
                room: groundplanRoom,
                instructions: InstructionsGroundPlanSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame1SS, hitboxToRoomToGame2SS]
            })
        )

        const roomToGameConferenceRoomSS = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Conference Room",
                description: "There are 3 stakeholders waiting for a conversation with you in the conference room: Sally Mustermann, Product Manager; Ximena Hans, CEO; Lucy Biplab, Secretary. This room nicely displays the 3 options available for hitboxes in ChEdventure; You can decide to hide a hitbox entirely, show a hitbox permanently, or lastly show a hitbox with a blinking animation effect.",
                room: conferenceRoom,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame3SS, hitboxToRoomToGame4SS, hitboxToRoomToGame5SS]
            })
        )

        const roomToGameEmptyRoomSS = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Empty Room",
                description: "No one seems to be in this room... suspicious.",
                room: emptyRoom,
                instructions: ["A secret passage might lead to a new room"],
                hitboxesToRoomToGame: [hitboxToRoomToGame6SS]
            })
        )

        const roomToGameElonKsumSS = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Executive office",
                room: roomElonKsum,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame7SS]
            })
        )

        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame2SS.id, { targetRoom: roomToGameConferenceRoomSS})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame1SS.id, { targetRoom: roomToGameEmptyRoomSS})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame6SS.id, { targetRoom: roomToGameElonKsumSS})


        const hitboxToRoomToGameBuildingSS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitboxBuilding,
                displayHitbox: true,
                blink: true,
                targetRoom: roomToGameSS,
            })
        )

        const roomToGameBuildingSS = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "FHNW Building",
                room: buildingRoom,
                instructions: InstructionsBuildingRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGameBuildingSS]
            })
        )


        const gameSS = await queryRunner.manager.save(
            queryRunner.manager.create<Game, Partial<Game>>(Game, {
                subtitle: GameSeed.subtitle,
                name: GameSeed.name,
                author: GameSeed.author,
                version: GameSeed.version,
                createdAt: GameSeed.createdAt,
                updatedAt: GameSeed.updatedAt,
                isPublished: GameSeed.isPublished,
                documentation: GameSeed.documentation,
                userId: "00u5y3gv4r55IG5WS5d7",
                initialRoom: roomToGameSS,
                roomToGames: [roomToGameSS, roomToGameConferenceRoomSS, roomToGameEmptyRoomSS, roomToGameElonKsumSS],
                characters: [character1SS, character2SS, character3SS, character4SS],
            })
        );

        /**
         *
         *
         *
         *
         * Seventh game for user MS
         *
         *
         *
         *
         */

        const character1MS = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[0].name,
                title: CharacterSeeds[0].title,
                description: CharacterSeeds[0].description,
                chatbotUrl: CharacterSeeds[0].chatbotUrl,
            })
        )

        const character2MS = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[1].name,
                title: CharacterSeeds[1].title,
                description: CharacterSeeds[1].description,
                chatbotUrl: CharacterSeeds[1].chatbotUrl,
            })
        )

        const character3MS = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[2].name,
                title: CharacterSeeds[2].title,
                description: CharacterSeeds[2].description,
                chatbotUrl: CharacterSeeds[2].chatbotUrl,
            })
        )

        const character4MS = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[3].name,
                title: CharacterSeeds[3].title,
                description: CharacterSeeds[3].description,
                chatbotUrl: CharacterSeeds[3].chatbotUrl,
            })
        )

        const hitboxToRoomToGame1MS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox1,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame2MS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox2,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame3MS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox3,
                displayHitbox: false,
                blink: false,
                targetCharacter: character1MS,
            })
        )

        const hitboxToRoomToGame4MS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox4,
                displayHitbox: true,
                blink: true,
                targetCharacter: character2MS,
            })
        )

        const hitboxToRoomToGame5MS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox5,
                displayHitbox: true,
                blink: false,
                targetCharacter: character3MS,
            })
        )

        const hitboxToRoomToGame6MS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox6,
                displayHitbox: false,
                blink: false,
            })
        )

        const hitboxToRoomToGame7MS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox7,
                displayHitbox: true,
                blink: true,
                targetCharacter: character4MS,
            })
        )

        const roomToGameMS = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Ground Plan",
                room: groundplanRoom,
                instructions: InstructionsGroundPlanSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame1MS, hitboxToRoomToGame2MS]
            })
        )

        const roomToGameConferenceRoomMS = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Conference Room",
                description: "There are 3 stakeholders waiting for a conversation with you in the conference room: Sally Mustermann, Product Manager; Ximena Hans, CEO; Lucy Biplab, Secretary. This room nicely displays the 3 options available for hitboxes in ChEdventure; You can decide to hide a hitbox entirely, show a hitbox permanently, or lastly show a hitbox with a blinking animation effect.",
                room: conferenceRoom,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame3MS, hitboxToRoomToGame4MS, hitboxToRoomToGame5MS]
            })
        )

        const roomToGameEmptyRoomMS = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Empty Room",
                description: "No one seems to be in this room... suspicious.",
                room: emptyRoom,
                instructions: ["A secret passage might lead to a new room"],
                hitboxesToRoomToGame: [hitboxToRoomToGame6MS]
            })
        )

        const roomToGameElonKsumMS = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Executive office",
                room: roomElonKsum,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame7MS]
            })
        )

        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame2MS.id, { targetRoom: roomToGameConferenceRoomMS})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame1MS.id, { targetRoom: roomToGameEmptyRoomMS})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame6MS.id, { targetRoom: roomToGameElonKsumMS})


        const hitboxToRoomToGameBuildingMS = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitboxBuilding,
                displayHitbox: true,
                blink: true,
                targetRoom: roomToGameMS,
            })
        )

        const roomToGameBuildingMS = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "FHNW Building",
                room: buildingRoom,
                instructions: InstructionsBuildingRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGameBuildingMS]
            })
        )


        const gameMS = await queryRunner.manager.save(
            queryRunner.manager.create<Game, Partial<Game>>(Game, {
                subtitle: GameSeed.subtitle,
                name: GameSeed.name,
                author: GameSeed.author,
                version: GameSeed.version,
                createdAt: GameSeed.createdAt,
                updatedAt: GameSeed.updatedAt,
                isPublished: GameSeed.isPublished,
                documentation: GameSeed.documentation,
                userId: "00u5y2981vyNkhPFw5d7",
                initialRoom: roomToGameMS,
                roomToGames: [roomToGameMS, roomToGameConferenceRoomMS, roomToGameEmptyRoomMS, roomToGameElonKsumMS],
                characters: [character1MS, character2MS, character3MS, character4MS],
            })
        );

        /**
         *
         *
         *
         *
         * Eigth game for user BT
         *
         *
         *
         *
         */

        const character1BT = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[0].name,
                title: CharacterSeeds[0].title,
                description: CharacterSeeds[0].description,
                chatbotUrl: CharacterSeeds[0].chatbotUrl,
            })
        )

        const character2BT = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[1].name,
                title: CharacterSeeds[1].title,
                description: CharacterSeeds[1].description,
                chatbotUrl: CharacterSeeds[1].chatbotUrl,
            })
        )

        const character3BT = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[2].name,
                title: CharacterSeeds[2].title,
                description: CharacterSeeds[2].description,
                chatbotUrl: CharacterSeeds[2].chatbotUrl,
            })
        )

        const character4BT = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[3].name,
                title: CharacterSeeds[3].title,
                description: CharacterSeeds[3].description,
                chatbotUrl: CharacterSeeds[3].chatbotUrl,
            })
        )

        const hitboxToRoomToGame1BT = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox1,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame2BT = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox2,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame3BT = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox3,
                displayHitbox: false,
                blink: false,
                targetCharacter: character1BT,
            })
        )

        const hitboxToRoomToGame4BT = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox4,
                displayHitbox: true,
                blink: true,
                targetCharacter: character2BT,
            })
        )

        const hitboxToRoomToGame5BT = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox5,
                displayHitbox: true,
                blink: false,
                targetCharacter: character3BT,
            })
        )

        const hitboxToRoomToGame6BT = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox6,
                displayHitbox: false,
                blink: false,
            })
        )

        const hitboxToRoomToGame7BT = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox7,
                displayHitbox: true,
                blink: true,
                targetCharacter: character4BT,
            })
        )

        const roomToGameBT = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Ground Plan",
                room: groundplanRoom,
                instructions: InstructionsGroundPlanSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame1BT, hitboxToRoomToGame2BT]
            })
        )

        const roomToGameConferenceRoomBT = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Conference Room",
                description: "There are 3 stakeholders waiting for a conversation with you in the conference room: Sally Mustermann, Product Manager; Ximena Hans, CEO; Lucy Biplab, Secretary. This room nicely displays the 3 options available for hitboxes in ChEdventure; You can decide to hide a hitbox entirely, show a hitbox permanently, or lastly show a hitbox with a blinking animation effect.",
                room: conferenceRoom,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame3BT, hitboxToRoomToGame4BT, hitboxToRoomToGame5BT]
            })
        )

        const roomToGameEmptyRoomBT = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Empty Room",
                description: "No one seems to be in this room... suspicious.",
                room: emptyRoom,
                instructions: ["A secret passage might lead to a new room"],
                hitboxesToRoomToGame: [hitboxToRoomToGame6BT]
            })
        )

        const roomToGameElonKsumBT = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Executive office",
                room: roomElonKsum,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame7BT]
            })
        )

        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame2BT.id, { targetRoom: roomToGameConferenceRoomBT})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame1BT.id, { targetRoom: roomToGameEmptyRoomBT})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame6BT.id, { targetRoom: roomToGameElonKsumBT})


        const hitboxToRoomToGameBuildingBT = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitboxBuilding,
                displayHitbox: true,
                blink: true,
                targetRoom: roomToGameBT,
            })
        )

        const roomToGameBuildingBT = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "FHNW Building",
                room: buildingRoom,
                instructions: InstructionsBuildingRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGameBuildingBT]
            })
        )


        const gameBT = await queryRunner.manager.save(
            queryRunner.manager.create<Game, Partial<Game>>(Game, {
                subtitle: GameSeed.subtitle,
                name: GameSeed.name,
                author: GameSeed.author,
                version: GameSeed.version,
                createdAt: GameSeed.createdAt,
                updatedAt: GameSeed.updatedAt,
                isPublished: GameSeed.isPublished,
                documentation: GameSeed.documentation,
                userId: "00u5y3hapjZ01euaP5d7",
                initialRoom: roomToGameBT,
                roomToGames: [roomToGameBT, roomToGameConferenceRoomBT, roomToGameEmptyRoomBT, roomToGameElonKsumBT],
                characters: [character1BT, character2BT, character3BT, character4BT],
            })
        );

        /**
         *
         *
         *
         *
         * Ninth game for user FW
         *
         *
         *
         *
         */

        const character1FW = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[0].name,
                title: CharacterSeeds[0].title,
                description: CharacterSeeds[0].description,
                chatbotUrl: CharacterSeeds[0].chatbotUrl,
            })
        )

        const character2FW = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[1].name,
                title: CharacterSeeds[1].title,
                description: CharacterSeeds[1].description,
                chatbotUrl: CharacterSeeds[1].chatbotUrl,
            })
        )

        const character3FW = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[2].name,
                title: CharacterSeeds[2].title,
                description: CharacterSeeds[2].description,
                chatbotUrl: CharacterSeeds[2].chatbotUrl,
            })
        )

        const character4FW = await queryRunner.manager.save(
            queryRunner.manager.create(Character, {
                name: CharacterSeeds[3].name,
                title: CharacterSeeds[3].title,
                description: CharacterSeeds[3].description,
                chatbotUrl: CharacterSeeds[3].chatbotUrl,
            })
        )

        const hitboxToRoomToGame1FW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox1,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame2FW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox2,
                displayHitbox: true,
                blink: true,
            })
        )

        const hitboxToRoomToGame3FW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox3,
                displayHitbox: false,
                blink: false,
                targetCharacter: character1FW,
            })
        )

        const hitboxToRoomToGame4FW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox4,
                displayHitbox: true,
                blink: true,
                targetCharacter: character2FW,
            })
        )

        const hitboxToRoomToGame5FW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox5,
                displayHitbox: true,
                blink: false,
                targetCharacter: character3FW,
            })
        )

        const hitboxToRoomToGame6FW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox6,
                displayHitbox: false,
                blink: false,
            })
        )

        const hitboxToRoomToGame7FW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitbox7,
                displayHitbox: true,
                blink: true,
                targetCharacter: character4FW,
            })
        )

        const roomToGameFW = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Ground Plan",
                room: groundplanRoom,
                instructions: InstructionsGroundPlanSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame1FW, hitboxToRoomToGame2FW]
            })
        )

        const roomToGameConferenceRoomFW = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Conference Room",
                description: "There are 3 stakeholders waiting for a conversation with you in the conference room: Sally Mustermann, Product Manager; Ximena Hans, CEO; Lucy Biplab, Secretary. This room nicely displays the 3 options available for hitboxes in ChEdventure; You can decide to hide a hitbox entirely, show a hitbox permanently, or lastly show a hitbox with a blinking animation effect.",
                room: conferenceRoom,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame3FW, hitboxToRoomToGame4FW, hitboxToRoomToGame5FW]
            })
        )

        const roomToGameEmptyRoomFW = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Empty Room",
                description: "No one seems to be in this room... suspicious.",
                room: emptyRoom,
                instructions: ["A secret passage might lead to a new room"],
                hitboxesToRoomToGame: [hitboxToRoomToGame6FW]
            })
        )

        const roomToGameElonKsumFW = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "Executive office",
                room: roomElonKsum,
                instructions: InstructionsConferenceRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGame7FW]
            })
        )

        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame2FW.id, { targetRoom: roomToGameConferenceRoomFW})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame1FW.id, { targetRoom: roomToGameEmptyRoomFW})
        await queryRunner.manager.update(HitboxToRoomToGame, hitboxToRoomToGame6FW.id, { targetRoom: roomToGameElonKsumFW})


        const hitboxToRoomToGameBuildingFW = await queryRunner.manager.save(
            queryRunner.manager.create(HitboxToRoomToGame, {
                hitbox: hitboxBuilding,
                displayHitbox: true,
                blink: true,
                targetRoom: roomToGameFW,
            })
        )

        const roomToGameBuildingFW = await queryRunner.manager.save(
            queryRunner.manager.create(RoomToGame,{
                name: "FHNW Building",
                room: buildingRoom,
                instructions: InstructionsBuildingRoomSeed,
                hitboxesToRoomToGame: [hitboxToRoomToGameBuildingFW]
            })
        )


        const gameFW = await queryRunner.manager.save(
            queryRunner.manager.create<Game, Partial<Game>>(Game, {
                subtitle: GameSeed.subtitle,
                name: GameSeed.name,
                author: GameSeed.author,
                version: GameSeed.version,
                createdAt: GameSeed.createdAt,
                updatedAt: GameSeed.updatedAt,
                isPublished: GameSeed.isPublished,
                documentation: GameSeed.documentation,
                userId: "00u5y3f9bfYCw2Zpk5d7",
                initialRoom: roomToGameFW,
                roomToGames: [roomToGameFW, roomToGameConferenceRoomFW, roomToGameEmptyRoomFW, roomToGameElonKsumFW],
                characters: [character1FW, character2FW, character3FW, character4FW],
            })
        );








    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

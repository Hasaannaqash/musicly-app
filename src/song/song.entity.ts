import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";


@Entity()
export class SongEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    tittle: string;

    @Column({ type: 'varchar', length: 255 })
    album: string;

    @Column({ type: 'varchar', length: 255 })
    artist: string;

    @Column({ type: 'varchar', length: 255 })
    lyric: string;

    @Column({ type: 'varchar', length: 255 })
    picture: string;

    @Column({ type: 'varchar', length: 255 })
    music: string;
    

}

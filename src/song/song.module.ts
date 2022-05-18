import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongController } from './song.controller';
import { SongEntity } from './song.entity';
import { SongService } from './song.service';

@Module({
  imports: [TypeOrmModule.forFeature([SongEntity])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}

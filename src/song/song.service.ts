import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { SongEntity } from './song.entity';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(SongEntity)
    private songRepository: Repository<SongEntity>,
  ) {}
  async findAll(): Promise<SongEntity[]> {
    return await this.songRepository.find({ order: { id: 'DESC' } });
  }

  async findOne(id: number): Promise<SongEntity> {
    return await this.songRepository.findOne(id);
  }

  async create(song: SongEntity): Promise<SongEntity> {
    return await this.songRepository.save(song);
  }

  async update(id: number, song: SongEntity): Promise<SongEntity> {
    song.id = id;
    return await this.songRepository.save(song);
  }
}

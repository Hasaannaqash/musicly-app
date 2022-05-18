import {
  Bind,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  Req,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { SongService } from './song.service';
import { Request } from 'express';
import { SongEntity } from './song.entity';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller()
export class SongController {
  constructor(private readonly songService: SongService) {}
  @Get()
  @Render('index')
  root() {
    let songs = this.songService.findAll();
    return songs;
  }

  @Get('/albums')
  @Render('create-album')
  albums() {
    return { message: 'Albums' };
  }

  @Get('/aboutus')
  @Render('aboutus')
  aboutus() {
    return { message: 'aboutus' };
  }

  @Get('/play')
  @Render('play')
  play() {
    return { message: 'aboutus' };
  }

  @Post('/create')
  @Redirect('/')
  CreateAlbum(@Req() request: Request) {
    let song = new SongEntity();
    song.tittle = request.body.tittle;
    song.album = request.body.album;
    song.artist = request.body.artist;
    song.lyric = request.body.lyrics;
    song.picture = request.body.picture;
    song.music = request.body.music;
    this.songService.create(song);
    return this.songService.findAll();
  }
}

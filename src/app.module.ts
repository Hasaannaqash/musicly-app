import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongEntity } from './song/song.entity';
import { SongModule } from './song/song.module';

  @Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'db',
        port: 3306,
        username: 'root',
        password: 'mauFJcuf5dhRMQrjj',
        database: 'musicly',
        entities: [SongEntity],
        synchronize: true,
      }),
      SongModule,
    ],
  controllers: [],
  providers: [],
})

export class AppModule {}

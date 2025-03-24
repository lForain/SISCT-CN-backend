import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SinespctModule } from './modules/sinespct.module';
import { CadastroNacional } from './entities/CadastroNacional.entity';
import { RepresentanteLegal } from './entities/RepresentanteLegal.entity';
import { RepresentanteTecnico } from './entities/RepresentanteTecnico.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: process.env.DB_HOST || 'localhost',
      port: 1521,
      username: process.env.DB_USERNAME || 'DB_SINESPCT',
      password: process.env.DB_PASSWORD || 'DB_SINESPCT',
      sid: process.env.DB_SID || 'XE',
      entities: [CadastroNacional, RepresentanteLegal, RepresentanteTecnico],
      synchronize: false, // Set to false in production
    }),
    SinespctModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

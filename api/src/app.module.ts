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
      host:'localhost',
      port: 1521,
      username:'system',
      password:'DB_SINESPCT',
      sid:'XE',
      entities: [CadastroNacional, RepresentanteLegal, RepresentanteTecnico],
      synchronize: true, // Set to false in production
    }),
    SinespctModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

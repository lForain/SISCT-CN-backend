import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepresentanteTecnico } from '../entities/RepresentanteTecnico.entity';
import { RepresentanteTecnicoService } from '../services/representanteTecnico.service';
import { RepresentanteTecnicoController } from '../controllers/representanteTecnico.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([RepresentanteTecnico]),
  ],
  controllers: [RepresentanteTecnicoController],
  providers: [RepresentanteTecnicoService],
  exports: [RepresentanteTecnicoService],
})
export class RepresentanteTecnicoModule {}

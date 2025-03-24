import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CadastroNacional } from '../entities/CadastroNacional.entity';
import { RepresentanteLegal } from '../entities/RepresentanteLegal.entity';
import { RepresentanteTecnico } from '../entities/RepresentanteTecnico.entity';
import { CadastroNacionalService } from '../services/cadastroNacional.service';
import { RepresentanteLegalService } from '../services/representanteLegal.service';
import { RepresentanteTecnicoService } from '../services/representanteTecnico.service';
import { CadastroNacionalController } from '../controllers/cadastroNacional.controller';
import { RepresentanteLegalController } from '../controllers/representanteLegal.controller';
import { RepresentanteTecnicoController } from '../controllers/representanteTecnico.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CadastroNacional,
      RepresentanteLegal,
      RepresentanteTecnico,
    ]),
  ],
  controllers: [
    CadastroNacionalController,
    RepresentanteLegalController,
    RepresentanteTecnicoController,
  ],
  providers: [
    CadastroNacionalService,
    RepresentanteLegalService,
    RepresentanteTecnicoService,
  ],
  exports: [
    CadastroNacionalService,
    RepresentanteLegalService,
    RepresentanteTecnicoService,
  ],
})
export class SinespctModule {}

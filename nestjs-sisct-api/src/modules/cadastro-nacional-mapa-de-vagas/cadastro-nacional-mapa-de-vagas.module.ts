import { Module } from '@nestjs/common';
import { CadastroNacionalMapaDeVagasController } from './cadastro-nacional-mapa-de-vagas.controller';
import { CadastroNacionalMapaDeVagasService } from './cadastro-nacional-mapa-de-vagas.service';

@Module({
  controllers: [CadastroNacionalMapaDeVagasController],
  providers: [CadastroNacionalMapaDeVagasService],
})
export class CadastroNacionalMapaDeVagasModule {}
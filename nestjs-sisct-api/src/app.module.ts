import { Module } from '@nestjs/common';
import { CadastroNacionalModule } from './modules/cadastro-nacional/cadastro-nacional.module';
import { CadastroNacionalEnderecoModule } from './modules/cadastro-nacional-endereco/cadastro-nacional-endereco.module';
import { CadastroNacionalMapaDeVagasModule } from './modules/cadastro-nacional-mapa-de-vagas/cadastro-nacional-mapa-de-vagas.module';
import { CadastroNacionalRepresentanteLegalModule } from './modules/cadastro-nacional-representante-legal/cadastro-nacional-representante-legal.module';
import { MunicipioModule } from './modules/municipio/municipio.module';

@Module({
  imports: [
    CadastroNacionalModule,
    CadastroNacionalEnderecoModule,
    CadastroNacionalMapaDeVagasModule,
    CadastroNacionalRepresentanteLegalModule,
    MunicipioModule,
  ],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { CadastroNacionalRepresentanteLegalController } from './cadastro-nacional-representante-legal.controller';
import { CadastroNacionalRepresentanteLegalService } from './cadastro-nacional-representante-legal.service';

@Module({
  controllers: [CadastroNacionalRepresentanteLegalController],
  providers: [CadastroNacionalRepresentanteLegalService],
})
export class CadastroNacionalRepresentanteLegalModule {}
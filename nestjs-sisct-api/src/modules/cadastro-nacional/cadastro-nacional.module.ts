import { Module } from '@nestjs/common';
import { CadastroNacionalController } from './cadastro-nacional.controller';
import { CadastroNacionalService } from './cadastro-nacional.service';

@Module({
  controllers: [CadastroNacionalController],
  providers: [CadastroNacionalService],
})
export class CadastroNacionalModule {}
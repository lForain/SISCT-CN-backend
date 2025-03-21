import { Module } from '@nestjs/common';
import { CadastroNacionalEnderecoService } from './cadastro-nacional-endereco.service';
import { CadastroNacionalEnderecoController } from './cadastro-nacional-endereco.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CadastroNacionalEndereco } from './entities/cadastro-nacional-endereco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CadastroNacionalEndereco])],
  controllers: [CadastroNacionalEnderecoController],
  providers: [CadastroNacionalEnderecoService],
})
export class CadastroNacionalEnderecoModule {}
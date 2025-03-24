import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CadastroNacional } from '../entities/CadastroNacional.entity';
import { CadastroNacionalService } from '../services/cadastroNacional.service';
import { CadastroNacionalController } from '../controllers/cadastroNacional.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([CadastroNacional]),
  ],
  controllers: [CadastroNacionalController],
  providers: [CadastroNacionalService],
  exports: [CadastroNacionalService],
})
export class CadastroNacionalModule {}

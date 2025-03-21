import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CadastroNacionalMapaDeVagasService } from './cadastro-nacional-mapa-de-vagas.service';
import { CadastroNacionalMapaDeVagas } from './entities/cadastro-nacional-mapa-de-vagas.entity';

@Controller('cadastro-nacional-mapa-de-vagas')
export class CadastroNacionalMapaDeVagasController {
  constructor(private readonly service: CadastroNacionalMapaDeVagasService) {}

  @Post()
  create(@Body() createDto: CadastroNacionalMapaDeVagas) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: CadastroNacionalMapaDeVagas) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
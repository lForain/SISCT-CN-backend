import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CadastroNacionalService } from './cadastro-nacional.service';
import { CadastroNacional } from './entities/cadastro-nacional.entity';

@Controller('cadastro-nacional')
export class CadastroNacionalController {
  constructor(private readonly cadastroNacionalService: CadastroNacionalService) {}

  @Post()
  create(@Body() cadastroNacional: CadastroNacional) {
    return this.cadastroNacionalService.create(cadastroNacional);
  }

  @Get()
  findAll() {
    return this.cadastroNacionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadastroNacionalService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() cadastroNacional: CadastroNacional) {
    return this.cadastroNacionalService.update(+id, cadastroNacional);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadastroNacionalService.remove(+id);
  }
}
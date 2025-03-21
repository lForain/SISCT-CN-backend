import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CadastroNacionalRepresentanteLegalService } from './cadastro-nacional-representante-legal.service';
import { CadastroNacionalRepresentanteLegal } from './entities/cadastro-nacional-representante-legal.entity';

@Controller('cadastro-nacional-representante-legal')
export class CadastroNacionalRepresentanteLegalController {
  constructor(private readonly service: CadastroNacionalRepresentanteLegalService) {}

  @Post()
  create(@Body() representanteLegal: CadastroNacionalRepresentanteLegal) {
    return this.service.create(representanteLegal);
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
  update(@Param('id') id: string, @Body() representanteLegal: CadastroNacionalRepresentanteLegal) {
    return this.service.update(+id, representanteLegal);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
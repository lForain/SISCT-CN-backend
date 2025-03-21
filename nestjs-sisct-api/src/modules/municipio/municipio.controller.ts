import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { Municipio } from './entities/municipio.entity';

@Controller('municipio')
export class MunicipioController {
  constructor(private readonly municipioService: MunicipioService) {}

  @Post()
  create(@Body() municipio: Municipio) {
    return this.municipioService.create(municipio);
  }

  @Get()
  findAll() {
    return this.municipioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.municipioService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() municipio: Municipio) {
    return this.municipioService.update(+id, municipio);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.municipioService.remove(+id);
  }
}
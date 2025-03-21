import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CadastroNacionalEnderecoService } from './cadastro-nacional-endereco.service';
import { CadastroNacionalEndereco } from './entities/cadastro-nacional-endereco.entity';

@Controller('cadastro-nacional-endereco')
export class CadastroNacionalEnderecoController {
  constructor(private readonly cadastroNacionalEnderecoService: CadastroNacionalEnderecoService) {}

  @Post()
  create(@Body() cadastroNacionalEndereco: CadastroNacionalEndereco) {
    return this.cadastroNacionalEnderecoService.create(cadastroNacionalEndereco);
  }

  @Get()
  findAll() {
    return this.cadastroNacionalEnderecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadastroNacionalEnderecoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() cadastroNacionalEndereco: CadastroNacionalEndereco) {
    return this.cadastroNacionalEnderecoService.update(+id, cadastroNacionalEndereco);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadastroNacionalEnderecoService.remove(+id);
  }
}
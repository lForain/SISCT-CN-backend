import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CadastroNacionalService } from '../services/cadastroNacional.service';
import { CreateCadastroNacionalDto, UpdateCadastroNacionalDto, CadastroNacionalResponseDto } from '../dtos/cadastroNacional.dto';

@Controller('cadastro-nacional')
export class CadastroNacionalController {
  constructor(private readonly cadastroService: CadastroNacionalService) {}

  @Get()
  async findAll(): Promise<CadastroNacionalResponseDto[]> {
    const cadastros = await this.cadastroService.findAll();
    return cadastros.map(cadastro => this.mapToResponse(cadastro));
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CadastroNacionalResponseDto> {
    const cadastro = await this.cadastroService.findOne(id);
    return this.mapToResponse(cadastro);
  }

  @Post()
  async create(@Body() createDto: CreateCadastroNacionalDto): Promise<CadastroNacionalResponseDto> {
    const cadastro = await this.cadastroService.create(createDto);
    return this.mapToResponse(cadastro);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateCadastroNacionalDto,
  ): Promise<CadastroNacionalResponseDto> {
    const cadastro = await this.cadastroService.update(id, updateDto);
    return this.mapToResponse(cadastro);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    await this.cadastroService.remove(id);
  }

  private mapToResponse(cadastro: any): CadastroNacionalResponseDto {
    const response = new CadastroNacionalResponseDto();
    Object.assign(response, {
      id: cadastro.id,
      cnpj: cadastro.cnpj,
      areaAtuacao: cadastro.areaAtuacao,
      numeroFiliais: cadastro.numeroFiliais,
      nomeFantasia: cadastro.nomeFantasia,
      razaoSocial: cadastro.razaoSocial,
      // ... map other fields
    });
    return response;
  }
}

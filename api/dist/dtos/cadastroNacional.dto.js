"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastroNacionalResponseDto = exports.UpdateCadastroNacionalDto = exports.CreateCadastroNacionalDto = void 0;
const class_validator_1 = require("class-validator");
class CreateCadastroNacionalDto {
    cnpj;
    areaAtuacao;
    numeroFiliais;
    nomeFantasia;
    razaoSocial;
    cnaePrincipal;
    cnaeSecundario;
    receitaBruta;
    modalidadeFinanciamentoContrato;
}
exports.CreateCadastroNacionalDto = CreateCadastroNacionalDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(14),
    __metadata("design:type", String)
], CreateCadastroNacionalDto.prototype, "cnpj", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCadastroNacionalDto.prototype, "areaAtuacao", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCadastroNacionalDto.prototype, "numeroFiliais", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateCadastroNacionalDto.prototype, "nomeFantasia", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateCadastroNacionalDto.prototype, "razaoSocial", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateCadastroNacionalDto.prototype, "cnaePrincipal", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateCadastroNacionalDto.prototype, "cnaeSecundario", void 0);
__decorate([
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], CreateCadastroNacionalDto.prototype, "receitaBruta", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCadastroNacionalDto.prototype, "modalidadeFinanciamentoContrato", void 0);
class UpdateCadastroNacionalDto extends CreateCadastroNacionalDto {
}
exports.UpdateCadastroNacionalDto = UpdateCadastroNacionalDto;
class CadastroNacionalResponseDto {
    id;
    cnpj;
    areaAtuacao;
    numeroFiliais;
    nomeFantasia;
    razaoSocial;
}
exports.CadastroNacionalResponseDto = CadastroNacionalResponseDto;
//# sourceMappingURL=cadastroNacional.dto.js.map
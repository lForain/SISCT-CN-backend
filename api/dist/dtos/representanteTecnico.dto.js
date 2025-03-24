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
exports.RepresentanteTecnicoResponseDto = exports.UpdateRepresentanteTecnicoDto = exports.CreateRepresentanteTecnicoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateRepresentanteTecnicoDto {
    nome;
    dataNascimento;
    cpf;
    telefone;
    email;
    escolaridade;
    curso;
    possuiExperiencia;
    responsavelPrincipalId;
    cadastroNacionalId;
}
exports.CreateRepresentanteTecnicoDto = CreateRepresentanteTecnicoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateRepresentanteTecnicoDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateRepresentanteTecnicoDto.prototype, "dataNascimento", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRepresentanteTecnicoDto.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateRepresentanteTecnicoDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateRepresentanteTecnicoDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRepresentanteTecnicoDto.prototype, "escolaridade", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRepresentanteTecnicoDto.prototype, "curso", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRepresentanteTecnicoDto.prototype, "possuiExperiencia", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRepresentanteTecnicoDto.prototype, "responsavelPrincipalId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRepresentanteTecnicoDto.prototype, "cadastroNacionalId", void 0);
class UpdateRepresentanteTecnicoDto extends CreateRepresentanteTecnicoDto {
}
exports.UpdateRepresentanteTecnicoDto = UpdateRepresentanteTecnicoDto;
class RepresentanteTecnicoResponseDto {
    id;
    nome;
    dataNascimento;
    cpf;
    telefone;
    email;
    escolaridade;
    curso;
    possuiExperiencia;
    responsavelPrincipalId;
    cadastroNacionalId;
}
exports.RepresentanteTecnicoResponseDto = RepresentanteTecnicoResponseDto;
//# sourceMappingURL=representanteTecnico.dto.js.map
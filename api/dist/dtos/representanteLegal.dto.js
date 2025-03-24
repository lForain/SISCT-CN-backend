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
exports.RepresentanteLegalResponseDto = exports.UpdateRepresentanteLegalDto = exports.CreateRepresentanteLegalDto = void 0;
const class_validator_1 = require("class-validator");
class CreateRepresentanteLegalDto {
    nome;
    terminoMandato;
    papelDiretoria;
    dataNascimento;
    cpf;
    telefone;
    email;
    escolaridade;
    curso;
    descricaoPapelDiretoria;
    cadastroNacionalId;
}
exports.CreateRepresentanteLegalDto = CreateRepresentanteLegalDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateRepresentanteLegalDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateRepresentanteLegalDto.prototype, "terminoMandato", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRepresentanteLegalDto.prototype, "papelDiretoria", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateRepresentanteLegalDto.prototype, "dataNascimento", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(11),
    __metadata("design:type", String)
], CreateRepresentanteLegalDto.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateRepresentanteLegalDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateRepresentanteLegalDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRepresentanteLegalDto.prototype, "escolaridade", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateRepresentanteLegalDto.prototype, "curso", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateRepresentanteLegalDto.prototype, "descricaoPapelDiretoria", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRepresentanteLegalDto.prototype, "cadastroNacionalId", void 0);
class UpdateRepresentanteLegalDto extends CreateRepresentanteLegalDto {
}
exports.UpdateRepresentanteLegalDto = UpdateRepresentanteLegalDto;
class RepresentanteLegalResponseDto {
    id;
    nome;
    terminoMandato;
    papelDiretoria;
    dataNascimento;
    cpf;
    telefone;
    email;
    escolaridade;
    curso;
    descricaoPapelDiretoria;
    cadastroNacionalId;
}
exports.RepresentanteLegalResponseDto = RepresentanteLegalResponseDto;
//# sourceMappingURL=representanteLegal.dto.js.map
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
exports.RepresentanteTecnico = void 0;
const typeorm_1 = require("typeorm");
const CadastroNacional_entity_1 = require("./CadastroNacional.entity");
let RepresentanteTecnico = class RepresentanteTecnico {
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
    cadastroNacional;
};
exports.RepresentanteTecnico = RepresentanteTecnico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_REPRESENTANTE_TECNICO' }),
    __metadata("design:type", Number)
], RepresentanteTecnico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NO_NOME', length: 100 }),
    __metadata("design:type", String)
], RepresentanteTecnico.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'DT_NASCIMENTO' }),
    __metadata("design:type", Date)
], RepresentanteTecnico.prototype, "dataNascimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CO_CPF', type: 'number', precision: 11 }),
    __metadata("design:type", Number)
], RepresentanteTecnico.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CO_TELEFONE', length: 50 }),
    __metadata("design:type", String)
], RepresentanteTecnico.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NO_EMAIL', length: 50 }),
    __metadata("design:type", String)
], RepresentanteTecnico.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'TP_ESCOLARIDADE' }),
    __metadata("design:type", Number)
], RepresentanteTecnico.prototype, "escolaridade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CO_CURSO' }),
    __metadata("design:type", Number)
], RepresentanteTecnico.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'TP_POSSUI_EXPERIENCIA' }),
    __metadata("design:type", Number)
], RepresentanteTecnico.prototype, "possuiExperiencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_RESPONSAVEL_PRINCIPAL', nullable: true }),
    __metadata("design:type", Number)
], RepresentanteTecnico.prototype, "responsavelPrincipalId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_CADASTRO_NACIONAL' }),
    __metadata("design:type", Number)
], RepresentanteTecnico.prototype, "cadastroNacionalId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CadastroNacional_entity_1.CadastroNacional, cadastro => cadastro.representanteTecnico),
    (0, typeorm_1.JoinColumn)({ name: 'ID_CADASTRO_NACIONAL' }),
    __metadata("design:type", CadastroNacional_entity_1.CadastroNacional)
], RepresentanteTecnico.prototype, "cadastroNacional", void 0);
exports.RepresentanteTecnico = RepresentanteTecnico = __decorate([
    (0, typeorm_1.Entity)('REPRESENTANTE_TECNICO')
], RepresentanteTecnico);
//# sourceMappingURL=RepresentanteTecnico.entity.js.map
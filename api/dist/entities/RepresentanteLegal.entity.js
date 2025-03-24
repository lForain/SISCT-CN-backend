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
exports.RepresentanteLegal = void 0;
const typeorm_1 = require("typeorm");
const CadastroNacional_entity_1 = require("./CadastroNacional.entity");
let RepresentanteLegal = class RepresentanteLegal {
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
    cadastroNacional;
};
exports.RepresentanteLegal = RepresentanteLegal;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_REPRESENTANTE_LEGAL' }),
    __metadata("design:type", Number)
], RepresentanteLegal.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NO_NOME', length: 200 }),
    __metadata("design:type", String)
], RepresentanteLegal.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'DT_TERMINO_MANDATO', nullable: true }),
    __metadata("design:type", Date)
], RepresentanteLegal.prototype, "terminoMandato", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'TP_PAPEL_DIRETORIA' }),
    __metadata("design:type", Number)
], RepresentanteLegal.prototype, "papelDiretoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'DT_NASCIMENTO', nullable: true }),
    __metadata("design:type", Date)
], RepresentanteLegal.prototype, "dataNascimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CO_CPF', length: 11 }),
    __metadata("design:type", String)
], RepresentanteLegal.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CO_TELEFONE', length: 100, nullable: true }),
    __metadata("design:type", String)
], RepresentanteLegal.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NO_EMAIL', length: 100 }),
    __metadata("design:type", String)
], RepresentanteLegal.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'TP_ESCOLARIDADE', nullable: true }),
    __metadata("design:type", Number)
], RepresentanteLegal.prototype, "escolaridade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CO_CURSO', length: 20, nullable: true }),
    __metadata("design:type", String)
], RepresentanteLegal.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'DS_PAPEL_DIRETORIA', length: 200, nullable: true }),
    __metadata("design:type", String)
], RepresentanteLegal.prototype, "descricaoPapelDiretoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_CADASTRO_NACIONAL' }),
    __metadata("design:type", Number)
], RepresentanteLegal.prototype, "cadastroNacionalId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CadastroNacional_entity_1.CadastroNacional, cadastro => cadastro.representanteLegal),
    (0, typeorm_1.JoinColumn)({ name: 'ID_CADASTRO_NACIONAL' }),
    __metadata("design:type", CadastroNacional_entity_1.CadastroNacional)
], RepresentanteLegal.prototype, "cadastroNacional", void 0);
exports.RepresentanteLegal = RepresentanteLegal = __decorate([
    (0, typeorm_1.Entity)('REPRESENTANTE_LEGAL')
], RepresentanteLegal);
//# sourceMappingURL=RepresentanteLegal.entity.js.map
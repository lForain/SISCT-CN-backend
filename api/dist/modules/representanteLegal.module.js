"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepresentanteLegalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RepresentanteLegal_entity_1 = require("../entities/RepresentanteLegal.entity");
const representanteLegal_service_1 = require("../services/representanteLegal.service");
const representanteLegal_controller_1 = require("../controllers/representanteLegal.controller");
let RepresentanteLegalModule = class RepresentanteLegalModule {
};
exports.RepresentanteLegalModule = RepresentanteLegalModule;
exports.RepresentanteLegalModule = RepresentanteLegalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([RepresentanteLegal_entity_1.RepresentanteLegal]),
        ],
        controllers: [representanteLegal_controller_1.RepresentanteLegalController],
        providers: [representanteLegal_service_1.RepresentanteLegalService],
        exports: [representanteLegal_service_1.RepresentanteLegalService],
    })
], RepresentanteLegalModule);
//# sourceMappingURL=representanteLegal.module.js.map
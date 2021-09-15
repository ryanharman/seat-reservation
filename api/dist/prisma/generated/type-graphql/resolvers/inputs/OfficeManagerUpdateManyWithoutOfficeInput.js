"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficeManagerUpdateManyWithoutOfficeInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OfficeManagerCreateManyOfficeInputEnvelope_1 = require("../inputs/OfficeManagerCreateManyOfficeInputEnvelope");
const OfficeManagerCreateOrConnectWithoutOfficeInput_1 = require("../inputs/OfficeManagerCreateOrConnectWithoutOfficeInput");
const OfficeManagerCreateWithoutOfficeInput_1 = require("../inputs/OfficeManagerCreateWithoutOfficeInput");
const OfficeManagerScalarWhereInput_1 = require("../inputs/OfficeManagerScalarWhereInput");
const OfficeManagerUpdateManyWithWhereWithoutOfficeInput_1 = require("../inputs/OfficeManagerUpdateManyWithWhereWithoutOfficeInput");
const OfficeManagerUpdateWithWhereUniqueWithoutOfficeInput_1 = require("../inputs/OfficeManagerUpdateWithWhereUniqueWithoutOfficeInput");
const OfficeManagerUpsertWithWhereUniqueWithoutOfficeInput_1 = require("../inputs/OfficeManagerUpsertWithWhereUniqueWithoutOfficeInput");
const OfficeManagerWhereUniqueInput_1 = require("../inputs/OfficeManagerWhereUniqueInput");
let OfficeManagerUpdateManyWithoutOfficeInput = class OfficeManagerUpdateManyWithoutOfficeInput {
};
__decorate([
    TypeGraphQL.Field(_type => [OfficeManagerCreateWithoutOfficeInput_1.OfficeManagerCreateWithoutOfficeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], OfficeManagerUpdateManyWithoutOfficeInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OfficeManagerCreateOrConnectWithoutOfficeInput_1.OfficeManagerCreateOrConnectWithoutOfficeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], OfficeManagerUpdateManyWithoutOfficeInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OfficeManagerUpsertWithWhereUniqueWithoutOfficeInput_1.OfficeManagerUpsertWithWhereUniqueWithoutOfficeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], OfficeManagerUpdateManyWithoutOfficeInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => OfficeManagerCreateManyOfficeInputEnvelope_1.OfficeManagerCreateManyOfficeInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], OfficeManagerUpdateManyWithoutOfficeInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OfficeManagerWhereUniqueInput_1.OfficeManagerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], OfficeManagerUpdateManyWithoutOfficeInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OfficeManagerWhereUniqueInput_1.OfficeManagerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], OfficeManagerUpdateManyWithoutOfficeInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OfficeManagerWhereUniqueInput_1.OfficeManagerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], OfficeManagerUpdateManyWithoutOfficeInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OfficeManagerWhereUniqueInput_1.OfficeManagerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], OfficeManagerUpdateManyWithoutOfficeInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OfficeManagerUpdateWithWhereUniqueWithoutOfficeInput_1.OfficeManagerUpdateWithWhereUniqueWithoutOfficeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], OfficeManagerUpdateManyWithoutOfficeInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OfficeManagerUpdateManyWithWhereWithoutOfficeInput_1.OfficeManagerUpdateManyWithWhereWithoutOfficeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], OfficeManagerUpdateManyWithoutOfficeInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OfficeManagerScalarWhereInput_1.OfficeManagerScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], OfficeManagerUpdateManyWithoutOfficeInput.prototype, "deleteMany", void 0);
OfficeManagerUpdateManyWithoutOfficeInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OfficeManagerUpdateManyWithoutOfficeInput);
exports.OfficeManagerUpdateManyWithoutOfficeInput = OfficeManagerUpdateManyWithoutOfficeInput;
//# sourceMappingURL=OfficeManagerUpdateManyWithoutOfficeInput.js.map
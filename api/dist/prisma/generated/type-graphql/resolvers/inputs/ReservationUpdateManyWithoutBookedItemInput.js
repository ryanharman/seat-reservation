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
exports.ReservationUpdateManyWithoutBookedItemInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ReservationCreateManyBookedItemInputEnvelope_1 = require("../inputs/ReservationCreateManyBookedItemInputEnvelope");
const ReservationCreateOrConnectWithoutBookedItemInput_1 = require("../inputs/ReservationCreateOrConnectWithoutBookedItemInput");
const ReservationCreateWithoutBookedItemInput_1 = require("../inputs/ReservationCreateWithoutBookedItemInput");
const ReservationScalarWhereInput_1 = require("../inputs/ReservationScalarWhereInput");
const ReservationUpdateManyWithWhereWithoutBookedItemInput_1 = require("../inputs/ReservationUpdateManyWithWhereWithoutBookedItemInput");
const ReservationUpdateWithWhereUniqueWithoutBookedItemInput_1 = require("../inputs/ReservationUpdateWithWhereUniqueWithoutBookedItemInput");
const ReservationUpsertWithWhereUniqueWithoutBookedItemInput_1 = require("../inputs/ReservationUpsertWithWhereUniqueWithoutBookedItemInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUpdateManyWithoutBookedItemInput = class ReservationUpdateManyWithoutBookedItemInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateWithoutBookedItemInput_1.ReservationCreateWithoutBookedItemInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationUpdateManyWithoutBookedItemInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutBookedItemInput_1.ReservationCreateOrConnectWithoutBookedItemInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationUpdateManyWithoutBookedItemInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ReservationUpsertWithWhereUniqueWithoutBookedItemInput_1.ReservationUpsertWithWhereUniqueWithoutBookedItemInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationUpdateManyWithoutBookedItemInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ReservationCreateManyBookedItemInputEnvelope_1.ReservationCreateManyBookedItemInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationUpdateManyWithoutBookedItemInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationUpdateManyWithoutBookedItemInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationUpdateManyWithoutBookedItemInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationUpdateManyWithoutBookedItemInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationUpdateManyWithoutBookedItemInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ReservationUpdateWithWhereUniqueWithoutBookedItemInput_1.ReservationUpdateWithWhereUniqueWithoutBookedItemInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationUpdateManyWithoutBookedItemInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ReservationUpdateManyWithWhereWithoutBookedItemInput_1.ReservationUpdateManyWithWhereWithoutBookedItemInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationUpdateManyWithoutBookedItemInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ReservationScalarWhereInput_1.ReservationScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationUpdateManyWithoutBookedItemInput.prototype, "deleteMany", void 0);
ReservationUpdateManyWithoutBookedItemInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ReservationUpdateManyWithoutBookedItemInput);
exports.ReservationUpdateManyWithoutBookedItemInput = ReservationUpdateManyWithoutBookedItemInput;
//# sourceMappingURL=ReservationUpdateManyWithoutBookedItemInput.js.map
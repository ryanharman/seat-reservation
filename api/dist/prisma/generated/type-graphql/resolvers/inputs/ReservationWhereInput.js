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
var ReservationWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BookableItemRelationFilter_1 = require("../inputs/BookableItemRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ReservationWhereInput = ReservationWhereInput_1 = class ReservationWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemRelationFilter_1.BookableItemRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "bookedItem", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "bookedItemId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "dateBookedFrom", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "dateBookedTo", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "cancelled", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationWhereInput.prototype, "updatedAt", void 0);
ReservationWhereInput = ReservationWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ReservationWhereInput);
exports.ReservationWhereInput = ReservationWhereInput;
//# sourceMappingURL=ReservationWhereInput.js.map
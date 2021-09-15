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
exports.ReservationCreateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BookableItemCreateNestedOneWithoutReservationsInput_1 = require("../inputs/BookableItemCreateNestedOneWithoutReservationsInput");
const UserCreateNestedOneWithoutReservationsInput_1 = require("../inputs/UserCreateNestedOneWithoutReservationsInput");
let ReservationCreateInput = class ReservationCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ReservationCreateInput.prototype, "dateBookedFrom", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ReservationCreateInput.prototype, "dateBookedTo", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], ReservationCreateInput.prototype, "cancelled", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationCreateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ReservationCreateInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReservationsInput_1.UserCreateNestedOneWithoutReservationsInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateNestedOneWithoutReservationsInput_1.UserCreateNestedOneWithoutReservationsInput)
], ReservationCreateInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemCreateNestedOneWithoutReservationsInput_1.BookableItemCreateNestedOneWithoutReservationsInput, {
        nullable: false
    }),
    __metadata("design:type", BookableItemCreateNestedOneWithoutReservationsInput_1.BookableItemCreateNestedOneWithoutReservationsInput)
], ReservationCreateInput.prototype, "bookedItem", void 0);
ReservationCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ReservationCreateInput);
exports.ReservationCreateInput = ReservationCreateInput;
//# sourceMappingURL=ReservationCreateInput.js.map
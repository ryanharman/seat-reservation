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
exports.ReservationResolver = void 0;
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
let Reservation = class Reservation {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Reservation.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Reservation.prototype, "userId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Reservation.prototype, "bookedItemId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Reservation.prototype, "bookingType", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], Reservation.prototype, "cancelled", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Reservation.prototype, "dateBookedFrom", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Reservation.prototype, "dateBookedTo", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Reservation.prototype, "createdDate", void 0);
Reservation = __decorate([
    type_graphql_1.ObjectType()
], Reservation);
let ReservationResolver = class ReservationResolver {
    async reservations() {
        console.log("reservations champ");
    }
};
__decorate([
    type_graphql_1.Query(() => [Reservation]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReservationResolver.prototype, "reservations", null);
ReservationResolver = __decorate([
    type_graphql_1.Resolver()
], ReservationResolver);
exports.ReservationResolver = ReservationResolver;
//# sourceMappingURL=Reservation.js.map
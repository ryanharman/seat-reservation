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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateReservationArgs_1 = require("./args/AggregateReservationArgs");
const CreateManyReservationArgs_1 = require("./args/CreateManyReservationArgs");
const CreateReservationArgs_1 = require("./args/CreateReservationArgs");
const DeleteManyReservationArgs_1 = require("./args/DeleteManyReservationArgs");
const DeleteReservationArgs_1 = require("./args/DeleteReservationArgs");
const FindFirstReservationArgs_1 = require("./args/FindFirstReservationArgs");
const FindManyReservationArgs_1 = require("./args/FindManyReservationArgs");
const FindUniqueReservationArgs_1 = require("./args/FindUniqueReservationArgs");
const GroupByReservationArgs_1 = require("./args/GroupByReservationArgs");
const UpdateManyReservationArgs_1 = require("./args/UpdateManyReservationArgs");
const UpdateReservationArgs_1 = require("./args/UpdateReservationArgs");
const UpsertReservationArgs_1 = require("./args/UpsertReservationArgs");
const helpers_1 = require("../../../helpers");
const Reservation_1 = require("../../../models/Reservation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReservation_1 = require("../../outputs/AggregateReservation");
const ReservationGroupBy_1 = require("../../outputs/ReservationGroupBy");
let ReservationCrudResolver = class ReservationCrudResolver {
    async reservation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findUnique(args);
    }
    async findFirstReservation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findFirst(args);
    }
    async reservations(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findMany(args);
    }
    async createReservation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.create(args);
    }
    async createManyReservation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.createMany(args);
    }
    async deleteReservation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.delete(args);
    }
    async updateReservation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.update(args);
    }
    async deleteManyReservation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.deleteMany(args);
    }
    async updateManyReservation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.updateMany(args);
    }
    async upsertReservation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.upsert(args);
    }
    async aggregateReservation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByReservation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Reservation_1.Reservation, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueReservationArgs_1.FindUniqueReservationArgs]),
    __metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "reservation", null);
__decorate([
    TypeGraphQL.Query(_returns => Reservation_1.Reservation, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstReservationArgs_1.FindFirstReservationArgs]),
    __metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "findFirstReservation", null);
__decorate([
    TypeGraphQL.Query(_returns => [Reservation_1.Reservation], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyReservationArgs_1.FindManyReservationArgs]),
    __metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "reservations", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Reservation_1.Reservation, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateReservationArgs_1.CreateReservationArgs]),
    __metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "createReservation", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyReservationArgs_1.CreateManyReservationArgs]),
    __metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "createManyReservation", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Reservation_1.Reservation, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteReservationArgs_1.DeleteReservationArgs]),
    __metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "deleteReservation", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Reservation_1.Reservation, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateReservationArgs_1.UpdateReservationArgs]),
    __metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "updateReservation", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyReservationArgs_1.DeleteManyReservationArgs]),
    __metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "deleteManyReservation", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyReservationArgs_1.UpdateManyReservationArgs]),
    __metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "updateManyReservation", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Reservation_1.Reservation, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertReservationArgs_1.UpsertReservationArgs]),
    __metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "upsertReservation", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateReservation_1.AggregateReservation, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateReservationArgs_1.AggregateReservationArgs]),
    __metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "aggregateReservation", null);
__decorate([
    TypeGraphQL.Query(_returns => [ReservationGroupBy_1.ReservationGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByReservationArgs_1.GroupByReservationArgs]),
    __metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "groupByReservation", null);
ReservationCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], ReservationCrudResolver);
exports.ReservationCrudResolver = ReservationCrudResolver;
//# sourceMappingURL=ReservationCrudResolver.js.map
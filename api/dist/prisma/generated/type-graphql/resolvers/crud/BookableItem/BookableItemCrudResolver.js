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
exports.BookableItemCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateBookableItemArgs_1 = require("./args/AggregateBookableItemArgs");
const CreateBookableItemArgs_1 = require("./args/CreateBookableItemArgs");
const CreateManyBookableItemArgs_1 = require("./args/CreateManyBookableItemArgs");
const DeleteBookableItemArgs_1 = require("./args/DeleteBookableItemArgs");
const DeleteManyBookableItemArgs_1 = require("./args/DeleteManyBookableItemArgs");
const FindFirstBookableItemArgs_1 = require("./args/FindFirstBookableItemArgs");
const FindManyBookableItemArgs_1 = require("./args/FindManyBookableItemArgs");
const FindUniqueBookableItemArgs_1 = require("./args/FindUniqueBookableItemArgs");
const GroupByBookableItemArgs_1 = require("./args/GroupByBookableItemArgs");
const UpdateBookableItemArgs_1 = require("./args/UpdateBookableItemArgs");
const UpdateManyBookableItemArgs_1 = require("./args/UpdateManyBookableItemArgs");
const UpsertBookableItemArgs_1 = require("./args/UpsertBookableItemArgs");
const helpers_1 = require("../../../helpers");
const BookableItem_1 = require("../../../models/BookableItem");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBookableItem_1 = require("../../outputs/AggregateBookableItem");
const BookableItemGroupBy_1 = require("../../outputs/BookableItemGroupBy");
let BookableItemCrudResolver = class BookableItemCrudResolver {
    async bookableItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItem.findUnique(args);
    }
    async findFirstBookableItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItem.findFirst(args);
    }
    async bookableItems(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItem.findMany(args);
    }
    async createBookableItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItem.create(args);
    }
    async createManyBookableItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItem.createMany(args);
    }
    async deleteBookableItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItem.delete(args);
    }
    async updateBookableItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItem.update(args);
    }
    async deleteManyBookableItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItem.deleteMany(args);
    }
    async updateManyBookableItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItem.updateMany(args);
    }
    async upsertBookableItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItem.upsert(args);
    }
    async aggregateBookableItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItem.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByBookableItem(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookableItem.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => BookableItem_1.BookableItem, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueBookableItemArgs_1.FindUniqueBookableItemArgs]),
    __metadata("design:returntype", Promise)
], BookableItemCrudResolver.prototype, "bookableItem", null);
__decorate([
    TypeGraphQL.Query(_returns => BookableItem_1.BookableItem, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstBookableItemArgs_1.FindFirstBookableItemArgs]),
    __metadata("design:returntype", Promise)
], BookableItemCrudResolver.prototype, "findFirstBookableItem", null);
__decorate([
    TypeGraphQL.Query(_returns => [BookableItem_1.BookableItem], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyBookableItemArgs_1.FindManyBookableItemArgs]),
    __metadata("design:returntype", Promise)
], BookableItemCrudResolver.prototype, "bookableItems", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BookableItem_1.BookableItem, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateBookableItemArgs_1.CreateBookableItemArgs]),
    __metadata("design:returntype", Promise)
], BookableItemCrudResolver.prototype, "createBookableItem", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyBookableItemArgs_1.CreateManyBookableItemArgs]),
    __metadata("design:returntype", Promise)
], BookableItemCrudResolver.prototype, "createManyBookableItem", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BookableItem_1.BookableItem, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteBookableItemArgs_1.DeleteBookableItemArgs]),
    __metadata("design:returntype", Promise)
], BookableItemCrudResolver.prototype, "deleteBookableItem", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BookableItem_1.BookableItem, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateBookableItemArgs_1.UpdateBookableItemArgs]),
    __metadata("design:returntype", Promise)
], BookableItemCrudResolver.prototype, "updateBookableItem", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyBookableItemArgs_1.DeleteManyBookableItemArgs]),
    __metadata("design:returntype", Promise)
], BookableItemCrudResolver.prototype, "deleteManyBookableItem", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyBookableItemArgs_1.UpdateManyBookableItemArgs]),
    __metadata("design:returntype", Promise)
], BookableItemCrudResolver.prototype, "updateManyBookableItem", null);
__decorate([
    TypeGraphQL.Mutation(_returns => BookableItem_1.BookableItem, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertBookableItemArgs_1.UpsertBookableItemArgs]),
    __metadata("design:returntype", Promise)
], BookableItemCrudResolver.prototype, "upsertBookableItem", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateBookableItem_1.AggregateBookableItem, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateBookableItemArgs_1.AggregateBookableItemArgs]),
    __metadata("design:returntype", Promise)
], BookableItemCrudResolver.prototype, "aggregateBookableItem", null);
__decorate([
    TypeGraphQL.Query(_returns => [BookableItemGroupBy_1.BookableItemGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByBookableItemArgs_1.GroupByBookableItemArgs]),
    __metadata("design:returntype", Promise)
], BookableItemCrudResolver.prototype, "groupByBookableItem", null);
BookableItemCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => BookableItem_1.BookableItem)
], BookableItemCrudResolver);
exports.BookableItemCrudResolver = BookableItemCrudResolver;
//# sourceMappingURL=BookableItemCrudResolver.js.map
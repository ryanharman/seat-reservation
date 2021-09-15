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
exports.BookableItemGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BookableItemAvgAggregate_1 = require("../outputs/BookableItemAvgAggregate");
const BookableItemCountAggregate_1 = require("../outputs/BookableItemCountAggregate");
const BookableItemMaxAggregate_1 = require("../outputs/BookableItemMaxAggregate");
const BookableItemMinAggregate_1 = require("../outputs/BookableItemMinAggregate");
const BookableItemSumAggregate_1 = require("../outputs/BookableItemSumAggregate");
let BookableItemGroupBy = class BookableItemGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], BookableItemGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], BookableItemGroupBy.prototype, "officeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], BookableItemGroupBy.prototype, "typeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], BookableItemGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], BookableItemGroupBy.prototype, "officeExclusive", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemGroupBy.prototype, "available", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemCountAggregate_1.BookableItemCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemAvgAggregate_1.BookableItemAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemSumAggregate_1.BookableItemSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemMinAggregate_1.BookableItemMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemMaxAggregate_1.BookableItemMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemGroupBy.prototype, "_max", void 0);
BookableItemGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], BookableItemGroupBy);
exports.BookableItemGroupBy = BookableItemGroupBy;
//# sourceMappingURL=BookableItemGroupBy.js.map
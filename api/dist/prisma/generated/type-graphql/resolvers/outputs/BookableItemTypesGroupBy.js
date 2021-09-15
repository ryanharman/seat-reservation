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
exports.BookableItemTypesGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BookableItemTypesAvgAggregate_1 = require("../outputs/BookableItemTypesAvgAggregate");
const BookableItemTypesCountAggregate_1 = require("../outputs/BookableItemTypesCountAggregate");
const BookableItemTypesMaxAggregate_1 = require("../outputs/BookableItemTypesMaxAggregate");
const BookableItemTypesMinAggregate_1 = require("../outputs/BookableItemTypesMinAggregate");
const BookableItemTypesSumAggregate_1 = require("../outputs/BookableItemTypesSumAggregate");
let BookableItemTypesGroupBy = class BookableItemTypesGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], BookableItemTypesGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], BookableItemTypesGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemTypesGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemTypesGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemTypesCountAggregate_1.BookableItemTypesCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemTypesGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemTypesAvgAggregate_1.BookableItemTypesAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemTypesGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemTypesSumAggregate_1.BookableItemTypesSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemTypesGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemTypesMinAggregate_1.BookableItemTypesMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemTypesGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemTypesMaxAggregate_1.BookableItemTypesMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemTypesGroupBy.prototype, "_max", void 0);
BookableItemTypesGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], BookableItemTypesGroupBy);
exports.BookableItemTypesGroupBy = BookableItemTypesGroupBy;
//# sourceMappingURL=BookableItemTypesGroupBy.js.map
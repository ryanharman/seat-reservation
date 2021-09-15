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
exports.BookableItemUpdateManyWithoutOfficeInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BookableItemCreateManyOfficeInputEnvelope_1 = require("../inputs/BookableItemCreateManyOfficeInputEnvelope");
const BookableItemCreateOrConnectWithoutOfficeInput_1 = require("../inputs/BookableItemCreateOrConnectWithoutOfficeInput");
const BookableItemCreateWithoutOfficeInput_1 = require("../inputs/BookableItemCreateWithoutOfficeInput");
const BookableItemScalarWhereInput_1 = require("../inputs/BookableItemScalarWhereInput");
const BookableItemUpdateManyWithWhereWithoutOfficeInput_1 = require("../inputs/BookableItemUpdateManyWithWhereWithoutOfficeInput");
const BookableItemUpdateWithWhereUniqueWithoutOfficeInput_1 = require("../inputs/BookableItemUpdateWithWhereUniqueWithoutOfficeInput");
const BookableItemUpsertWithWhereUniqueWithoutOfficeInput_1 = require("../inputs/BookableItemUpsertWithWhereUniqueWithoutOfficeInput");
const BookableItemWhereUniqueInput_1 = require("../inputs/BookableItemWhereUniqueInput");
let BookableItemUpdateManyWithoutOfficeInput = class BookableItemUpdateManyWithoutOfficeInput {
};
__decorate([
    TypeGraphQL.Field(_type => [BookableItemCreateWithoutOfficeInput_1.BookableItemCreateWithoutOfficeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutOfficeInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemCreateOrConnectWithoutOfficeInput_1.BookableItemCreateOrConnectWithoutOfficeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutOfficeInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemUpsertWithWhereUniqueWithoutOfficeInput_1.BookableItemUpsertWithWhereUniqueWithoutOfficeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutOfficeInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => BookableItemCreateManyOfficeInputEnvelope_1.BookableItemCreateManyOfficeInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutOfficeInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput_1.BookableItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutOfficeInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput_1.BookableItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutOfficeInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput_1.BookableItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutOfficeInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemWhereUniqueInput_1.BookableItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutOfficeInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemUpdateWithWhereUniqueWithoutOfficeInput_1.BookableItemUpdateWithWhereUniqueWithoutOfficeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutOfficeInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemUpdateManyWithWhereWithoutOfficeInput_1.BookableItemUpdateManyWithWhereWithoutOfficeInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutOfficeInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [BookableItemScalarWhereInput_1.BookableItemScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], BookableItemUpdateManyWithoutOfficeInput.prototype, "deleteMany", void 0);
BookableItemUpdateManyWithoutOfficeInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], BookableItemUpdateManyWithoutOfficeInput);
exports.BookableItemUpdateManyWithoutOfficeInput = BookableItemUpdateManyWithoutOfficeInput;
//# sourceMappingURL=BookableItemUpdateManyWithoutOfficeInput.js.map
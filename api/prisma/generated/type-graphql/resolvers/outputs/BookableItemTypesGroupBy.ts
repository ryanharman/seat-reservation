import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemTypesAvgAggregate } from "../outputs/BookableItemTypesAvgAggregate";
import { BookableItemTypesCountAggregate } from "../outputs/BookableItemTypesCountAggregate";
import { BookableItemTypesMaxAggregate } from "../outputs/BookableItemTypesMaxAggregate";
import { BookableItemTypesMinAggregate } from "../outputs/BookableItemTypesMinAggregate";
import { BookableItemTypesSumAggregate } from "../outputs/BookableItemTypesSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class BookableItemTypesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => BookableItemTypesCountAggregate, {
    nullable: true
  })
  _count!: BookableItemTypesCountAggregate | null;

  @TypeGraphQL.Field(_type => BookableItemTypesAvgAggregate, {
    nullable: true
  })
  _avg!: BookableItemTypesAvgAggregate | null;

  @TypeGraphQL.Field(_type => BookableItemTypesSumAggregate, {
    nullable: true
  })
  _sum!: BookableItemTypesSumAggregate | null;

  @TypeGraphQL.Field(_type => BookableItemTypesMinAggregate, {
    nullable: true
  })
  _min!: BookableItemTypesMinAggregate | null;

  @TypeGraphQL.Field(_type => BookableItemTypesMaxAggregate, {
    nullable: true
  })
  _max!: BookableItemTypesMaxAggregate | null;
}

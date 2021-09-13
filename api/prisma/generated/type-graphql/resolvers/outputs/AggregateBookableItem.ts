import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemAvgAggregate } from "../outputs/BookableItemAvgAggregate";
import { BookableItemCountAggregate } from "../outputs/BookableItemCountAggregate";
import { BookableItemMaxAggregate } from "../outputs/BookableItemMaxAggregate";
import { BookableItemMinAggregate } from "../outputs/BookableItemMinAggregate";
import { BookableItemSumAggregate } from "../outputs/BookableItemSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateBookableItem {
  @TypeGraphQL.Field(_type => BookableItemCountAggregate, {
    nullable: true
  })
  _count!: BookableItemCountAggregate | null;

  @TypeGraphQL.Field(_type => BookableItemAvgAggregate, {
    nullable: true
  })
  _avg!: BookableItemAvgAggregate | null;

  @TypeGraphQL.Field(_type => BookableItemSumAggregate, {
    nullable: true
  })
  _sum!: BookableItemSumAggregate | null;

  @TypeGraphQL.Field(_type => BookableItemMinAggregate, {
    nullable: true
  })
  _min!: BookableItemMinAggregate | null;

  @TypeGraphQL.Field(_type => BookableItemMaxAggregate, {
    nullable: true
  })
  _max!: BookableItemMaxAggregate | null;
}

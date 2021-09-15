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
export class BookableItemGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  officeId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  typeId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  officeExclusive!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  available!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

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

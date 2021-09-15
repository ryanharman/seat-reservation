import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingAvgAggregate } from "../outputs/BuildingAvgAggregate";
import { BuildingCountAggregate } from "../outputs/BuildingCountAggregate";
import { BuildingMaxAggregate } from "../outputs/BuildingMaxAggregate";
import { BuildingMinAggregate } from "../outputs/BuildingMinAggregate";
import { BuildingSumAggregate } from "../outputs/BuildingSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class BuildingGroupBy {
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

  @TypeGraphQL.Field(_type => BuildingCountAggregate, {
    nullable: true
  })
  _count!: BuildingCountAggregate | null;

  @TypeGraphQL.Field(_type => BuildingAvgAggregate, {
    nullable: true
  })
  _avg!: BuildingAvgAggregate | null;

  @TypeGraphQL.Field(_type => BuildingSumAggregate, {
    nullable: true
  })
  _sum!: BuildingSumAggregate | null;

  @TypeGraphQL.Field(_type => BuildingMinAggregate, {
    nullable: true
  })
  _min!: BuildingMinAggregate | null;

  @TypeGraphQL.Field(_type => BuildingMaxAggregate, {
    nullable: true
  })
  _max!: BuildingMaxAggregate | null;
}

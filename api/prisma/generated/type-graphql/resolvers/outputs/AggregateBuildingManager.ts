import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BuildingManagerAvgAggregate } from "../outputs/BuildingManagerAvgAggregate";
import { BuildingManagerCountAggregate } from "../outputs/BuildingManagerCountAggregate";
import { BuildingManagerMaxAggregate } from "../outputs/BuildingManagerMaxAggregate";
import { BuildingManagerMinAggregate } from "../outputs/BuildingManagerMinAggregate";
import { BuildingManagerSumAggregate } from "../outputs/BuildingManagerSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateBuildingManager {
  @TypeGraphQL.Field(_type => BuildingManagerCountAggregate, {
    nullable: true
  })
  _count!: BuildingManagerCountAggregate | null;

  @TypeGraphQL.Field(_type => BuildingManagerAvgAggregate, {
    nullable: true
  })
  _avg!: BuildingManagerAvgAggregate | null;

  @TypeGraphQL.Field(_type => BuildingManagerSumAggregate, {
    nullable: true
  })
  _sum!: BuildingManagerSumAggregate | null;

  @TypeGraphQL.Field(_type => BuildingManagerMinAggregate, {
    nullable: true
  })
  _min!: BuildingManagerMinAggregate | null;

  @TypeGraphQL.Field(_type => BuildingManagerMaxAggregate, {
    nullable: true
  })
  _max!: BuildingManagerMaxAggregate | null;
}

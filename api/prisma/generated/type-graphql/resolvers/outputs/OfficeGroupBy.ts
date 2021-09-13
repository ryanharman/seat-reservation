import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeAvgAggregate } from "../outputs/OfficeAvgAggregate";
import { OfficeCountAggregate } from "../outputs/OfficeCountAggregate";
import { OfficeMaxAggregate } from "../outputs/OfficeMaxAggregate";
import { OfficeMinAggregate } from "../outputs/OfficeMinAggregate";
import { OfficeSumAggregate } from "../outputs/OfficeSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class OfficeGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  buildingId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => OfficeCountAggregate, {
    nullable: true
  })
  _count!: OfficeCountAggregate | null;

  @TypeGraphQL.Field(_type => OfficeAvgAggregate, {
    nullable: true
  })
  _avg!: OfficeAvgAggregate | null;

  @TypeGraphQL.Field(_type => OfficeSumAggregate, {
    nullable: true
  })
  _sum!: OfficeSumAggregate | null;

  @TypeGraphQL.Field(_type => OfficeMinAggregate, {
    nullable: true
  })
  _min!: OfficeMinAggregate | null;

  @TypeGraphQL.Field(_type => OfficeMaxAggregate, {
    nullable: true
  })
  _max!: OfficeMaxAggregate | null;
}

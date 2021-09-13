import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficeManagerAvgAggregate } from "../outputs/OfficeManagerAvgAggregate";
import { OfficeManagerCountAggregate } from "../outputs/OfficeManagerCountAggregate";
import { OfficeManagerMaxAggregate } from "../outputs/OfficeManagerMaxAggregate";
import { OfficeManagerMinAggregate } from "../outputs/OfficeManagerMinAggregate";
import { OfficeManagerSumAggregate } from "../outputs/OfficeManagerSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class OfficeManagerGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  officeId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => OfficeManagerCountAggregate, {
    nullable: true
  })
  _count!: OfficeManagerCountAggregate | null;

  @TypeGraphQL.Field(_type => OfficeManagerAvgAggregate, {
    nullable: true
  })
  _avg!: OfficeManagerAvgAggregate | null;

  @TypeGraphQL.Field(_type => OfficeManagerSumAggregate, {
    nullable: true
  })
  _sum!: OfficeManagerSumAggregate | null;

  @TypeGraphQL.Field(_type => OfficeManagerMinAggregate, {
    nullable: true
  })
  _min!: OfficeManagerMinAggregate | null;

  @TypeGraphQL.Field(_type => OfficeManagerMaxAggregate, {
    nullable: true
  })
  _max!: OfficeManagerMaxAggregate | null;
}

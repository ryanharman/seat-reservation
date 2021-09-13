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
export class AggregateOfficeManager {
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

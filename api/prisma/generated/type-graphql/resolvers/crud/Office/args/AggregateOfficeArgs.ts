import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeOrderByInput } from "../../../inputs/OfficeOrderByInput";
import { OfficeWhereInput } from "../../../inputs/OfficeWhereInput";
import { OfficeWhereUniqueInput } from "../../../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOfficeArgs {
  @TypeGraphQL.Field(_type => OfficeWhereInput, {
    nullable: true
  })
  where?: OfficeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OfficeOrderByInput], {
    nullable: true
  })
  orderBy?: OfficeOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => OfficeWhereUniqueInput, {
    nullable: true
  })
  cursor?: OfficeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

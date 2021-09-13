import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeCreateInput } from "../../../inputs/OfficeCreateInput";
import { OfficeUpdateInput } from "../../../inputs/OfficeUpdateInput";
import { OfficeWhereUniqueInput } from "../../../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOfficeArgs {
  @TypeGraphQL.Field(_type => OfficeWhereUniqueInput, {
    nullable: false
  })
  where!: OfficeWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfficeCreateInput, {
    nullable: false
  })
  create!: OfficeCreateInput;

  @TypeGraphQL.Field(_type => OfficeUpdateInput, {
    nullable: false
  })
  update!: OfficeUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeUpdateInput } from "../../../inputs/OfficeUpdateInput";
import { OfficeWhereUniqueInput } from "../../../inputs/OfficeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOfficeArgs {
  @TypeGraphQL.Field(_type => OfficeUpdateInput, {
    nullable: false
  })
  data!: OfficeUpdateInput;

  @TypeGraphQL.Field(_type => OfficeWhereUniqueInput, {
    nullable: false
  })
  where!: OfficeWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeManagerUpdateInput } from "../../../inputs/OfficeManagerUpdateInput";
import { OfficeManagerWhereUniqueInput } from "../../../inputs/OfficeManagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOfficeManagerArgs {
  @TypeGraphQL.Field(_type => OfficeManagerUpdateInput, {
    nullable: false
  })
  data!: OfficeManagerUpdateInput;

  @TypeGraphQL.Field(_type => OfficeManagerWhereUniqueInput, {
    nullable: false
  })
  where!: OfficeManagerWhereUniqueInput;
}

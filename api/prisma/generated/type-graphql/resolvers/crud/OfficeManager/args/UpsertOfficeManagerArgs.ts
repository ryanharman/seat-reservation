import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeManagerCreateInput } from "../../../inputs/OfficeManagerCreateInput";
import { OfficeManagerUpdateInput } from "../../../inputs/OfficeManagerUpdateInput";
import { OfficeManagerWhereUniqueInput } from "../../../inputs/OfficeManagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOfficeManagerArgs {
  @TypeGraphQL.Field(_type => OfficeManagerWhereUniqueInput, {
    nullable: false
  })
  where!: OfficeManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfficeManagerCreateInput, {
    nullable: false
  })
  create!: OfficeManagerCreateInput;

  @TypeGraphQL.Field(_type => OfficeManagerUpdateInput, {
    nullable: false
  })
  update!: OfficeManagerUpdateInput;
}

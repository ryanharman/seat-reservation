import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeManagerCreateInput } from "../../../inputs/OfficeManagerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOfficeManagerArgs {
  @TypeGraphQL.Field(_type => OfficeManagerCreateInput, {
    nullable: false
  })
  data!: OfficeManagerCreateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeManagerWhereUniqueInput } from "../../../inputs/OfficeManagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOfficeManagerArgs {
  @TypeGraphQL.Field(_type => OfficeManagerWhereUniqueInput, {
    nullable: false
  })
  where!: OfficeManagerWhereUniqueInput;
}

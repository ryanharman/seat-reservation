import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeManagerWhereInput } from "../../../inputs/OfficeManagerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOfficeManagerArgs {
  @TypeGraphQL.Field(_type => OfficeManagerWhereInput, {
    nullable: true
  })
  where?: OfficeManagerWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeWhereInput } from "../../../inputs/OfficeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOfficeArgs {
  @TypeGraphQL.Field(_type => OfficeWhereInput, {
    nullable: true
  })
  where?: OfficeWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeManagerUpdateManyMutationInput } from "../../../inputs/OfficeManagerUpdateManyMutationInput";
import { OfficeManagerWhereInput } from "../../../inputs/OfficeManagerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOfficeManagerArgs {
  @TypeGraphQL.Field(_type => OfficeManagerUpdateManyMutationInput, {
    nullable: false
  })
  data!: OfficeManagerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OfficeManagerWhereInput, {
    nullable: true
  })
  where?: OfficeManagerWhereInput | undefined;
}

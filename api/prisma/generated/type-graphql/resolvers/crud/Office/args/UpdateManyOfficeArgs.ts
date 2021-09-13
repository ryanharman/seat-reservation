import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeUpdateManyMutationInput } from "../../../inputs/OfficeUpdateManyMutationInput";
import { OfficeWhereInput } from "../../../inputs/OfficeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOfficeArgs {
  @TypeGraphQL.Field(_type => OfficeUpdateManyMutationInput, {
    nullable: false
  })
  data!: OfficeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OfficeWhereInput, {
    nullable: true
  })
  where?: OfficeWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfficeManagerOrderByInput } from "../../../inputs/OfficeManagerOrderByInput";
import { OfficeManagerWhereInput } from "../../../inputs/OfficeManagerWhereInput";
import { OfficeManagerWhereUniqueInput } from "../../../inputs/OfficeManagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOfficeManagerArgs {
  @TypeGraphQL.Field(_type => OfficeManagerWhereInput, {
    nullable: true
  })
  where?: OfficeManagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OfficeManagerOrderByInput], {
    nullable: true
  })
  orderBy?: OfficeManagerOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => OfficeManagerWhereUniqueInput, {
    nullable: true
  })
  cursor?: OfficeManagerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

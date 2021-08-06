import "reflect-metadata";
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { User } from "../../../entity/User";
import argon2 from "argon2";

@Resolver(User)
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "hello there nosey 😇";
  }

  @FieldResolver()
  async name(@Root() parent: User) {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Mutation(() => User)
  async register(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<User> {
    const hashedPassword = await argon2.hash(password);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save();

    return user;
  }
}

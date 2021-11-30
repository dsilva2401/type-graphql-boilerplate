import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class ToDo {

  @Field(() => ID)
  id: number;

  @Field()
  description: String;

}
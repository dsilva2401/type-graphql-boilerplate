import 'reflect-metadata';
import { Query, Resolver } from 'type-graphql';

@Resolver()
export class DemoResolver {

  @Query(() => String)
  async test () {
    return 'Hello World!'
  }

}
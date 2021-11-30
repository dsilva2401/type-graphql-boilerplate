import 'reflect-metadata';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { ToDo } from '../object-types/ToDo';

@Resolver()
export class ToDosResolver {

  private toDos: ToDo[];

  constructor () {
    this.toDos = [];
  }

  @Query(() => [ToDo])
  async getToDos () {
    return this.toDos;
  }

  @Mutation(() => ToDo)
  async registerToDo (
    @Arg('description') description: string
  ) {
    const toDo: ToDo = {
      id: Math.floor(Math.random()*100000),
      description: description
    }
    this.toDos.push(toDo)
    return toDo;
  }

}
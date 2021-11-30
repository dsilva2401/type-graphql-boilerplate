import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import { buildSchema } from 'type-graphql';
import { ToDosResolver } from './resolvers/ToDosResolver';


(async () => {

  // Initialize server
  const app = express();

  // Setup root schema
  const schema = await buildSchema({
    resolvers: [ ToDosResolver ]
  })

  // Setup Apollo
  const apolloServer = new ApolloServer({ schema });
  apolloServer.applyMiddleware({ app }); 

  // Start Server
  const SERVER_PORT = 3000;
  app.listen(SERVER_PORT, () => {
    console.log(`Server is running at port ${SERVER_PORT}`);
  })

})();
import express from 'express';
import { createSchema, createYoga } from 'graphql-yoga';

import { resolvers } from './graphql/resolvers';
import { typeDefs, graphqlContext } from '@todo-app/utils';

export const schema = createSchema({
  typeDefs,
  resolvers,
});

export function buildApp(app: ReturnType<typeof express>) {
  const graphQLServer = createYoga({
    schema,
    context: graphqlContext,
  });

  app.use('/graphql', graphQLServer);

  return app;
}

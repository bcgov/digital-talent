// Source: https://github.com/graphql/graphql-spec/issues/534#issuecomment-880195344

import { isArray } from 'class-validator';
import { GraphQLScalarType, Kind } from 'graphql';

export const GraphQLRange = new GraphQLScalarType({
  name: 'Range',
  description: 'Range custom scalar',
  serialize(value: unknown): [number, number] {
    if (!isArray(value)) throw new Error('Must be array');
    if (value.length !== 2) throw new Error('Must be [Int!, Int!]');

    return value as [number, number];
  },
  parseValue(value: unknown): [number, number] {
    if (!isArray(value)) throw new Error('Must be array');
    if (value.length !== 2) throw new Error('Must be [Int!, Int!]');

    return value as [number, number];
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.LIST) {
      if (ast.values.length !== 2) throw new Error('Range must be tuple [Int, Int]');

      return ast.values.map((field) => {
        if (field.kind !== 'IntValue') throw new Error(`Range must be Int, but received${field.kind}`);
        return Number(field.value);
      });
    }
    return null;
  },
});

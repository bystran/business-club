// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BoardMember } = initSchema(schema);

export {
  BoardMember
};
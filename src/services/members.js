import { DataStore } from '@aws-amplify/datastore';
import { BoardMember } from '../models';

const getAll = async () => {
  const models = await DataStore.query(BoardMember);
  return models;
};

export default {
  getAll,
};

import { DataStore } from 'aws-amplify';
import { BoardMember } from '../models';

const getAll = async () => {
  const result = await DataStore.query(BoardMember);
  return result;
};

export default {
  getAll,
};

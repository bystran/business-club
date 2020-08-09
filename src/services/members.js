import axios from 'axios';

const baseUrl = 'http://localhost:3001/members';

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export default {
  getAll,
};

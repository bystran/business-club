import axios from 'axios';

const baseUrl = 'https://uee5zunrv2.execute-api.eu-west-2.amazonaws.com/default/getFBEvents-dev';

const getEvents = async () => {
  try {
    const res = await axios.get(baseUrl, {
    });
    return res.data;
  } catch (e) {
    return { error: 'Something went wrong' };
  }
};

export default {
  getEvents,
};

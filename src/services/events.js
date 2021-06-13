import { API } from 'aws-amplify';

const getEvents = () => {
  const apiName = 'FacebookEventsApi';
  const path = '/events';
  const myInit = { // OPTIONAL
    headers: {}, // OPTIONAL
  };

  return API.get(apiName, path, myInit);
};

export default {
  getEvents,
};

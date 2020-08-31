// import eventsService from '../services/events';
const events = [
  { id: 0, start_time: '2020-08-31T10:01:53+0000', name: 'Some event bla bla' },
  { id: 1, start_time: '2020-08-31T10:01:53+0000', name: 'Some event bla bla' },
  { id: 2, start_time: '2020-08-31T10:01:53+0000', name: 'Some event bla bla' },
  { id: 3, start_time: '2020-08-31T10:01:53+0000', name: 'Some event bla bla' },
  { id: 4, start_time: '2020-08-31T10:01:53+0000', name: 'Some event bla bla' },
  { id: 5, start_time: '2020-08-31T10:01:53+0000', name: 'Some event bla bla' },
  { id: 6, start_time: '2020-08-31T10:01:53+0000', name: 'Some event bla bla' },
  { id: 7, start_time: '2020-08-31T10:01:53+0000', name: 'Some event bla bla' },
  { id: 8, start_time: '2020-08-31T10:01:53+0000', name: 'Some event bla bla' },
];
export const initEvents = () => async (dispatch) => {
  // try {
  //   const res = await eventsService.getEvents();
  //   dispatch({
  //     type: 'INIT-EVENTS',
  //     events: res,
  //   });
  // } catch (e) {
  //   // do something here
  // }
  dispatch({
    type: 'INIT-EVENTS',
    events,
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT-EVENTS':
      return action.events;
    default:
      return state;
  }
};

export default reducer;

import eventsService from '../services/events';

export const initEvents = () => async (dispatch) => {
  try {

    const res = await eventsService.getEvents();

    dispatch({
      type: 'INIT-EVENTS',
      events: res,
    });
  } catch (e) {
    //
  }
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

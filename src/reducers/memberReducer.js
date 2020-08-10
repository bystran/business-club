// import membersService from '../services/members';

export const initMembers = () => async (dispatch) => {
  const data = {}; // await membersService.getAll();
  dispatch({
    type: 'INIT-MEMBERS',
    data,
  });
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    //   case 'NEW-MEMBER':
    //     return addAnecdote(state, action.data.content)
    case 'INIT-MEMBERS':
      return action.data;
    default:
      return state;
  }
};

export default reducer;

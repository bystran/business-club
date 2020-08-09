export const hideMembCard = (delay) => async (dispatch) => {
  await setTimeout(() => {
    dispatch({
      type: 'HIDE-MEMB-CARD',
    });
  }, delay);
};

export const showMembCard = (member) => (dispatch) => {
  dispatch({
    type: 'SHOW-MEMB-CARD',
    member,
  });
};

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'HIDE-MEMB-CARD':
      return null;
    case 'SHOW-MEMB-CARD':
      return action.member;
    default:
      return state;
  }
};

export default reducer;

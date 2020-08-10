import { stat } from 'fs';

const initState = {
  name: '', email: '', guid: '', year: 0, degree: '', agr: false,
};

export const changeName = (name) => (dispatch) => {
  dispatch({
    type: 'CHANGE-RF-NAME',
    name,
  });
};

export const changeEmail = (email) => (dispatch) => {
  dispatch({
    type: 'CHANGE-RF-EMAIL',
    email,
  });
};

export const changeGuid = (guid) => (dispatch) => {
  dispatch({
    type: 'CHANGE-RF-GUID',
    guid,
  });
};

export const changeYear = (year) => (dispatch) => {
  dispatch({
    type: 'CHANGE-RF-YEAR',
    year,
  });
};
export const changeDegree = (degree) => (dispatch) => {
  dispatch({
    type: 'CHANGE-RF-DEGREE',
    degree,
  });
};

export const toggleAggr = () => (dispatch) => {
  dispatch({
    type: 'TOGGLE-RF-AGGR',
  });
};

const reduce = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE-RF-NAME':
      return { ...state, name: action.name };
    case 'CHANGE-RF-EMAIL':
      return { ...state, email: action.email };
    case 'CHANGE-RF-GUID':
      return { ...state, guid: action.guid };
    case 'CHANGE-RF-YEAR':
      return { ...state, year: action.year };
    case 'CHANGE-RF-DEGREE':
      return { ...state, degree: action.degree };
    case 'TOGGLE-RF-AGR':
      return { ...state, agr: !stat.agr };
    default:
      return state;
  }
};

export default reduce;

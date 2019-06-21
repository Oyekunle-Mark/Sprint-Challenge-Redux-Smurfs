import { actionTypes } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: '',
  deletingSmurf: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        error: false,
      };
    case actionTypes.GET_SMURFS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };
    case actionTypes.CREATING:
      return { ...state, addingSmurf: true };
    case actionTypes.DELETE_SMURF:
      return { ...state, smurfs: action.payload, deletingSmurf: false };
    case actionTypes.FETCHING:
      return { ...state, fetchingSmurfs: true };
    case actionTypes.DELETING:
      return { ...state, deletingSmurf: true };
    case actionTypes.UPDATE_SMURF:
      return { ...state, smurfs: action.payload, updatingSmurf: '' };
    case actionTypes.UPDATING:
      return { ...state, updatingSmurf: action.payload.toString() };
    case actionTypes.ERROR:
      return {
        ...state,
        error: true,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
      };
    default:
      return state;
  }
};

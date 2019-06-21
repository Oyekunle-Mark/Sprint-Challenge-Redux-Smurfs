import { actionTypes } from '../actions';
/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

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
      return { ...state, updatingSmurf: action.payload };
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

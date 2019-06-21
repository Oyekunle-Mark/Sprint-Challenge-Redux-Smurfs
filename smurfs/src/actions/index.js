import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const actionTypes = {
  ADD_SMURF: 'ADD_SMURF',
  GET_SMURFS: 'GET_SMURFS',
  FETCHING: 'FETCHING',
  CREATING: 'CREATING',
  ERROR: 'ERROR',
};

export const addSmurf = (name, age, height) => dispatch => {
  dispatch({
    type: actionTypes.CREATING,
  });

  axios
    .post('http://localhost:3333/smurfs', {
      name,
      age: Number(age),
      height,
    })
    .then(res =>
      dispatch({
        type: actionTypes.ADD_SMURF,
        payload: res.data,
      }),
    )
    .catch(err => {
      console.log(err.message);
      dispatch({
        type: actionTypes.ERROR,
      });
    });
};

export const getSmurfs = () => dispatch => {
  dispatch({
    type: actionTypes.FETCHING,
  });

  axios
    .get('http://localhost:3333/smurfs')
    .then(res =>
      dispatch({
        type: actionTypes.GET_SMURFS,
        payload: res.data,
      }),
    )
    .catch(err => {
      console.log(err.message);
      dispatch({
        type: actionTypes.ERROR,
      });
    });
};

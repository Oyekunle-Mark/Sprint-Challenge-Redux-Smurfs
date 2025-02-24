import axios from 'axios';

export const actionTypes = {
  ADD_SMURF: 'ADD_SMURF',
  GET_SMURFS: 'GET_SMURFS',
  FETCHING: 'FETCHING',
  CREATING: 'CREATING',
  ERROR: 'ERROR',
  DELETE_SMURF: 'DELETE_SMURF',
  DELETING: 'DELETING',
  UPDATE_SMURF: 'UPDATE_SMURF',
  UPDATING: 'UPDATING',
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

export const deleteSmurf = id => dispatch => {
  dispatch({
    type: actionTypes.DELETING,
  });

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res =>
      dispatch({
        type: actionTypes.DELETE_SMURF,
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

export const updateSmurf = (id, name, age, height) => dispatch => {
  axios
    .put(`http://localhost:3333/smurfs/${id}`, {
      name,
      age: Number(age),
      height,
    })
    .then(res =>
      dispatch({
        type: actionTypes.UPDATE_SMURF,
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

export const toggleUpdating = id =>({
  type: actionTypes.UPDATING,
  payload: id,
});

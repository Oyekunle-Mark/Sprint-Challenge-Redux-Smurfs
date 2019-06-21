import React from 'react';
import { string, number, func, bool } from 'prop-types';

const Smurf = ({ id, name, age, height, deleteSmurf, deleting }) => (
  <div>
    <h4>{name}</h4>
    <p>{age} smurf years old</p>
    <p>{height} tall</p>
    <button onClick={() => deleteSmurf(id)}>Remove from village</button>
    {deleting && <h4>Deleting...</h4>}
  </div>
);

Smurf.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  age: number.isRequired,
  height: string.isRequired,
  deleteSmurf: func.isRequired,
  deleting: bool.isRequired,
};

export default Smurf;

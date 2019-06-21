import React from 'react';
import { string, number, func, bool } from 'prop-types';

import UpdateSmurf from './UpdateSmurf';

const Smurf = ({
  id,
  name,
  age,
  height,
  deleteSmurf,
  deleting,
  currentlyUpdated,
  toggleUpdating,
}) => (
  <div>
    <div>
      <h4>{name}</h4>
      <p>{age} smurf years old</p>
      <p>{height} tall</p>
    </div>

    <button onClick={() => deleteSmurf(id)}>Remove from village</button>
    {deleting && <h4>Deleting...</h4>}

    <button onClick={() => toggleUpdating(id)}>Edit this smurf</button>

    {Number(currentlyUpdated) === id && (
      <UpdateSmurf id={id} name={name} age={age} height={height} />
    )}
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

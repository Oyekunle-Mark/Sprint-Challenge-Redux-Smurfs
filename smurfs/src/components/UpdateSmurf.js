import React, { useState } from 'react';
import { connect } from 'react-redux';

import { updateSmurf } from '../actions';

const UpdateSmurf = ({ id, name, age, height, updateSmurf }) => {
  const [nameValue, updateName] = useState(name);
  const [ageValue, updateAge] = useState(age);
  const [heightValue, updateHeight] = useState(height);

  const submitHandler = evt => {
    evt.preventDefault();

    updateSmurf(id, nameValue, ageValue, heightValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={nameValue}
        onChange={e => updateName(e.target.value)}
      />
      <input
        type="number"
        value={ageValue}
        onChange={e => updateAge(e.target.value)}
      />
      <input
        tye="text"
        value={heightValue}
        onChange={e => updateHeight(e.target.value)}
      />
      <button type="submit">Update Smurf</button>
    </form>
  );
};

export default connect(
  null,
  { updateSmurf },
)(UpdateSmurf);

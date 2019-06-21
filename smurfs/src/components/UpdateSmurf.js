import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { updateSmurf } from '../actions';

const StyledForm = styled.form`
  input {
    height: 20px;
    border: 1px solid rgb(10, 10, 10);
    border-radius: 3px;
    padding: 5px;
    width: 100px;
    margin: 10px 10px 10px 0;
  }
`;

const UpdateSmurf = ({ id, name, age, height, updateSmurf }) => {
  const [nameValue, updateName] = useState(name);
  const [ageValue, updateAge] = useState(age);
  const [heightValue, updateHeight] = useState(height);

  const submitHandler = evt => {
    evt.preventDefault();

    updateSmurf(id, nameValue, ageValue, heightValue);
  };

  return (
    <StyledForm onSubmit={submitHandler}>
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
    </StyledForm>
  );
};

export default connect(
  null,
  { updateSmurf },
)(UpdateSmurf);

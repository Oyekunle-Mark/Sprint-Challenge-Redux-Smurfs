import React, { createRef } from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addSmurf } from '../actions';

const StyledSmurf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px 0;
  max-width: 650px;
  background: rgb(128, 214, 248);
  border-radius: 5px;
  box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.2);

  h4 {
    font-family: 'News Cycle', sans-serif;
    font-size: 18px;
    margin: 10px 0;
  }

  form {
    padding: 15px;
  }

  form input {
    height: 20px;
    margin: 0 5px;
    border: 1px solid rgb(10, 10, 10);
    border-radius: 3px;
    padding: 5px;
  }

  form button {
    height: 32px;
    padding: 5px;
    border: 1px solid rgb(10, 10, 10);
    border-radius: 3px;
    background: rgb(10, 10, 10);
    color: white;
  }

  form button:hover {
    cursor: pointer;
    background: white;
    color: rgb(10, 10, 10);
  }
`;

const CreateSmurf = ({ addSmurf, creating }) => {
  const name = createRef();
  const age = createRef();
  const height = createRef();

  const handleSubmit = evt => {
    evt.preventDefault();

    const smurfName = name.current.value;
    const smurfAge = age.current.value;
    const smurfHeight = height.current.value;

    if (!smurfName.trim().length || !smurfAge.trim().length || !smurfHeight.trim().length) return;

    addSmurf(smurfName, smurfAge, smurfHeight);
  };

  return (
    <StyledSmurf>
      <h4>Add a smurf to the village</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="smurf name" ref={name} />
        <input type="number" placeholder="smurf age" ref={age} />
        <input tye="text" placeholder="smurf height" ref={height} />
        <button type="submit">Add to village</button>
      </form>
      {creating && <h4>Adding smurf...</h4>}
    </StyledSmurf>
  );
};

CreateSmurf.propTypes = {
  addSmurf: func.isRequired,
  creating: bool.isRequired,
};

const mapStateToProps = state => ({
  creating: state.addingSmurf,
});

export default connect(
  mapStateToProps,
  { addSmurf },
)(CreateSmurf);

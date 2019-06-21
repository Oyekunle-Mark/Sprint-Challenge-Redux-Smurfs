import React, { createRef } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

const CreateSmurf = ({ addSmurf }) => {
  const name = createRef();
  const age = createRef();
  const height = createRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    addSmurf(name.current.value, age.current.value, height.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="smurf name" ref={name} />
      <input type="number" placeholder="smurf age" ref={age} />
      <input tye="text" placeholder="smurf height" ref={height} />
      <button type="submit">Add to village</button>
    </form>
  );
};

const mapStateToProps = state => ({
  creating: state.addingSmurf,
});

export default connect(
  mapStateToProps,
  { addSmurf },
)(CreateSmurf);

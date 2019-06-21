import React from 'react';
import { string, number } from 'prop-types';

const Smurf = ({ name, age, height }) => (
  <div>
    <h4>{name}</h4>
    <p>{age} smurf years old</p>
    <p>{height} tall</p>
  </div>
);

Smurf.propTypes = {
  name: string.isRequired,
  age: number.isRequired,
  height: string.isRequired,
};

export default Smurf;

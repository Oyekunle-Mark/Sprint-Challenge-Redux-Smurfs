import React from 'react';

const Smurf = ({ name, age, height }) => (
  <div>
    <h4>{name}</h4>
    <p>{age} smurf years old</p>
    <p>{height}cm tall</p>
  </div>
);

export default Smurf;

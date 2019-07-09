import React from 'react';
import { string, number, func, bool } from 'prop-types';
import styled from 'styled-components';

import UpdateSmurf from './UpdateSmurf';

const StyledSmurf = styled.div`
  background: rgb(128, 214, 248);
  width: 500px;
  padding: 15px;
  margin: 10px 0;
  border-radius: 3px;
  box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.15);

  h4 {
    font-weight: bold;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  div img {
    width: 20px;
    height: 20px;
  }

  div img:hover {
    cursor: pointer;
  }

  div img:active {
    transform: scale(1.6);
    transition: 0.3s;
  }

  p {
    font-family: sans-serif;
    margin: 5px 0;
  }

  button {
    height: 32px;
    padding: 5px;
    border: 1px solid rgb(10, 10, 10);
    border-radius: 3px;
    background: rgb(10, 10, 10);
    color: white;
    margin: 10px 0;
  }

  button:hover {
    cursor: pointer;
    background: white;
    color: rgb(10, 10, 10);
  }
`;

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
  <StyledSmurf>
    <div>
      <h4>{name}</h4>{' '}
      <img
        onClick={() => deleteSmurf(id)}
        src="https://image.flaticon.com/icons/svg/458/458594.svg"
        alt="delete"
      />
    </div>

    <p>{age} smurf years old</p>
    <p>{height} tall</p>

    {deleting && <h4>Deleting...</h4>}

    <button onClick={() => toggleUpdating(id)}>Edit this smurf</button>

    {Number(currentlyUpdated) === id && (
      <UpdateSmurf id={id} name={name} age={age} height={height} />
    )}
  </StyledSmurf>
);

Smurf.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  age: number.isRequired,
  height: string.isRequired,
  deleteSmurf: func.isRequired,
  deleting: bool.isRequired,
  currentlyUpdated: string.isRequired,
  toggleUpdating: func.isRequired,
};

export default Smurf;

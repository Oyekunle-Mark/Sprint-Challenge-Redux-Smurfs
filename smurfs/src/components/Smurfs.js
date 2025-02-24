import React, { useEffect } from 'react';
import { func, arrayOf, object, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getSmurfs, deleteSmurf, toggleUpdating } from '../actions';
import Smurf from './Smurf';

const StyledSmurfs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 600px;
  margin: 10px;
`;

const Smurfs = ({
  getSmurfs,
  smurfs,
  fetching,
  deleting,
  updating,
  error,
  deleteSmurf,
  toggleUpdating,
}) => {
  useEffect(getSmurfs, []);

  const smurfsList = smurfs.map(smurf => (
    <Smurf
      key={smurf.id}
      {...smurf}
      deleteSmurf={deleteSmurf}
      deleting={deleting}
      currentlyUpdated={updating}
      toggleUpdating={toggleUpdating}
    />
  ));

  return (
    <StyledSmurfs>
      <h4>Smurfs</h4>
      {fetching && <h4>Loading...</h4>}
      {error && <h4>Error</h4>}
      {smurfsList}
    </StyledSmurfs>
  );
};

Smurfs.propTypes = {
  getSmurfs: func.isRequired,
  deleteSmurf: func.isRequired,
  smurfs: arrayOf(object).isRequired,
  fetching: bool.isRequired,
  deleting: bool.isRequired,
  toggleUpdating: func.isRequired,
  updating: string.isRequired,
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.fetchingSmurfs,
  deleting: state.deletingSmurf,
  updating: state.updatingSmurf,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurf, toggleUpdating },
)(Smurfs);

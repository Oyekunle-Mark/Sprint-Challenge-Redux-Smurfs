import React, { useEffect } from 'react';
import { func, arrayOf, object, bool } from 'prop-types';
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf } from '../actions';
import Smurf from './Smurf';

const Smurfs = ({
  getSmurfs,
  smurfs,
  fetching,
  deleting,
  error,
  deleteSmurf,
}) => {
  useEffect(getSmurfs, []);

  const smurfsList = smurfs.map(smurf => (
    <Smurf
      key={smurf.id}
      {...smurf}
      deleteSmurf={deleteSmurf}
      deleting={deleting}
    />
  ));

  return (
    <div>
      {fetching && <h4>Loading...</h4>}
      {error && <h4>Error</h4>}
      {smurfsList}
    </div>
  );
};

Smurfs.propTypes = {
  getSmurfs: func.isRequired,
  deleteSmurf: func.isRequired,
  smurfs: arrayOf(object).isRequired,
  fetching: bool.isRequired,
  deleting: bool.isRequired,
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.fetchingSmurfs,
  deleting: state.deletingSmurf,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurf },
)(Smurfs);

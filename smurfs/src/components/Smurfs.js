import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';
import Smurf from './Smurf';

const Smurfs = ({ getSmurfs, smurfs, fetching, error }) => {
  useEffect(getSmurfs, []);

  const smurfsList = smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} />);

  return <div>{smurfsList}</div>;
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.fetchingSmurfs,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { getSmurfs },
)(Smurfs);

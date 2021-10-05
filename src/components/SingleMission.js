import React from 'react';
import PropTypes from 'prop-types';

const SingleMission = ({ name }) => (
  <h2>{`The mission is ${name}`}</h2>
);

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SingleMission;

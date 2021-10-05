import React from 'react';
import PropTypes from 'prop-types';
import './rocket.css';

const SingleRocket = ({
  name,
  description,
  image,
  reserve,
  id,
  rocket,
}) => {
  let status = 'Reserve Rocket';
  if (rocket.reserved) {
    if (rocket.reserved === 'true') {
      status = 'Cancel Reservation';
      // return status;
    }
  }
  return (
    <div className="each-rocket">
      <div className="rocket-img">
        <img src={image} alt={name} className="img-size" />
      </div>
      <div className="rocket-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="submit" className="rocket-reserve-btn" onClick={() => reserve(id)}>{status}</button>
      </div>
    </div>
  );
};

SingleRocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserve: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  rocket: PropTypes.object.isRequired,
};

export default SingleRocket;

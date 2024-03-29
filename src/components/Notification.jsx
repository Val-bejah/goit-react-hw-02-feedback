import React from 'react';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

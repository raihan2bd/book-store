import React from 'react';
import PropTypes from 'prop-types';

import classes from './Card.module.css';

const Card = (props) => {
  const { extraclass, children } = props;

  return (
    <div
      className={extraclass ? `${classes.card} ${extraclass}` : classes.card}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  extraclass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  extraclass: '',
};

export default Card;

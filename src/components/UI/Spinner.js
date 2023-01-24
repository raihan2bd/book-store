import React from 'react';
import PropTypes from 'prop-types';

import classes from './Spinner.module.css';

const Spinner = ({ extraClass }) => (
  <div className={classes.spinner_container}>
    <span className={`${classes.spinner} ${extraClass || ''}`} />
  </div>
);

Spinner.propTypes = {
  extraClass: PropTypes.string,
};

Spinner.defaultProps = {
  extraClass: '',
};

export default Spinner;

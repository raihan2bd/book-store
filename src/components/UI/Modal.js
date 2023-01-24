import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import classes from './Modal.module.css';

const portalElements = document.getElementById('overlays');

const Modal = ({ onClick, children }) => (
  <>
    {ReactDOM.createPortal(
      <>
        <div
          onClick={onClick}
          role="presentation"
          className={classes.backdrop}
        />
        <div className={classes.modal}>
          <div className={classes.content}>{children}</div>
        </div>
      </>,
      portalElements,
    )}
  </>
);

Modal.propTypes = {
  onClick: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

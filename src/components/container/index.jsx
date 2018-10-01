import React from 'react';
import PropTypes from 'prop-types';
import cb from 'classnames';

import './style';

const Container = ({ className, children, style }) => (
  <div className={cb('container', className)} style={style}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export default Container;

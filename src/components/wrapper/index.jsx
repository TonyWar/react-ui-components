import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style';

const Wrapper = ({ fullscreen, className, style, children }) => (
  <section
    className={cn('wrapper', className, {
      'wrapper--fullscreen': fullscreen
    })}
    style = {style}
  >
    {children}
  </section>
);

Wrapper.propTypes = {
  fullscreen: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Wrapper;

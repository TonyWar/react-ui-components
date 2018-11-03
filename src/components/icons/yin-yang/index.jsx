import React from 'react';
import PropTypes from 'prop-types';

import './style';

export default class YinYang extends React.Component {
  static defaultProps = {
    r: 1500
  };
  render() {
    const { r } = this.props;
    return (
      <svg className="yin-yang-icon" viewBox={[-r, -r, 2 * r, 2 * r].join(' ')}>
        <path />
        <circle />
        <circle />
      </svg>
    );
  }
}

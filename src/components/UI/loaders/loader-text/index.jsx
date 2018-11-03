import React from 'react';

import './style';

export default class TextLoader extends React.Component {
  render() {
    return (
      <div className="loader">
        <div className="loader__inner">
          <span className="loader__text">loading</span>
        </div>
      </div>
    );
  }
}

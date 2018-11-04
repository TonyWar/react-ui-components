import React from 'react';
import cn from 'classnames'

import './style'

export default class HamburgerBtn extends React.Component {
  state = {
    isActive: false
  }

  onClick = e => {
    this.setState({isActive: !this.state.isActive})
  }
  
  render() {
    return (
      <div className={cn("menu__item--hamburger", {'active' : this.state.isActive})} onClick={this.onClick}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    );
  }
}

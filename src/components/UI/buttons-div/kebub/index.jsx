import React from 'react';
import cn from 'classnames'

import './style'

export default class KebubBtn extends React.Component {
  state = {
    isActive: false
  }

  onClick = e => {
    this.setState({isActive: !this.state.isActive})
  }
  
  render() {
    return (
      <div className={cn("menu__item--kebab", {'active' : this.state.isActive})} onClick={this.onClick}>
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    );
  }
}

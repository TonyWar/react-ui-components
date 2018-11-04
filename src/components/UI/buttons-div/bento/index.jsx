import React from 'react';
import cn from 'classnames'

import './style'

export default class BentoBtn extends React.Component {
  state = {
    isActive: false
  }

  onClick = e => {
    this.setState({isActive: !this.state.isActive})
  }
  
  render() {
    return (
      <div className={cn("menu__item--bento", {'active' : this.state.isActive})} onClick={this.onClick}>
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    );
  }
}

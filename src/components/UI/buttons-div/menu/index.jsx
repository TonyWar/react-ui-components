import React from 'react'

import './style'
import HamburgerBtn from '../hamburger';

export default class MenuBtn extends React.Component {
  render () {
    return (
      <div className="menu__wrapper">
        <HamburgerBtn/>
      </div>
    )
  }
}
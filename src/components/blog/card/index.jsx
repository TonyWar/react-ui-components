import React from 'react'

import './style'

export default class BlogCard extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div>Tags</div>
          <h1>Header</h1>
        </header>
        <div>Text</div>
        <button>continue reading</button>
      </div>
    )
  }
}
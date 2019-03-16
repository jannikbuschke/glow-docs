import React, { Component } from 'react'
import SidebarContents from '../SidebarContents'

export default class ResponsiveSidebar extends Component {
  render() {
    const { headerHeight, root } = this.props
    return (
      <div
        style={{
          position: 'fixed',
          top: headerHeight + 30,
          left: 10,
          right: '80%',
          bottom: 0,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 10,
            top: 0,
            bottom: 0,
          }}
        >
          <SidebarContents root={root} />
        </div>
      </div>
    )
  }
}

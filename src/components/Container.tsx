import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    const { sidebarDocked, headerHeight, onPostPage } = this.props

    return <div>{this.props.children}</div>
  }
}

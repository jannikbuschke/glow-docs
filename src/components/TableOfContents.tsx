import React, { Component } from 'react'
import Anchor from 'antd/lib/anchor'
import 'antd/lib/anchor/style/css'

const { Link } = Anchor

const filterAnchorDetails = anchors => {
  let last_depth = 0
  anchors = [].slice.call(anchors).map(anchor => {
    let depth = parseInt(anchor.parentElement.nodeName[1])
    if (last_depth !== 0 && depth > last_depth) depth = last_depth + 1
    last_depth = depth
    return {
      href: '#' + anchor.parentElement.id,
      title: anchor.parentElement.innerText,
      depth: depth,
      children: [],
    }
  })
  constructTree(anchors)
  return anchors
}

const constructTree = list => {
  let deleteNode = []
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i].depth + 1 === list[j].depth) {
        list[i].children.push(list[j])
        deleteNode.push(j)
      } else if (list[i].depth >= list[j].depth) break
    }
  }
  deleteNode.sort((a, b) => b - a).forEach(index => list.splice(index, 1))
}

export default class TableOfContents extends Component {
  public state = {
    anchors: [],
  }

  componentDidMount() {
    const anchors = document.getElementsByClassName('post-toc-anchor')
    this.setState({
      anchors: filterAnchorDetails(anchors),
    })
  }

  render() {
    const { anchors } = this.state
    const { offsetTop, affix } = this.props
    const loop = data =>
      data.map(item => {
        if (item.children.length > 0) {
          return (
            <Link href={item.href} title={item.title} key={item.href}>
              {loop(item.children)}
            </Link>
          )
        }
        return <Link href={item.href} title={item.title} key={item.href} />
      })
    return (
      <Anchor
        offsetTop={offsetTop}
        affix={affix}
        style={{ margin: '50px 50px 0px 0px' }}
      >
        {loop(anchors)}
        {/* {(anchors.length > 1 && loop(anchors)) ||
         (anchors.length === 1 && loop(anchors[0].children))} */}
      </Anchor>
    )
  }
}

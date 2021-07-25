import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Glow app framework
      </p>
      <h2>A webapp framework build with ASP.NET Core and react.js</h2>
      <br />
      <Button.Group size="large">
        <Button
          size="large"
          icon={<TwitterOutlined />}
          href="https://twitter.com/jannikbuschke"
          target="_blank"
        >
          Twitter
        </Button>
        <Button
          size="large"
          icon={<GithubOutlined />}
          href="https://github.com/jannikbuschke/glow"
          target="_blank"
        >
          Github
        </Button>

        <Button type="primary" size="large">
          <Link to="/docs/template/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage

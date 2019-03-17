import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Header } from './Header'
import ResponsiveSidebar from './ResponsiveSidebar'
import Container from './Container'
import ResponsiveAnchor from './ResponsiveAnchor'
import ResponsiveTopBar from './ResponsiveTopBar'
import { pathPrefix } from '../../gatsby-config'
import { Layout, Breadcrumb } from 'antd'
import { SidebarContents } from './SidebarContents'
const { Sider, Content } = Layout

export default function({ children, sidebarRoot }: any) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        const allPosts = data.allMarkdownRemark.edges.map(
          (edge: any) => edge.node.fields.slug
        )
        let onPostPage
        if (typeof window !== 'undefined') {
          const path = window.location.pathname.replace(
            pathPrefix.slice(0, -1),
            ''
          )
          if (
            allPosts.indexOf(path) >= 0 ||
            allPosts.indexOf(path.slice(0, -1)) >= 0
          ) {
            onPostPage = true
          } else {
            onPostPage = false
          }
        }

        return (
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'auto 1fr',
              height: '100vh',
            }}
          >
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                height: '100%',
              }}
            >
              <SidebarContents root={sidebarRoot} />
              <Layout
                style={{
                  padding: '0px 24px 24px',
                  backgroundColor: '#f0f2f5',
                }}
              >
                <Breadcrumb style={{ margin: '16px' }}>
                  <Breadcrumb.Item>
                    <Link to="" style={{ padding: 4 }}>
                      Home
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link to="" style={{ padding: 4 }}>
                      List
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link to="" style={{ padding: 4 }}>
                      App
                    </Link>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                  }}
                >
                  {children}
                </Content>
              </Layout>
            </div>
            <Layout>
              <Sider
                width={200}
                style={{ background: '#fff', height: '100%' }}
              />
            </Layout>
          </div>
        )
      }}
    />
  )
}

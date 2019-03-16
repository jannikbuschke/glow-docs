import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import 'katex/dist/katex.min.css'

export default function Template({ data }: any) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, id } = markdownRemark

  return (
    <Layout sidebarRoot={frontmatter.root}>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h5>{frontmatter.date}</h5>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        root
      }
    }
  }
`

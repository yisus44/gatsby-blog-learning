import * as React from "react"
import {graphql,  Link} from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"
const BlogLink = styled(Link)`text-decoration:none`
const BlogTitle = styled.h3(`margin-bottom:20px;color:blue`)

export default({data}) => (
  <Layout>
  <div>
    
    <h4>{data?.allMarkdownRemark?.totalCount} posts here</h4>
    {data.allMarkdownRemark.edges.map(({node})=>(<div key={node.id}>
      <BlogLink to={node.fields.slug}>
      </BlogLink>
      <BlogTitle>{node.frontmatter.title} - {node.frontmatter.data}</BlogTitle>
      <br></br>
      <p>{node.excerpt}</p>
      </div>))}
  </div>
  
  </Layout>
)


export const query = graphql`
query  {
  allMarkdownRemark(sort:{fields:[frontmatter___date],order:DESC}) {
    totalCount
    edges {
      node {
        id
        html
        excerpt
        frontmatter {
          date
          description
          title
        }
        fields{
          slug
        }
      }
    }
  }
}
`
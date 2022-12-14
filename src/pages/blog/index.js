import * as React from 'react'
import Layout from '../../components/layouts'
import Seo from '../../components/seo'
import { useStaticQuery,graphql,Link } from 'gatsby'

const BlogPage = ({data})=>{
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                  <article key={node.id}>
                    <h2>
                      <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.name}</Link>
                    </h2>
                    <p>Posted: {node.frontmatter.datePublished}</p>
                  </article>
                ))
            }
        </Layout>
    )
}
export const query = graphql`
query {
    allMdx {
      totalCount
      nodes {
        frontmatter {
          name
          author
          datePublished
          slug
        }
        id
      }
    }
  }`
export const Head = ()=><Seo title="My Blog Posts"/>
export default BlogPage
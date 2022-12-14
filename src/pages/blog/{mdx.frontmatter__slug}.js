import * as React from 'react'
import Layout from '../../components/layouts'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
const BlogPost = ({data,children})=>{
    return (
        <Layout pageTitle={data.mdx.frontmatter.name}>
            <p>{data.mdx.frontmatter.datePublished}</p>
            {children}
        </Layout>
    )
}
export const Head = ()=><Seo title="Super Cool Blog Posts"></Seo>

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      name
      datePublished(formatString: "MMMM D, YYYY")
    }
  }
}
`

export default BlogPost
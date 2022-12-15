import * as React from 'react'
import Layout from '../../components/layouts'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
const BlogPost = ({data,children})=>{
  const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.name}>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}></GatsbyImage>
            <p>Photo Credit:{" "}
              <a href={data.mdx.frontmatter.hero_image_credit_link}>{data.mdx.frontmatter.hero_image_credit_text}</a>
            </p>
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
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image{
        childImageSharp{
          gatsbyImageData
        }
      }
    }
  }
}
`

export default BlogPost
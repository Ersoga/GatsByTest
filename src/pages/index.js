import * as React from 'react'
import {Link} from "gatsby"
import Layout from '../components/layouts'
import {StaticImage} from 'gatsby-plugin-image'
import Seo from '../components/seo'
const IndexPage = ()=>
{
    return (
        <Layout pageTitle="Home">
            <p>Something</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="https://img1.baidu.com/it/u=1526096303,4228783601&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500"
            />
        </Layout>
    )
}
export const Head = ()=><Seo title="Home Page"/>
export default IndexPage
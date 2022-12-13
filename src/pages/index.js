import * as React from 'react'
import {Link} from "gatsby"
import Layout from '../components/layouts'
import {StaticImage} from 'gatsby-plugin-image'
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
export const Head = ()=>(
    <>
    <title>主页</title>
    <meta name='description' content='Your description'></meta>
    </>

)
export default IndexPage
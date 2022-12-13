import * as React from 'react'
import {Link} from "gatsby"
import Layout from '../components/layouts'
const IndexPage = ()=>
{
    return (
        <Layout pageTitle="Home">
            <p>Something</p>
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
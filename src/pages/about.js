import * as React from 'react'
import {Link} from "gatsby"
import Layout from '../components/layouts'
const AboutPage = ()=>{
    return (
        <Layout pageTitle="About">
            <p>My cool posts will go in here</p>
        </Layout>
    )
}

export const Head = ()=><title>About Me</title>
export default AboutPage
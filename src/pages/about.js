import * as React from 'react'
import {Link} from "gatsby"
const AboutPage = ()=>{
    return (
        <main>
            <h1>About me</h1>
            <Link to='/'>Back to Home</Link>
        </main>
    )
}

export const Head = ()=><title>About Me</title>
export default AboutPage
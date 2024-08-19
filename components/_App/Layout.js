import React, { useEffect, useState } from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Layout = ({ children }) => {

    // const router = useRouter();

    // const [path , setPath] = useState(router.pathname)
    // useEffect(() => {
    //     let value =Cookies.get("loggedin");
    //     console.log(Cookies.get("loggedin"), path ,"sssss" , router)
    //     if(value != true){
    //         router.push("/");
    //     }

    // },path);

    return(
        <>
            <Head>
                <title>Nabeela - React Next Digital Marketing Company Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Nabeela - React Next Digital Marketing Company Template" />
                <meta name="og:title" property="og:title" content="Nabeela - React Next Digital Marketing Company Template"></meta>
                <meta name="twitter:card" content="Nabeela - React Next Digital Marketing Company Template"></meta>
                <link rel="canonical" href="https://NabeelaShaheen.netlify.app/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;
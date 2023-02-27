import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import React from "react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Countries Lookup</title>
                <meta name="description"
                      content="The fastest and easiest way to make sure that you've got the basic details of any country down, whether it be their currency, flag or capital city."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Component {...pageProps} />
        </>
    )
}

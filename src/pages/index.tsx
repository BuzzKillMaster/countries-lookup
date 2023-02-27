import Head from 'next/head'
import React from "react";
import AppContainer from "@/components/AppContainer";
import {GetServerSideProps} from "next";
import Country from "@/types/Country";

export default function Home(props: {
    data: Country[]
}) {
    return (
        <>
            <Head>
                <title>Countries Lookup</title>
                <meta name="description" content="The fastest and easiest way to make sure that you've got the basic details of any country down, whether it be their currency, flag or capital city."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>
            <AppContainer data={props.data}/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<{ data: Country[] }> = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all")
    const data = await res.json()

    // TODO: Translate data into an actual list of countries.
    const countries: Country[] = data.map((item: any) => {
        return {
            name: item.name.common,
            flag: item.flags.svg,
            population: item.population,
            continent: item.continents[0],
            region: typeof item.subregion === "undefined" ? "N/A" : item.subregion,
            capital: Array.isArray(item.capital) ? item.capital[0] : "N/A",
            tld: Array.isArray(item.tld) ? item.tld[0] : ["N/A"],
            currencies: typeof item.currencies === "object" ? Object.keys(item.currencies) : ["N/A"],
            languages: typeof item.currencies === "object" ? Object.values(item.languages) : ["N/A"]
        }
    })

    return {
        props: {
            data: countries
        },
    }
}
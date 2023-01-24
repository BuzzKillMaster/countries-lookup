import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import CountryInformationItem from "@/components/CountryInformationItem";
import Country from "@/types/Country";

export default function CountryInformationBox(props: {
    country: Country
    showCountryOverlay: (country: Country) => void
}) {
    const [populationString, setPopulationString] = useState("")

    useEffect(() => {
        setPopulationString(props.country.population.toLocaleString())
    }, [])

    return (
        <motion.div onClick={() => props.showCountryOverlay(props.country)} whileHover={{ y: -5}} className={"rounded shadow bg-gray-50 cursor-pointer"}>
            <img className={"rounded-t"} src={props.country.flag} alt=""/>
            <div className={"px-4 pt-6 pb-4"}>
                <h2 className={"text-xl font-bold mb-4"}>{props.country.name}</h2>

                <CountryInformationItem title={"Population"} content={"~" + populationString}/>
                <CountryInformationItem title={"Continent"} content={props.country.continent}/>
                <CountryInformationItem title={"Capital"} content={props.country.capital}/>
            </div>
        </motion.div>
    )
}
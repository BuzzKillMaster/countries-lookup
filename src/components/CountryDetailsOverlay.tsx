import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {IoMdArrowBack} from "react-icons/io";
import CountryInformationItem from "@/components/CountryInformationItem";
import Country from "@/types/Country";

export default function CountryDetailsOverlay(props: {
    country: Country
    hideDetailsOverlay: () => void
}) {
    const [populationString, setPopulationString] = useState("")

    useEffect(() => {
        setPopulationString(props.country.population.toLocaleString())
    }, [])

    return (
        <motion.div initial={{ top: "100%" }} animate={{ top: 0 }} exit={{ top: "100%" }} transition={{type: "tween"}} className={"z-50 fixed inset-0 overflow-y-scroll overscroll-contain min-h-screen bg-gray-200"}>
            <div className={"container mx-auto py-12 px-6"}>
                <div onClick={props.hideDetailsOverlay}   className={"flex items-center gap-4 w-max py-3 px-4 bg-gray-50 rounded shadow cursor-pointer"}>
                    <IoMdArrowBack/>
                    <p>Go back</p>
                </div>
                
                <div className={"grid lg:grid-cols-2 items-center gap-12 py-12"}>
                    <img className={"rounded shadow"} src= {props.country.flag} alt=""/>

                    <div className={"flex flex-col justify-center"}>
                        <h2 className={"text-3xl font-bold mb-6"}>{props.country.name}</h2>

                        <div className={"grid md:grid-cols-2 bg-gray-50 shadow rounded p-8"}>
                            <div>
                                <CountryInformationItem title={"Population"} content={"~" + populationString}/>
                                <CountryInformationItem title={"Continent"} content={props.country.continent}/>
                                <CountryInformationItem title={"Region"} content={props.country.region}/>
                                <CountryInformationItem title={"Capital"} content={props.country.capital}/>
                            </div>

                            <div>
                                <CountryInformationItem title={"Top Level Domain"} content={props.country.tld}/>
                                <CountryInformationItem title={"Currencies"} content={props.country.currencies.join(" - ")}/>
                                <CountryInformationItem title={"Languages"} content={props.country.languages.join(", ")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
import React, {useEffect, useState} from "react";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import FilterDropdown from "@/components/FilterDropdown";
import CountryInformationBox from "@/components/CountryInformationBox";
import CountryDetailsOverlay from "@/components/CountryDetailsOverlay";
import {motion, AnimatePresence, LayoutGroup} from "framer-motion";
import Country from "@/types/Country";

export default function AppContainer(props: {
    countries: Country[]
}) {
    const [countries, setCountries] = useState(props.countries)
    const [showCountryOverlay, setShowCountryOverlay] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState<Country>(props.countries[0])

    const [searchFilter, setSearchFilter] = useState("")
    const [continentFilter, setContinentFilter] = useState("")

    useEffect(() => {
        setCountries(props.countries.filter((country) => country.continent.toLowerCase().includes(continentFilter.toLowerCase())).filter((country) => country.name.toLowerCase().includes(searchFilter.toLowerCase())))
    }, [searchFilter, continentFilter, props.countries])

    const displayCountryOverlay = (country: Country) => {
        setSelectedCountry(country)
        setShowCountryOverlay(true)
    }

    return (
        <>
            <Header/>
            <div className={"min-h-screen w-screen bg-gray-200 px-6 py-12"}>
                <AnimatePresence>
                    {showCountryOverlay && <CountryDetailsOverlay country={selectedCountry}
                                                                  hideDetailsOverlay={() => setShowCountryOverlay(false)}/>}
                </AnimatePresence>

                <div className={"container mx-auto"}>
                    <div className={"z-20 relative py-12 md:flex items-center justify-between"}>
                        <SearchInput handleChange={setSearchFilter} value={searchFilter}/>
                        <FilterDropdown currentFilter={continentFilter} onChange={setContinentFilter}/>
                    </div>

                    <LayoutGroup>
                        <AnimatePresence>
                            <div className={"sm:columns-2 lg:columns-4 gap-6"}>
                                {countries.map(country => (
                                    <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} key={country.name} className={"break-inside-avoid-column mb-6"}>
                                        <CountryInformationBox country={country}
                                                               showCountryOverlay={displayCountryOverlay}/>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatePresence>
                    </LayoutGroup>
                </div>
            </div>
        </>
    )
}


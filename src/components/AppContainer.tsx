import React, {useEffect, useState} from "react";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import FilterDropdown from "@/components/FilterDropdown";
import CountryInformationBox from "@/components/CountryInformationBox";
import CountryDetailsOverlay from "@/components/CountryDetailsOverlay";
import {motion, AnimatePresence, LayoutGroup} from "framer-motion";
import Country from "@/types/Country";
import SearchFilter from "@/types/SearchFilter";

export default function AppContainer(props: {
    countries: Country[]
}) {
    const [displayedCountries, setDisplayedCountries] = useState(props.countries)
    const [showOverlay, setShowOverlay] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

    const [filter, setFilter] = useState<SearchFilter>({
        text: "",
        continent: ""
    })

    useEffect(() => {
        setDisplayedCountries(props.countries.filter((country) => {
            return country.continent.match(RegExp(filter.continent, "i"))
        }).filter((country) => {
            return country.name.match(RegExp(filter.text, "i"))
        }))
    }, [filter, props.countries])

    const displayOverlay = (country: Country) => {
        setSelectedCountry(country)
        setShowOverlay(true)
    }

    const updateFilterText = (value: string) => {
        setFilter({
            ...filter,
            text: value
        })
    }

    const updateFilterContinent = (value: string) => {
        setFilter({
            ...filter,
            continent: value
        })
    }

    return (
        <>
            <Header/>
            <div className={"min-h-screen w-screen bg-gray-200 px-6 py-12"}>
                <AnimatePresence>
                    {(selectedCountry !== null && showOverlay) && <CountryDetailsOverlay country={selectedCountry} hideDetailsOverlay={() => setShowOverlay(false)}/>}
                </AnimatePresence>

                <div className={"container mx-auto"}>
                    <div className={"z-20 relative py-12 md:flex items-center justify-between"}>
                        <SearchInput handleChange={updateFilterText} value={filter.text}/>
                        <FilterDropdown currentFilter={filter.continent} onChange={updateFilterContinent}/>
                    </div>

                    <LayoutGroup>
                        <AnimatePresence>
                            <div className={"sm:columns-2 lg:columns-4 gap-6"}>
                                {displayedCountries.map(country => (
                                    <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} key={country.name} className={"break-inside-avoid-column mb-6"}>
                                        <CountryInformationBox country={country}
                                                               showCountryOverlay={displayOverlay}/>
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


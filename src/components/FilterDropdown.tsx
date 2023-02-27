import React, {useState} from "react";
import {IoMdArrowDropdown} from "react-icons/io";
import {AnimatePresence, motion} from "framer-motion";
import DropdownMenuItem from "@/components/DropdownMenuItem";

const continents = [
    "Any",
    "Africa",
    "Antarctic",
    "Asia",
    "Europe",
    "North America",
    "Oceania",
    "South America",
]

export default function FilterDropdown(props: {
    value: string
    handleChange: (value: string) => void
}) {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div onClick={() => setShowDropdown(!showDropdown)} className={"p-4 bg-gray-50 shadow rounded cursor-pointer relative"}>
            <div className={"h-full w-full absolute inset-0"}></div>
            <div className={"flex items-center gap-4"}>
                <p className={"flex-grow"}>{props.value === "" ? "Filter by continent" : props.value}</p>
                <IoMdArrowDropdown className={showDropdown ? "rotate-180" : ""}/>
            </div>

            <AnimatePresence>
                {showDropdown &&
                    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={"bg-gray-50 rounded shadow min-w-full w-max top-full mt-2 p-4 right-0 absolute"}>
                        {continents.map(value => (
                            <DropdownMenuItem key={value} onClick={props.handleChange} text={value}/>
                        ))}
                    </motion.ul>
                }
            </AnimatePresence>
        </div>
    )
}
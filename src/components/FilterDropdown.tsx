import React, {useState} from "react";
import {IoMdArrowDropdown} from "react-icons/io";
import {AnimatePresence, motion} from "framer-motion";

export default function FilterDropdown(props: {
    value: string
    handleChange: (value: string) => void
}) {
    const [showOptions, setShowOptions] = useState(false)

    return (
        <div onClick={() => setShowOptions(!showOptions)} className={"p-4 bg-gray-50 shadow rounded cursor-pointer relative"}>
            <div className={"h-full w-full absolute inset-0"}></div>
            <div className={"flex items-center gap-4"}>
                <p className={"flex-grow"}>{props.value === "" ? "Filter by continent" : props.value}</p>
                <IoMdArrowDropdown className={showOptions ? "rotate-180" : ""}/>
            </div>

            <AnimatePresence>
                {showOptions &&
                    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={"bg-gray-50 rounded shadow min-w-full w-max top-full mt-2 p-4 right-0 absolute"}>
                        <DropdownMenuItem onClick={props.handleChange} text={"Any"}/>
                        <DropdownMenuItem onClick={props.handleChange}  text={"Africa"}/>
                        <DropdownMenuItem onClick={props.handleChange}  text={"Antarctic"}/>
                        <DropdownMenuItem onClick={props.handleChange}  text={"Asia"}/>
                        <DropdownMenuItem onClick={props.handleChange}  text={"Europe"}/>
                        <DropdownMenuItem onClick={props.handleChange}  text={"North America"}/>
                        <DropdownMenuItem onClick={props.handleChange} text={"Oceania"}/>
                        <DropdownMenuItem onClick={props.handleChange}  text={"South America"}/>
                    </motion.ul>
                }
            </AnimatePresence>
        </div>
    )
}

function DropdownMenuItem(props: {
    text: string
    onClick: (value: string) => void
}) {
    return (
        <li onClick={() => props.onClick(props.text !== "Any" ? props.text : "")} className={"px-4 py-4 rounded hover:bg-gray-100"}>{props.text}</li>
    )
}
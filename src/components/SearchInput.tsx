import {IoMdSearch} from "react-icons/io";

export default function SearchInput(props: {
    value: string
    handleChange: (value: string) => void
}) {
    return (
        <div className={"mb-4 md:mb-0 md:max-w-md w-full flex items-center bg-gray-50 shadow rounded"}>
            <IoMdSearch className={"text-2xl mx-4 shrink-0"}/>
            <input value={props.value} onChange={(event) => props.handleChange(event.target.value)} type="text" className={"bg-transparent outline-none p-4 pl-0 w-full"} placeholder={"Filter by name..."}/>
        </div>
    )
}
import {IoMdSearch} from "react-icons/io";

export default function SearchInput(props: {
    value: string
    handleChange: (value: string) => void
}) {
    return (
        <div className={"mb-4 md:mb-0 md:max-w-md w-full flex items-center bg-gray-50 shadow rounded p-4"}>
            <IoMdSearch className={"text-2xl mr-4 shrink-0"}/>
            <input value={props.value} onChange={(event) => props.handleChange(event.target.value)} type="text" className={"bg-transparent outline-none"} placeholder={"Filter by name..."}/>
        </div>
    )
}
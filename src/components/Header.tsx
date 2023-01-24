import FilterDropdown from "@/components/FilterDropdown";
import SearchInput from "@/components/SearchInput";

export default function Header() {
    return (
        <header className={"w-screen shadow bg-gray-50 py-8 px-6"}>
            <div className={"container mx-auto"}>
                <h1 className={"text-2xl font-bold"}>Countries Lookup</h1>
            </div>
        </header>
    )
}
import React from "react";

export default function DropdownMenuItem(props: {
    text: string
    handleClick: (value: string) => void
}) {
    return (
        <li onClick={() => props.handleClick(props.text !== "Any" ? props.text : "")} className={"px-4 py-4 rounded hover:bg-gray-100"}>{props.text}</li>
    )
}
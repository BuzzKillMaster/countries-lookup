import React from "react";

export default function CountryInformationItem(props: {
    title: string
    content: string
}) {
    return (
        <div className={"flex gap-2 py-2"}>
            <h3 className={"font-semibold"}>{props.title}:</h3>
            <p>{props.content}</p>
        </div>
    )
}
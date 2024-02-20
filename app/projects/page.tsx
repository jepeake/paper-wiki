import { allLinks } from "@/.contentlayer/generated";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Links",
    description: "",
};

const Page = () => {
    return (
        <>
            {allLinks.map((link) => (
                // Using an <a> tag instead of Link component for external URLs
                <a className={"pb-4 flex"} href={link.url} key={link.slug} target="_blank" rel="noopener noreferrer">
                    <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis hover:underline">{link.title}</h1>
                </a>
            ))}
        </>
    );
};

export default Page;

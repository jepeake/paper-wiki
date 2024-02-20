import { allLinks } from "@/.contentlayer/generated";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Links",
    description: "",
};

const isExternalLink = (url) => /^https?:\/\//.test(url);

const Page = () => {
    return (
        <>
            {allLinks.map((link) => {
                if (isExternalLink(link.url)) {
                    // Render an <a> tag for external URLs
                    return (
                        <a
                            className="pb-4 flex hover:underline"
                            href={link.url}
                            key={link.slug}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis">{link.title}</h1>
                        </a>
                    );
                } else {
                    // Render a Next.js Link component for internal navigation
                    return (
                        <Link href={link.url} key={link.slug}>
                            <a className="pb-4 flex hover:underline">
                                <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis">{link.title}</h1>
                            </a>
                        </Link>
                    );
                }
            })}
        </>
    );
};

export default Page;

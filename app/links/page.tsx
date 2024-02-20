import { allLinks } from "@/.contentlayer/generated";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import links from './links.json';

export const metadata: Metadata = {
    title: "Links",
    description: "",
};

const isExternalLink = (url) => /^https?:\/\//.test(url);

const Page = () => {
    return (
      <div>
        {links.filter(link => isExternalLink(link.url)).map((link) => (
          <a
            className="pb-4 flex hover:underline"
            href={link.url}
            key={link.slug}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis">{link.title}</h1>
            <span className="ml-4 font-light text-gray group-hover/item:text-white">{format(new Date(link.date), "dd/MM/yy")}</span>
          </a>
        ))}
      </div>
    );
  };

export default Page;

import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { format } from "date-fns";
import papers from './papers.json';


import React from "react";

const PostLink = ({ post }) => (
    <Link
        className={"justify-between pb-4 group/item flex hover:text-black transition duration-[250ms] ease-out hover:duration-[50ms]"}
        href={post.url}
    >
        <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis">{post.title}</h1>
        <span className="ml-4 font-light text-gray group-hover/item:text-black">{format(new Date(post.date), "dd/MM/yy")}</span>
    </Link>
);

const isExternalLink = (url) => /^https?:\/\//.test(url);

const Home = () => {
    return (
      <div>
        {papers.filter(paper => isExternalLink(paper.url)).map((paper) => (
          <a
            className="pb-4 flex hover:underline"
            href={paper.url}
            key={paper.slug}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis">{paper.title}</h1>
            <span className="ml-4 font-light text-gray group-hover/item:text-white">{format(new Date(paper.date), "dd/MM/yy")}</span>
          </a>
        ))}
      </div>
    );
  };

export default Home;

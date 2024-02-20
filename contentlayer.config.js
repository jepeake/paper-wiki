import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import readingTime from 'reading-time'

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `posts/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        date: { type: "string", required: true },
        draft: { type: "boolean", required: true },
        url: { type: "string", required: false }
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (post) => {
                const parts = post._raw.flattenedPath.split("/");
                return parts[parts.length - 1];
            },
        },
        url: {
            type: "string",
            resolve: (post) => {
                return post.url || `/${post.slug}`;;
            },
        },
        readingTime: {
            type: 'json',
            resolve: (post) => readingTime(post.body.raw),
        },
    },
}));

export const About = defineDocumentType(() => ({
    name: "About",
    filePathPattern: "about.mdx",
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        description: { type: "string", required: true },
    },
}));

export const Links = defineDocumentType(() => ({
    name: "Links",
    filePathPattern: `links/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (link) => {
                const parts = link._raw.flattenedPath.split("/");
                return parts[parts.length - 1];
            },
        },
        url: {
            type: "string",
            resolve: (link) => {
                const parts = link._raw.flattenedPath.split("/");
                const slug = parts[parts.length - 1];
                return `/links/${slug}`;
            },
        },
    },
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Post, About, Links],
    mdx: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [[rehypeKatex, { output: "mathml" }]],
    },
});

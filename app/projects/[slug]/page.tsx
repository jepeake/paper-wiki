import { allLinks } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxRenderer } from "@/app/components/Mdx";

import type { Metadata } from "next";
import CONFIG from "@/blog.config";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const link = allLinks.find((post) => post.slug === params.slug);

  if (!link) {
    return;
  }
  const { title, slug } = link;

  return {
    title,
    openGraph: {
      title,
      type: "article",
      url: `${CONFIG.baseURL}/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
    },
  };
}

export default function Post({ params }) {
  const link = allLinks.find((post) => post.slug === params.slug);

  if (!link) {
    notFound();
  }

  return (
    <section>
      <h1 className="text-2xl font-bold">{link.title}</h1>
      <article className="mt-10 prose prose-invert">
        <MdxRenderer source={link.body.code} />
      </article>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getBlogBySlug, getBlogSlugs } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";
import { BRIEF_LABEL, BRIEF_PATH, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  const meta = createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
  if (!post.image) return meta;
  const images = [
    {
      url: `${SITE_URL}${post.image}`,
      width: 1200,
      height: 630,
      alt: post.imageAlt || post.title,
    },
  ];
  return {
    ...meta,
    openGraph: {
      ...(typeof meta.openGraph === "object" ? meta.openGraph : {}),
      type: "article",
      images,
    },
    twitter: {
      ...(typeof meta.twitter === "object" ? meta.twitter : {}),
      images: [`${SITE_URL}${post.image}`],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    image: post.image ? `${SITE_URL}${post.image}` : undefined,
    author: { "@type": "Organization", name: "Pakistan Expert Reports" },
    publisher: {
      "@type": "Organization",
      name: "Pakistan Expert Reports",
      url: SITE_URL,
    },
    mainEntityOfPage: url,
    url,
  };

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} extra={articleLd} />
      {post.image ? (
        <div className="relative h-[min(26rem,52vw)] w-full border-b border-[#CCD1C5]">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <article className="px-4 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#801F37]">
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <span className="mx-2 text-[#3F433E]">/</span>
            <time dateTime={post.updated || post.date}>
              {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="mx-2 text-[#3F433E]">·</span>
            <span className="normal-case tracking-normal text-[#3F433E]">{post.readingTime}</span>
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#191D18] sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#3F433E]">{post.description}</p>
          <div className="blog-prose mt-10" dangerouslySetInnerHTML={{ __html: html }} />
          <p className="mt-12 border-t border-[#CCD1C5] pt-8 text-sm">
            <Link href="/blog" className="font-semibold text-[#801F37] hover:underline">
              Back to the blog
            </Link>
            <span className="mx-3 text-[#CCD1C5]">/</span>
            <Link href={BRIEF_PATH} className="font-semibold text-[#801F37] hover:underline">
              {BRIEF_LABEL}
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}

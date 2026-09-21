import Image from "next/image";
import Link from "next/link";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Blog | Pakistan Expert Reports",
  description:
    "Articles for UK immigration solicitors on Pakistan country evidence, CPIN updates, and instructing a Pakistan country expert.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Pakistan Expert Reports Blog",
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      image: post.image ? `${SITE_URL}${post.image}` : undefined,
    })),
  };

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} extra={blogLd} />
      <section className="border-b border-[#CCD1C5] px-4 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#801F37]">Blog</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-[#191D18]">
            Pakistan country evidence for solicitors
          </h1>
          <p className="mt-4 leading-relaxed text-[#3F433E]">
            Notes on CPIN updates, country evidence, and when a Pakistan expert report may be relevant.
          </p>
          {posts.length === 0 ? (
            <p className="mt-8 text-[#3F433E]">Articles will appear here shortly.</p>
          ) : (
            <ul className="mt-10 space-y-8">
              {posts.map((post) => (
                <li key={post.slug} className="overflow-hidden border border-[#CCD1C5] bg-white">
                  {post.image ? (
                    <Link href={`/blog/${post.slug}`} className="relative block h-56 w-full">
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 48rem"
                        className="object-cover"
                      />
                    </Link>
                  ) : null}
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#801F37]">
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
                    <h2 className="mt-3 font-display text-2xl text-[#191D18]">
                      <Link href={`/blog/${post.slug}`} className="hover:text-[#801F37]">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 leading-relaxed text-[#3F433E]">{post.description}</p>
                    <p className="mt-5">
                      <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-[#801F37] hover:underline">
                        Read article
                      </Link>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

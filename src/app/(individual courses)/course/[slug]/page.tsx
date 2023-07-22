import React from "react";
import { groq } from "next-sanity";
import Image from "next/image";
import urlFor, { sanityClient } from "../../../../../sanity";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { Metadata } from "next/types";

type Props = {
  params: {
    slug: string;
  };
};

// Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const query = groq`
  *[_type == "course" && slug.current == $slug][0]{
    title,
    description
  }
  `;
  const metadata = await sanityClient.fetch(query, { slug });

  return {
    title: metadata.title + " | Animal Haven",
    description: metadata.description,
  };
}

// revalidate after one day
export const revalidate = 86400;
// In development mode, please uncomment the following line else it will throw an error
export const dynamic = "force-dynamic";
export async function generateStaticParams() {
  const query = groq`*[_type == 'course']{
    slug
}`;

  const slugs: Post[] = await sanityClient.fetch(query);

  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Course({ params: { slug } }: Props) {
  const query = groq`
   *[_type=="course" && slug.current == $slug][0]{

author->{
name,
  image,
  bio
},
        categories[]->{
          title,
        },
title,
description,
slug,
mainImage,
body,
_id,
_createdAt,
_rev,
_type,
_updatedAt
    }
  `;
  const post: Post = await sanityClient.fetch(query, { slug });

  return (
    <>
      <article className="px-10 max-w-[1000px] mt-10 mx-auto w-full pb-28">
        <section className="space-y-2 border border-secondary rounded-lg text-slate-200 dark:text-zinc-800">
          <div className="relative z-[-10] min-h-56 flex flex-col md:flex-row justify-between">
            <div className="absolute z-[-10] top-0 w-full h-full opacity-10 blur-sm p-10">
              <Image
                className="object-cover object-center mx-auto"
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
              />
            </div>
            <section className="p-5 text-slate-200 dark:text-zinc-800 rounded-md dark:bg-slate-300 bg-zinc-600 w-full">
              <div className="flex flex-col md:flex-row justify-between gap-x-5 gap-y-5">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold">{post.title}</h1>

                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {/* {post.author.image && (
                    <Image
                      className="rounded-full"
                      src={urlFor(post.author.image).url()}
                      alt={post.author.name}
                      height={40}
                      width={40}
                    />
                  )} */}
                  <div className="w-64">
                    <h3 className="text-lg font-bold">{post.author.name}</h3>
                    {/* Author Bio */}
                    <PortableText
                      value={post.author.bio}
                      components={RichTextComponents}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-end mt-auto space-x-2">
                  {post.categories.map((category, i) => (
                    <p
                      className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                      key={i}
                    >
                      {category.title}
                    </p>
                  ))}
                </div>
                <p className="text-white mt-1">{post.description}</p>
              </div>
            </section>
          </div>
        </section>

        <article className="my-10">
          <PortableText value={post.body} components={RichTextComponents} />
        </article>

        <hr className="border-secondary border" />
      </article>
    </>
  );
}

export default Course;

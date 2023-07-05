"use client";
import Image from "next/image";
import React from "react";
import urlFor from "../../sanity";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

const BlogPostComponent = ({ posts }: Props) => {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-24">
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col border border-secondary p-2 rounded-lg cursor-pointer group">
              <div className="relative w-full z-[-10] h-52 drop-shadow-xl ">
                <Image
                  className="object-contain   lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5  flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>

                    <p className="text-sm">
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-3 items-center">
                    {post.categories.map((category, i) => (
                      <div
                        key={i}
                        className="dark:bg-zinc-800 bg-slate-100 text-zinc-800 text-[10px] text-center dark:text-white px-3 py-1 rounded-full font-semibold"
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="line-clamp-1 underline text-lg font-bold">
                  {post.title}
                </p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </section>
  );
};

export default BlogPostComponent;

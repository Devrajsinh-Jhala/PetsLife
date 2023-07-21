import { groq } from "next-sanity";
import React from "react";
import { sanityClient } from "../../../../sanity";
import BlogPostComponent from "@/components/BlogPostComponent";
import CoursePostComponent from "@/components/CoursePostComponent";

type Props = {};
export const metadata = {
  title: "Blog | Animal Haven",
};
const allPostsQuery = groq`
*[_type == 'course']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const Blogs = async (props: Props) => {
  const allPosts = await sanityClient.fetch(allPostsQuery);
  return (
    <section className="my-10 px-10">
      <div className="my-5">
        <p className="text-4xl font-bold">Perfectly Curated Courses for you</p>
        <p className="text-sm max-w-[750px] mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis rem
          expedita voluptatibus hic ea enim. Quae fugit perferendis fuga
          perspiciatis tempore aspernatur dolorem nam ipsa neque sit corporis ab
          inventore porro dignissimos dolore
        </p>
      </div>
      <CoursePostComponent posts={allPosts} />
    </section>
  );
};

export default Blogs;

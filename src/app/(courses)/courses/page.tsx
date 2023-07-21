import { groq } from "next-sanity";
import React from "react";
import { sanityClient } from "../../../../sanity";
import CoursePostComponent from "@/components/CoursePostComponent";
import { currentUser } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

type Props = {};
export const metadata = {
  title: "Courses | Animal Haven",
  description:
    "Explore plethora of courses specifically designed to make you well equipped with the knowledge that will make your journey with your pet much smoother and happier.",
};
const allPostsQuery = groq`
*[_type == 'course']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const Blogs = async (props: Props) => {
  const data = await currentUser();
  const userEmail = data?.emailAddresses[0].emailAddress; // jhaladevrajsinh11@gmail.com

  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });

  // console.log(user);
  if (!user) {
    redirect("/");
  }

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

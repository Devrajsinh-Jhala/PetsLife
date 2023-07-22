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
        <p className="sm:text-4xl text-3xl font-bold">
          Premium Courses to cater all your needs
        </p>
        <p className="text-sm max-w-[750px] mt-2">
          Our passion for pets drives us to provide top-notch training and care
          courses for pet owners like you! Whether you&apos;re a first-time pet
          parent or a seasoned enthusiast, our courses are designed to empower
          you with the knowledge and skills needed to foster a strong and loving
          bond with your furry companions.
        </p>
      </div>
      <CoursePostComponent posts={allPosts} />
    </section>
  );
};

export default Blogs;

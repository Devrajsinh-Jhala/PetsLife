import Image from "next/image";
import Link from "next/link";
import urlFor from "../../sanity";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-cover"
            src={urlFor(value).url()}
            alt={"Blog Post Image"}
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-2 mt-2 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className=" ml-10 space-y-2 mt-2 list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl py-5 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl py-5 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-5 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-5 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="italic text-secondary py-5 ml-10 font-bold">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <span className="my-2 text-base">
        {children}
        <br />
      </span>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          target="_blank"
          href={value.href}
          rel={rel}
          className="underline decoration-secondary hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};

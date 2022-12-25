// Import core
// Import third parts
import Link from "next/link";
import Image from "next/image";
// Import customs
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative flex w-full h-auto my-8 rounded-xl overflow-hidden">
          <Image
            className="object-cover object-center"
            src={urlFor(value).url()}
            alt="Project Image"
            width={1400}
            height={900}
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-6xl font-bold mt-20 mb-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-5xl font-bold mt-20 mb-6">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-4xl font-bold mt-20 mb-6">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-3xl font-bold mt-10 mb-6">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-2xl font-bold mt-10 mb-4">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-xl font-bold mt-10 mb-4">{children}</h6>
    ),
    p: ({ children }: any) => <p className="font-medium">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link href={value.href} rel={rel} className="">
          {children}
        </Link>
      );
    },
  },
};

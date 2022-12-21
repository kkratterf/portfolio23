// Import core
// Import third parts
import Link from "next/link";
import Image from "next/image";
// Import customs
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
  type: {
    image: ({ value }: any) => {
      return (
        <div className="">
          <Image
            className=""
            src={urlFor(value).url()}
            alt="Project Image"
            fill
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
    h1: ({ children }: any) => <h1 className="text-5xl mb-10">{children}</h1>,
    h2: ({ children }: any) => <h2 className="">{children}</h2>,
    h3: ({ children }: any) => <h3 className="">{children}</h3>,
    h4: ({ children }: any) => <h4 className="">{children}</h4>,
    h5: ({ children }: any) => <h5 className="">{children}</h5>,
    h6: ({ children }: any) => <h6 className="">{children}</h6>,
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

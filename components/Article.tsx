"use client"

// Import core
import Image from "next/image";
import Link from 'next/link';
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
// Import customs
import { RichTextComponents } from "@/components/RichTextComponents";
import urlFor from '@/lib/urlFor';

function Article(props: any) {
  const project = props.project

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="relative pt-[40vh] sm:pt-[60vh] z-40"
    >
      <article>
        <section className="space-y-6 sm:space-y-10">
          <div className="space-y-3 sm:space-y-4">
            <h6 className="text-base sm:text-xl font-medium">{project.category.title}</h6>
            <h1 className="font-bold text-4xl sm:text-6xl">{project.title}</h1>
          </div>
          <div className="relative w-full h-116 md:h-128 bg-grey-light dark:bg-pop-dark rounded-xl overflow-hidden">
            <Image
              src={urlFor(project.mainImage).url()}
              className="object-center object-cover rounded-xl"
              alt="Federico Kratter Thaler"
              fill
            />
          </div>
        </section>

        <section className="mt-20 sm:mt-40">
          <PortableText value={project.body} components={RichTextComponents} />
        </section>
        <section>
          <h4 className="text-2xl sm:text-4xl mt-20">
            <Link
              href="/project-archive"
              className="underline underline-offset-8 cursor-pointer sm:opacity-70 sm:hover:opacity-100 transition duration-500"
            >
              Back to Archive
            </Link>
          </h4>
        </section>
      </article>
    </motion.section>
  );
}

export default Article
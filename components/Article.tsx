"use client"

// Import core
// Import third parts
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
// Import customs
import { RichTextComponents } from "../components/RichTextComponents";

function Article(props: any) {
  const project = props.project

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="relative mt-[40vh] sm:mt-[60vh] z-40"
    >
      <article>
        <section className="space-y-6 sm:space-y-10">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex space-x-2">
              <h6 className="text-base sm:text-xl font-medium">
                {project.category.title}
              </h6>
            </div>
            <h1 className="font-bold text-4xl sm:text-6xl">{project.title}</h1>
          </div>
          <div className="relative w-full h-116 md:h-128 bg-grey dark:bg-pop rounded-xl overflow-hidden">
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
      </article>
    </motion.section>
  );
}

export default Article
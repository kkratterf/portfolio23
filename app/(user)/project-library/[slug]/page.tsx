// Import core
// Import third parts
import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
// Import customs
import { Project } from "../../../../typings";
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 6000;

export async function generateStaticParams() {
  const query = groq`
  *[_type=='project']
  {
    slug
  }
  `;

  const slugs: Project[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function ProjectPage({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='project' && slug.current == $slug][0]
    {
        ...,
        client->,
        category->,
        team->
    }
  `;

  const project: Project = await client.fetch(query, { slug });

  return (
      <article className="relative mt-[40vh] sm:mt-[60vh] z-40">
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
  );
}

export default ProjectPage;

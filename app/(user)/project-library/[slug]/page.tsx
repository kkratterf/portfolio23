// Import core
// Import third parts
import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react"
// Import customs
import { Project } from "../../../../typings";
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 600;

export async function generateStaticParams() {
  const query = groq`
  *[_type=='project']
  {
    slug
  }
  `;

  const slugs: Project[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map(slug => ({
    slug,
  }));
}

async function ProjectPage({params: {slug}}: Props) {
  const query = groq`
    *[_type=='project' && slug.current == $slug][0]
    {
        ...,
        client->,
        categories[]->,
        team[]->
    }
  `

  const project: Project = await client.fetch(query, { slug });

  return (
    <article className="mt-[40vh] sm:mt-[60vh] relative z-40">
      <section className="space-y-6 sm:space-y-10">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex space-x-2">
            {project.categories.map((category) => (
              <h6
                className="text-base sm:text-xl font-medium"
                key={category._id}
              >
                {category.title}
              </h6>
            ))}
          </div>
          <h1 className="font-bold text-4xl sm:text-6xl">{project.title}</h1>
        </div>
        <div className="relative w-full h-116 md:h-128 rounded-xl overflow-hidden">
          <Image
            src={urlFor(project.mainImage).url()}
            className="object-center object-cover"
            alt="Federico Kratter Thaler"
            fill
          />
        </div>
        <div className="space-y-1">
          <div className="flex">
            <p className="font-bold">
              <span className="uppercase font-medium text-sm">Client // </span>
              {project.client.name}
            </p>
          </div>
          <div className="flex">
            <p className="font-bold">
              <span className="uppercase font-medium text-sm">Date // </span>
              {project.client.name}
            </p>
          </div>
          <div className="flex">
            <p className="font-bold">
              <span className="uppercase font-medium text-sm">Team // </span>
              {project.client.name}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 sm:mt-40">
        <PortableText value={project.body} components={RichTextComponents} />
      </section>
    </article>
  );
}

export default ProjectPage;

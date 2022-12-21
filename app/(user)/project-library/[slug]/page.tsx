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

export const revalidate = 3600;

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
        author->,
        categories[]->
    }
  `

  const project: Project = await client.fetch(query, { slug });

  return (
    <article className="mt-[60vh] relative z-40">
      <section className="space-y-10">
        <div className="space-y-4">
          <div className="flex space-x-2">
            {project.categories.map((category) => (
              <p className="text-xl font-medium" key={category._id}>
                {category.title}
              </p>
            ))}
          </div>
          <h3 className="font-bold text-5xl">{project.title}</h3>
        </div>
        <div className="w-full h-56 md:h-128 rounded-xl overflow-hidden">
          <Image
            src={urlFor(project.mainImage).url()}
            className="layer object-cover self-center mx-auto rounded-xl"
            alt="Federico Kratter Thaler"
            width={1400}
            height={900}
          />
        </div>
        <ul className="space-y-2">
          <li className="contactitem">( L ) Linkedin</li>
          <li className="contactitem">( B ) Behance</li>
          <li className="contactitem">( I ) Instagram</li>
          <li className="contactitem">( E ) kkratterf@gmail.com</li>
        </ul>
      </section>

      <section className="mt-40">
        <PortableText value={project.body} components={RichTextComponents} />
      </section>
    </article>
  );
}

export default ProjectPage;

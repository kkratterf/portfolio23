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
    <article className="mt-[60vh] px-10">
      <section>
        <div>
          <div>
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(project.mainImage).url()}
              alt={project.author.name}
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>{project.title}</h1>
          <p>{project._updatedAt}</p>
        </div>
        <div>
          <h2>{project.description}</h2>
          <div>
            {project.categories.map((category) => (
              <p key={category._id}>{category.title}</p>
            ))}
          </div>
        </div>
      </section>
      <section>
        <PortableText value={project.body} components={RichTextComponents} />
      </section>
    </article>
  );
}

export default ProjectPage;

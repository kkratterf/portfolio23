// Import core
import { groq } from 'next-sanity';
// Import customs
import { Project } from "@/typings";
import Article from "@/components/Article";
import { client } from '@/lib/sanity.client';

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
    <>
      <Article project={project} />
    </>
  );
}

export default ProjectPage;

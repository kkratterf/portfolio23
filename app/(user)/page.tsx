// Import core
import React from "react";
// Import third parts
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client"
import PreviewSuspense from "../../components/PreviewSuspense";
// Import customs
import Hero from "../../components/Hero";
import FeaturedPreviewProjectList from "../../components/FeaturedPreviewProjectList";
import FeaturedProjectList from "../../components/FeaturedProjectList";

export const revalidate = 3600;

const query = groq`
  *[_type=='project'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`


export default async function HomePage() {
  if (previewData()){
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center font-mono text-lg animate-pulse text-brand">
              All good things take time...
            </p>
          </div>
        }
      >
        
        <FeaturedPreviewProjectList query={query} />
      </PreviewSuspense>
    );
  } 

  const projects = await client.fetch(query)
  return (
    <>
      <Hero/>
      <FeaturedProjectList projects={projects}/>
    </>
  );
}

// Import core
import React from "react";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
// Import customs
import PreviewProjectList from "@/components/PreviewProjectList";
import ProjectList from "@/components/ProjectList";
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/PreviewSuspense';

export const revalidate = 6000;

const query = groq`
  *[_type=='project'] {
    ...,
    category->
  } | order(order asc)
`;

export default async function LibraryPage() {
  if (previewData()) {
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
        <PreviewProjectList query={query} />
      </PreviewSuspense>
    );
  }

  const projects = await client.fetch(query);
  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
}

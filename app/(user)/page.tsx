// Import core
import React from 'react';
import { useState } from 'react';
// Import third parts
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
// Import customs
import FeaturedProjectList from '../../components/FeaturedProjectList';
import ProvaButton from '../../components/Desktop/ProvaButton';

export const revalidate = 6000;

const query = groq`
  *[_type=='project' && featured == true && visible == true ] {
    ...,
    category->,
  } | order(order asc)
`;

const query_experience = groq`
  *[_type=='experience'] {
    ...,
  } | order(_createdAt desc)
`;

const query_education = groq`
  *[_type=='education'] {
    ...,
  } | order(_createdAt desc)
`;

const query_certification = groq`
  *[_type=='certification'] {
    ...,
  } | order(_createdAt desc)
`;

const query_awards = groq`
  *[_type=='award'] {
    ...,
  } | order(_createdAt desc)
`;

export default async function HomePage() {
  const projects = await client.fetch(query);

  

  return (
    <div className="space-y-40 sm:space-y-96 overflow-hidden overscroll-none">
      <ProvaButton />
      <FeaturedProjectList projects={projects} />
    </div>
  );
}

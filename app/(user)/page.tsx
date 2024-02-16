// Import core
import React from "react";
// Import third parts
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client"
// Import customs
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import FeaturedProjectList from '@/components/FeaturedProjectList';

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

const query_volunteering = groq`
  *[_type=='volunteering'] {
    ...,
  } | order(_createdAt desc)
`;

const query_awards = groq`
  *[_type=='award'] {
    ...,
  } | order(_createdAt desc)
`;


export default async function HomePage() {

  const projects = await client.fetch(query)
  const experiences = await client.fetch(query_experience);
  const educations = await client.fetch(query_education);
  const volunteering = await client.fetch(query_volunteering);
  const awards = await client.fetch(query_awards);
  
  return (
    <div className="space-y-40 sm:space-y-96 overflow-hidden overscroll-none">
      <Hero />
      <FeaturedProjectList projects={projects} />
      <About />
      <Experience
        experiences={experiences}
        educations={educations}
        volunteering={volunteering}
        awards={awards}
      />
      <Contact />
    </div>
  );
}

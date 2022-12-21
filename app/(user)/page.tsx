// Import core
import React from "react";
// Import third parts
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client"
// Import customs
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Contact from "../../components/Contact";
import FeaturedProjectList from "../../components/FeaturedProjectList";

export const revalidate = 3600;

const query = groq`
  *[_type=='project' && featured == true && visible == true ] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;



export default async function HomePage() {

  const projects = await client.fetch(query)
  
  return (
    <div className="space-y-96">
      <Hero />
      <FeaturedProjectList projects={projects} />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

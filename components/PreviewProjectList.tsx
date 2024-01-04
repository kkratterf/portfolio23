"use client"

// Import core
// Import customs
import { usePreview } from "@/lib/sanity.preview";
import ProjectList from "@/components/ProjectList";

type Props = {
    query: string;
}

export default function PreviewProjectList({ query }: Props) {
    const projects = usePreview(null, query);
    return <ProjectList projects={projects} />
}
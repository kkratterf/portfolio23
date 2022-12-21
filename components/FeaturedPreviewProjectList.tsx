"use client"

import { usePreview } from "../lib/sanity.preview";
import FeaturedProjectList from "./FeaturedProjectList";

type Props = {
    query: string;
}

export default function FeaturedPreviewProjectList({ query }: Props) {
    const projects = usePreview(null, query);
    return <FeaturedProjectList projects={projects} />
}
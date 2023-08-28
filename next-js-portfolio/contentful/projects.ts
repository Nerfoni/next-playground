import { Entry, Asset } from "contentful";
import { client } from "./contentfulClient";
import { TypeProjectSkeleton } from "./types";

type ProjectEntry = Entry<TypeProjectSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>;

export interface Project {
  title: string;
  description: string;
  images?: (Asset<"WITHOUT_UNRESOLVABLE_LINKS", string> | undefined)[] | undefined;
  githubLink?: string;
  websiteLink?: string;
}

export function parseContentfulProjects(projectEntries: ProjectEntry[]): Project[] | null {
  if (!projectEntries) {
    return null;
  }

  return projectEntries.map((projectEntry) => ({
    title: projectEntry.fields.title || "",
    description: projectEntry.fields.description || "",
    images: projectEntry.fields.images || [],
    githubLink: projectEntry.fields.githubLink || "",
    websiteLink: projectEntry.fields.websiteLink || "",
  }));
}

export async function getProjects(): Promise<Project[] | null> {
  const projects = await client.withoutUnresolvableLinks.getEntries<TypeProjectSkeleton>({
    content_type: "project",
  });

  return parseContentfulProjects(projects.items);
}

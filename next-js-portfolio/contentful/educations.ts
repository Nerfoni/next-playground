import { Entry } from "contentful";
import { client } from "./contentfulClient";
import { TypeEducationSkeleton } from "./types";

type EducationEntry = Entry<TypeEducationSkeleton, undefined, string>;

export interface Education {
  school: string;
  from: Date;
  to?: Date;
  degree?: string;
  description?: string;
}

export function parseContentfulEmployments(educationEntries: EducationEntry[]): Education[] | null {
  if (!educationEntries) {
    return null;
  }

  return educationEntries
    .map((educationEntry) => ({
      school: educationEntry.fields.school || "",
      from: new Date(educationEntry.fields.from),
      to: educationEntry.fields.to ? new Date(educationEntry.fields.to) : undefined,
      degree: educationEntry.fields.degree || "",
      description: educationEntry.fields.description || "",
    }))
    .sort((a, b) => b.from.getTime() - a.from.getTime());
}

export async function getEducations(): Promise<Education[] | null> {
  const educations = await client.getEntries<TypeEducationSkeleton>({
    content_type: "education",
  });

  return parseContentfulEmployments(educations.items);
}

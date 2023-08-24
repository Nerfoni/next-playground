import { Entry } from "contentful";
import { client } from "./contentfulClient";
import { TypeEmploymentSkeleton, TypeSkillSkeleton } from "./types";

type EmploymentEntry = Entry<TypeEmploymentSkeleton, undefined, string>;

export interface Skill {
  title: string;
  favourite: boolean;
}

export interface Employment {
  employer: string;
  from: Date;
  to?: Date;
  position: string;
  description?: string;
  skills?: Skill[];
}

export function parseContentfulEmployments(employmentEntries: EmploymentEntry[]): Employment[] | null {
  if (!employmentEntries) {
    return null;
  }

  return employmentEntries
    .map((employmentEntry) => ({
      employer: employmentEntry.fields.employer || "",
      from: new Date(employmentEntry.fields.from),
      to: employmentEntry.fields.to ? new Date(employmentEntry.fields.to) : undefined,
      position: employmentEntry.fields.position || "",
      description: employmentEntry.fields.description || "",
      skills: employmentEntry.fields.skills
        ? employmentEntry.fields.skills.map((skill) => ({
            title: skill.fields.title || "",
            favourite: skill.fields.favourite || false,
          }))
        : [],
    }))
    .sort((a, b) => b.from.getTime() - a.from.getTime());
}

export async function getEmployments(): Promise<Employment[] | null> {
  const employments = await client.getEntries<TypeEmploymentSkeleton>({
    content_type: "employment",
  });

  return parseContentfulEmployments(employments.items);
}

import { Project } from "@/contentful/projects";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Github, Globe2 } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full rounded-lg border shadow">
      {/*<div
        className="h-96 rounded-t-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.images![0]?.fields.file?.url})`,
        }}
      />*/}

      <div className="p-5">
        <h5 className="mb-6 text-2xl font-bold tracking-tight">{project.title}</h5>
        <p className="mb-6">{project.description}</p>
        {project.githubLink && (
          <Link href={project.githubLink} className={buttonVariants({ variant: "link" })} target="_blank">
            <Github className="mr-2 h-4 w-4" />
            Github
          </Link>
        )}
        {project.websiteLink && (
          <Link href={project.websiteLink} className={buttonVariants({ variant: "ghost" })} target="_blank">
            <Globe2 className="mr-2 h-4 w-4" />
            Github
          </Link>
        )}
      </div>
    </div>
  );
}

import { Project } from "@/contentful/projects";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Github, Globe2 } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full rounded-lg border shadow">
      <img className="rounded-t-lg" src={project.images![0]?.fields.file?.url} alt="" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{project.title}</h5>
        <p className="mb-3">{project.description}</p>
        {project.githubLink && (
          <Link href={project.githubLink} className={buttonVariants({ variant: "ghost" })} target="_blank">
            <Github className="mr-2 h-4 w-4" /> Github
          </Link>
        )}
        {project.websiteLink && (
          <Link href={project.websiteLink} className={buttonVariants({ variant: "ghost" })} target="_blank">
            <Globe2 className="mr-2 h-4 w-4" /> Github
          </Link>
        )}
      </div>
    </div>
  );
}

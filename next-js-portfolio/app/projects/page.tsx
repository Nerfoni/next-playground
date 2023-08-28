import ProjectCard from "@/components/project-card/ProjectCard";
import { getProjects } from "@/contentful/projects";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center px-10 py-20">
      <section className="projects w-full max-w-7xl">
        <h1 className="w-full pb-20 text-left text-5xl font-extrabold uppercase md:text-8xl">Projects</h1>
        {projects?.map((project, index) => <ProjectCard project={project} key={`${project.title}-${index}`} />)}
      </section>
    </main>
  );
}

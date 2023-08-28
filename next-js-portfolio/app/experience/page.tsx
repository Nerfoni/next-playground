import { Timeline } from "@/components/timeline/Timeline";
import { getEmployments } from "@/contentful/employments";
import { getEducations } from "@/contentful/educations";

export default async function Experience() {
  const employments = await getEmployments();
  const educations = await getEducations();

  return (
    <main className="flex min-h-screen flex-col items-center px-10 py-20">
      <section className="experience w-full max-w-7xl">
        <h1 className="w-full pb-20 text-left text-5xl font-extrabold uppercase md:text-8xl">Experience</h1>
        <h2 className="text-center text-3xl font-extralight uppercase dark:font-thin md:text-4xl">Work history</h2>
        <Timeline>
          {employments?.map((employment, index) => (
            <Timeline.Item
              key={`${employment.employer}-${index}`}
              from={employment.from}
              to={employment.to}
              title={employment.employer}
              subtitle={employment.position}
              description={employment.description}
              skills={employment.skills}
              side={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </Timeline>

        <h2 className="text-center text-3xl font-extralight uppercase dark:font-thin md:text-4xl">Education</h2>
        <Timeline>
          {educations?.map((education, index) => (
            <Timeline.Item
              key={`${education.school}-${index}`}
              from={education.from}
              to={education.to}
              title={education.school}
              subtitle={education.degree}
              description={education.description}
              side={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </Timeline>
      </section>
    </main>
  );
}

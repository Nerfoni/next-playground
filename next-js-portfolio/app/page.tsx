import { Timeline } from "@/components/timeline/Timeline";
import { getEmployments } from "@/contentful/employments";
import { getEducations } from "@/contentful/educations";

export default async function Home() {
  const employments = await getEmployments();
  const educations = await getEducations();

  return (
    <main className="flex min-h-screen flex-col items-center p-10 px-10 sm:py-24">
      <section className="work-history max-w-7xl">
        <h2 className="text-center text-5xl font-bold font-thin uppercase">Work history</h2>
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
      </section>

      <section className="education w-full max-w-7xl">
        <h2 className="text-center text-5xl font-bold font-thin uppercase">Education</h2>
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

import { Progress } from "@/components/ui/progress";
import { Timeline } from "@/components/timeline/Timeline";
import { getEmployments } from "@/contentful/employments";
import ColorModeButton from "@/components/ColorMode";
import { getEducations } from "@/contentful/educations";

export default async function Home() {
  const employments = await getEmployments();
  const educations = await getEducations();

  return (
    <main className="flex min-h-screen flex-col items-center p-10 px-10 sm:py-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pb-4 text-6xl font-bold">Sampo Riikkilä</h1>
        <p className="text-xl">Work History</p>
        <ColorModeButton />
      </div>

      <section className="work-history max-w-7xl">
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
        <Progress value={75} />
      </section>

      <section className="education w-full max-w-7xl">
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

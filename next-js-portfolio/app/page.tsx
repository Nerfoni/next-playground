import { Progress } from "@/components/ui/progress";
import { EmploymentTimeline } from "@/components/employment-timeline/EmploymentTimeline";
import { getEmployments } from "@/contentful/employments";
import ColorModeButton from "@/components/ColorMode";

export default async function Home() {
  const employments = await getEmployments();

  return (
    <main className="flex min-h-screen flex-col items-center p-10 sm:p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pb-4 text-6xl font-bold">Sampo Riikkilä</h1>
        <p className="text-xl">Work History</p>
        <ColorModeButton />
      </div>

      <section className="work-history max-w-7xl">
        <EmploymentTimeline>
          {employments &&
            employments.map((employment, index) => (
              <EmploymentTimeline.Item
                key={employment.employer}
                employment={employment}
                side={index % 2 === 0 ? "left" : "right"}
              />
            ))}
        </EmploymentTimeline>
        <Progress value={75} />
      </section>

      <section className="education max-w-7xl"></section>
    </main>
  );
}

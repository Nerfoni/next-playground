import EmploymentTimeline from "@/components/employment-timeline/EmploymentTimeline";
import { Button } from "@/components/ui/button";
import { getEmployments } from "@/contentful/employments";

export default async function Home() {
  const employments = await getEmployments();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Next.js Portfolio</h1>
        <p className="text-xl">This is a Next.js portfolio</p>
      </div>

      <EmploymentTimeline>
        {employments &&
          employments.map((employment) => (
            <EmploymentTimeline.Item key={employment.employer} employment={employment} side="left" />
          ))}
        {employments &&
          employments.map((employment) => (
            <EmploymentTimeline.Item key={employment.employer} employment={employment} side="right" />
          ))}
        {employments &&
          employments.map((employment) => (
            <EmploymentTimeline.Item key={employment.employer} employment={employment} side="left" />
          ))}
        {employments &&
          employments.map((employment) => (
            <EmploymentTimeline.Item key={employment.employer} employment={employment} side="right" />
          ))}
      </EmploymentTimeline>

      <Button>Button</Button>
    </main>
  );
}

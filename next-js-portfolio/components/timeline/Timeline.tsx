import { Employment, Skill } from "@/contentful/employments";
import { ChevronRight } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";

const Timeline = ({ children }: { children?: React.ReactNode }) => (
  <div className="relative my-16">
    <div className="z-1 employment-timeline__line absolute left-0 top-0 h-full w-1 translate-x-[-50%] bg-foreground lg:left-[50%]" />
    {children}
    <div className="absolute bottom-0 left-[calc(0%-0.375rem)] h-1 w-3 rounded-full bg-foreground lg:left-[calc(50%-0.375rem)]" />
  </div>
);

Timeline.Item = ({
  from,
  to,
  title,
  subtitle,
  description,
  skills,
  side,
}: {
  from: Date;
  to?: Date;
  title: string;
  subtitle?: string;
  description?: string;
  skills?: Skill[];
  side: "left" | "right";
}) => {
  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  const margin = side === "left" ? "lg:mr-[50%]" : "lg:ml-[50%]";
  const textAlign = side === "left" ? "lg:text-right" : "lg:text-left";
  const justify = side === "left" ? "lg:justify-end" : "lg:justify-start";

  const sortedSkills = skills?.sort((a, b) => {
    if (a.favourite && !b.favourite) return -1;
    if (!a.favourite && b.favourite) return 1;
    return 0;
  });

  return (
    <div className="relative">
      <div className="absolute left-[calc(0%-0.375rem)] top-0 h-1 w-3 rounded-full bg-foreground lg:left-[calc(50%-0.375rem)]" />

      <div className={`relative ${textAlign} px-16 py-4 sm:text-left ${margin} sm:m-0`}>
        <div className="date-range mb-2 inline-flex items-center text-2xl	">
          <h2>{from.toLocaleDateString("en-US", { month: "short", year: "numeric" })}</h2>
          <ChevronRight className="mx-2 text-black dark:text-purple-300" width="1rem" />
          <h2>{to ? to.toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Present"}</h2>
        </div>
        <h3 className="employer mb-2 mt-3 text-2xl font-extralight">{title}</h3>
        {subtitle && <h4 className="position text-lg font-bold">{subtitle}</h4>}
        {description && <p className="description my-3 font-extralight">{description}</p>}
        {skills && (
          <div className={`skills mt-6 flex flex-wrap sm:justify-start ${justify}`}>
            {sortedSkills?.map((skill) => {
              return (
                <div className="mb-2 mr-2">
                  <Badge variant={skill.favourite ? "hightlighted" : "default"}>
                    <p className="mr-1">{skill.title}</p>
                    {skill.favourite && <p>&#10024;</p>}
                  </Badge>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export { Timeline };

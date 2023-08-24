import { Employment } from "@/contentful/employments";
import React from "react";

const EmploymentTimeline = ({ children }: { children?: React.ReactNode }) => (
  <div className="relative my-16">
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        width: "4px",
        height: "100%",
        backgroundColor: "white",
        zIndex: 1,
      }}
      className="employment-timeline__line"
    />
    {children}
  </div>
);

EmploymentTimeline.Item = ({ employment, side }: { employment: Employment; side: "left" | "right" }) => {
  const marginDirection = side === "left" ? "mr" : "ml";
  const textAlign = side === "left" ? "text-right" : "text-left";

  return (
    <div className={`relative ${textAlign} ${marginDirection}-[50%] px-16 py-4`}>
      <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-white" />

      <div className="date-range">
        {employment.from.toLocaleDateString("en-US", { month: "long", year: "numeric" })} -
        {employment.to ? employment.to.toLocaleDateString("en-US", { month: "long", year: "numeric" }) : "Present"}
      </div>
      <div className="position">{employment.position}</div>
      <div className="employer">{employment.employer}</div>
      <div className="description">{employment.description}</div>
      <div className="skills">Skills: {employment.skills?.map((skill) => skill.title).join(", ")}</div>
    </div>
  );
};

export default EmploymentTimeline;

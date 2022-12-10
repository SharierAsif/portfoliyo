import React from "react";
import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
import WorkData from "../data/WorkData";

function Works() {
  return (
    <div id="works" className="py-12">
      <SectionTitle>Works</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {WorkData.map(work => (
            <WorkItem
                key={work.title}
                title={work.title}
                img={work.img}
                tech={work.tech}
                ></WorkItem>
       ))}
      </div>
    </div>
  );
}

export default Works;

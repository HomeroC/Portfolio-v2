import React from 'react'
import WorkItems from './WorkItems';

const workExperiences = [
  {
    year: "2017 - 2019",
    title: "Software Engineer Intern",
    duration: "2 years",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facere voluptas quisquam molestias iure temporibus quasi ipsa consequatur commodi pariatur!",
  },
  {
    year: "2020 - Present",
    title: "Frontend Developer",
    duration: "2+ years",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facere voluptas quisquam molestias iure temporibus quasi ipsa consequatur commodi pariatur!",
  },
  {
    year: "2015 - 2017",
    title: "Technical Support Specialist",
    duration: "2 years",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facere voluptas quisquam molestias iure temporibus quasi ipsa consequatur commodi pariatur!",
  },
  {
    year: "2012 - 2015",
    title: "Project Manager",
    duration: "3 years",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facere voluptas quisquam molestias iure temporibus quasi ipsa consequatur commodi pariatur!",
  },
];

function WorkSec() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {workExperiences.map((item, id) => {
        <WorkItems
          key={id}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />;
      })}
    </div>
  );
}

export default WorkSec
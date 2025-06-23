
import React from "react";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition-all">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View Project
      </a>
    </div>
  );
};


export default ProjectCard;


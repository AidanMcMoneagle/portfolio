import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";

import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div className="project">
    <h3>
      {project.name}
      {project.name === "My Weights Tracker" && <StarIcon />}
      {project.name !== "My Weights Tracker" && <SchoolIcon />}
    </h3>

    <img src={project.image} alt="" className="project__image" />

    <ul className="project__description">
      {project.description.map((el) => (
        <li key={uniqid()} className="project__description__item">
          {el}
        </li>
      ))}
    </ul>

    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link--icon"
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
      >
        <LaunchIcon />
      </a>
    )}
  </div>
);

export default ProjectContainer;

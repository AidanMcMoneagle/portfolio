import uniqid from "uniqid";
import LaunchIcon from "@material-ui/icons/Launch";
import StarIcon from "@mui/icons-material/Star";
import { projects } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import SchoolIcon from "@mui/icons-material/School";
import "./Projects.css";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      <div className="center center__legend">
        <LaunchIcon /> View Hosted Application
      </div>
      <div className="center center__legend">
        <StarIcon /> Top Project
      </div>
      <div className="center center__legend">
        <SchoolIcon /> Tutorial Led Projects
      </div>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

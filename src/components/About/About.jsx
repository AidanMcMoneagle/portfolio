import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, description, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">{role}.</h2>}

      <ul className="about__desc">
        {description.map((el) => (
          <li key={uniqid()} className="about__description__item ">
            {el}
          </li>
        ))}
      </ul>
      {/*     
      <p className='about__desc'>{description}</p> */}

      <div className="about__contact center">
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;

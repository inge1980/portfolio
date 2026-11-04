import { FaGithub, FaLinkedin } from "react-icons/fa";

const linkData = [
  {
    Icon: FaGithub,
    label: "GitHub",
    link:
      "https://github.com/" +
      process.env.REACT_APP_GITHUB_USERNAME +
      "?tab=repositories",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    link:
      "https://www.linkedin.com/in/" +
      process.env.REACT_APP_LINKEDIN_USERNAME +
      "/",
  },
];
export default linkData;

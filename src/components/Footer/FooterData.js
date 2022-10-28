import gh from "../../img/gh.png";
import li from "../../img/li.png";
import ins from "../../img/in.png";

const linkData = [
  {
    img: gh,
    link:
      "https://github.com/" +
      process.env.REACT_APP_GITHUB_USERNAME +
      "?tab=repositories",
  },
  {
    img: li,
    link:
      "https://www.linkedin.com/in/" +
      process.env.REACT_APP_LINKEDIN_USERNAME +
      "/",
  },
  {
    img: ins,
    link:
      "https://www.instagram.com/" +
      process.env.REACT_APP_INSTAGRAM_USERNAME +
      "/",
  },
];
export default linkData;

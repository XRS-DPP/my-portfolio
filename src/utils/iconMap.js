import javascritIcon from "../assets/icons/javascript.svg";
import expressIcon from "../assets/icons/express.svg";
import htmlIcon from "../assets/icons/html.svg";

const skillsIcons = {
  javascript: javascritIcon,
  express: expressIcon,
  html: htmlIcon,
};

export function getSkillIcon(skillName) {
  return skillsIcons[skillName];
}

console.log(javascritIcon);

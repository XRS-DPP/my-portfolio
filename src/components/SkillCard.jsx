import { getSkillIcon } from "../utils/iconMap.js";

const SkillCard = ({ skillName }) => {
  return (
    <div>
      <img src={getSkillIcon(skillName)} alt={skillName}></img>
    </div>
  );
};

export default SkillCard;

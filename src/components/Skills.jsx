import { Box } from "@mui/material";
import { skills } from '../utils/SkillList.jsx'

const Skills = () => {

    const SkillsComponent = skills.map(skill => (
        <Box
            component="img"
            src={skill.img}
            alt={skill.name}
            sx={{
                height: { xs: 40, sm: 50, md: 65 },
                width: { xs: 40, sm: 50, md: 65 },
                marginBottom: { xs: 15, md: 0 },
                borderRadius: "10%",
                background: "white",
            }}
            className="mouse-wheel2"
        />       

    ))

    return SkillsComponent
}

export default Skills

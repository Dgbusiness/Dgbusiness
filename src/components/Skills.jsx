import { Box } from '@mui/material'
import { skills } from '../utils/SkillList.jsx'

const SkillsComponent = (type) => {
	return type.map((skill, index) => (
		<Box
			key={(skill.name + index).trim()}
			component="img"
			src={skill.img}
			alt={skill.name}
			sx={{
				height: { xs: 40, sm: 50, md: 65 },
				width: { xs: 40, sm: 50, md: 65 },
				borderRadius: '10%',
				p: 0.5,
				background: 'white',
			}}
			className="mouse-wheel2"
		/>
	))
}

const ColumnOfSkills = (values, index) => (
	<Box
		key={`${values[0]}-${index}`}
		display="flex"
		xs={12}
		md={12}
		sx={{
			textAlign: { xs: 'center', sm: 'center', md: 'center' },
			marginTop: { xs: 5, md: 0 },
			alignItems: 'center',
			flexWrap: 'wrap',
			height: '100%',
			flexDirection: 'column',

		}}
	>
		<h1>{values[0]}</h1>
		<Box
			display="flex"
			xs={12}
			md={12}
			sx={{
				width: { xl: '20vw' },
				marginTop: { xs: 5, md: 0 },
				alignItems: 'center',
				justifyContent: 'center',
				flexWrap: 'wrap',
				flexDirection: 'row',
			}}
			gap={3}
		>
			{SkillsComponent(values[1])}
		</Box>
	</Box>
)

var rowOfColumnsOfSkills = []

const Skills = () => (
	<Box
		display="flex"
		xs={12}
		md={12}
		sx={{
			width: { xl: '80vw' },
			marginTop: { xs: 5, md: 0 },
			justifyContent: {xs: 'center', md: 'space-between'},
			flexWrap: 'wrap',
			flexDirection: 'row',
		}}
	>
		{Object.entries(skills).map((values, index) => {
			if (values[1].length >= 8) {
				return (
					<Box
						key={`${values[0]}-${index}`}
						display="flex"
						xs={12}
						md={12}
						sx={{
							marginTop: { xs: 5, md: 0 },
							justifyContent: 'center',
							flexDirection: 'column',
						}}
						gap={4}
					>
						{ColumnOfSkills(values, index)}
					</Box>
				)
			} else {
				rowOfColumnsOfSkills = [
					...rowOfColumnsOfSkills,
					ColumnOfSkills(values, index),
				]
				if (index % 2 === 0) {
					let twoSkillsSet = rowOfColumnsOfSkills.slice()
					rowOfColumnsOfSkills = []
					return (
						<Box
							key={`${values[0]}-${index}`}
							display="flex"
							xs={12}
							md={12}
							sx={{
								marginTop: { xs: 5, md: 0 },
								justifyContent: 'center',
								flexDirection: 'column',
							}}
							gap={4}
						>
							{twoSkillsSet}
						</Box>
					)
				}
			}
			return null
		})}
	</Box>
)

export default Skills

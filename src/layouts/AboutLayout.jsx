import { useState } from 'react'
import { Box, Typography, Tabs, Tab } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import Skills from '../components/Skills.jsx'
import Studies from '../components/Studies.jsx'
import Certificates from '../components/Certificates.jsx'
import Title from '../components/Title.jsx'
import profile from '../assets/img/profile.webp'

const openInNewTab = (url) => {
	window.open(url, '_blank', 'noopener,noreferrer')
}

const AboutLayout = () => {
	const [tabIndex, setTabIndex] = useState(0)

	const handleChange = (event, newValue) => {
		setTabIndex(newValue)
	}

	return (
		<Box
			id="about"
			display="flex"
			sx={{
				background: `rgba(50,50,50,1)`,
				color: 'white',
				textAlign: 'center',
				p: 5,
				flexWrap: 'wrap',
			}}
			justifyContent="center"
			alignItems="center"
		>
			<Title title="About" />
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				sx={{
					flexDirection: { xs: 'column', md: 'row' },
				}}
			>
				<Box
					component="img"
					src={profile}
					alt="profilePicture"
					sx={{
						height: { xs: 150, sm: 350 },
						width: { xs: 150, sm: 300 },
						marginBottom: { xs: 2, md: 0 },
						borderRadius: '100%',
						background: 'black',
						mx: 2,
						p: 0.5,
					}}
				/>
				<Typography
					sx={{
						width: { xs: 'full', md: '30%' },
						textAlign: 'justify',
					}}
					color="white"
					fontFamily="sans-serif"
				>
					With a strong background in Algorithms and Data Structures along with +8 years of experience as a Software Engineer, I have built modern web applications using PHP, Laravel, JavaScript, React, Next.js, and popular styling frameworks such as Material and Tailwind CSS. Skilled in working with various databases, including MySQL and PostgreSQL. 
					<br />
					<br />
					I'm also passionate about Offensive Cybersecurity, I’ve applied PTES and NIST SP 800-115 methodologies in controlled environments, exploring real vulnerabilities with tools like Metasploit, SQLMap, and Burp Suite. I’ve practiced techniques such as service exploitation, SQL injections, XSS, CSRF, and MITM attacks. I also conduct OSINT scans with NMAP and NESSUS, and use evasion and binary modification techniques with Pesidious — all with an ethical and strategic approach.
				</Typography>
			</Box>
			<Box
				display="flex"
				xs={12}
				md={12}
				sx={{
					textAlign: { xs: 'center', sm: 'center', md: 'center' },
					marginTop: { xs: 5, md: 0 },
					alignItems: 'center',
					justifyContent: 'center',
					flexWrap: 'wrap',
					flexDirection: 'column',
				}}
			>
				<Tabs
					centered
					value={tabIndex}
					textColor="inherit"
					onChange={handleChange}
					TabIndicatorProps={{
						style: {
							background: '#a80c06',
						},
					}}
				>
					<Tab
						icon={<LaptopChromebookIcon />}
						label="SKILLS"
						sx={{
							color: 'white',
						}}
					/>
					<Tab
						icon={<SchoolIcon />}
						label="STUDIES"
						sx={{
							color: 'white',
						}}
					/>
					<Tab
						icon={<WorkspacePremiumIcon />}
						label="CERTIFICATES"
						sx={{
							color: 'white',
						}}
					/>
				</Tabs>
				<Box
					sx={{
						flexWrap: 'wrap',
						justifyContent: 'center',
						alignItems: 'center',
						py: 5,
					}}
					display="flex"
					gap={6}
				>
					{tabIndex === 0 && <Skills />}
					{tabIndex === 1 && <Studies />}
					{tabIndex === 2 && <Certificates openInNewTab={openInNewTab} />}
				</Box>
			</Box>
		</Box>
	)
}
export default AboutLayout

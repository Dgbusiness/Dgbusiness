import React from 'react'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Box, Typography } from '@mui/material'
import { options } from '../utils/ParticlesOptions.jsx'
import Carousel from 'react-material-ui-carousel'
import bg from '../assets/img/bg.png'

const HeroBanner = () => {
	const particlesInit = useCallback(async (engine) => {
		//console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine)
	}, [])

	const particlesLoaded = useCallback(async (container) => {
		//await console.log(container);
	}, [])

	const skills = [
		{ id: 0, value: 'Software Engineer' },
		{ id: 1, value: 'Cibersecurity Consultant' },
		{ id: 2, value: 'DevOps Engineer' },
		{ id: 3, value: 'Digital Marketing Consultant' },
		// {id: 0, value: "Web Developer"},
		// {id: 1, value: "Mobile Developer"},
		// {id: 2, value: "Videogame Developer"},
		// {id: 4, value: "Cloud Engineer"},
	]

	return (
		<Box
			display="flex"
			id="back-to-top-anchor"
			alignItems="center"
			sx={{
				justifyContent: { xs: 'center', md: 'flex-start' },
				height: { xs: '100vh', sm: '100vh', md: '110vh' },
				backgroundImage: `url(${bg})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				backgroundSize: 'cover',
				//background: `radial-gradient(circle, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 100%)`,
			}}
		>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={options}
			/>
			<Box
				display="flex"
				sx={{
					flexDirection: 'column',
					textAlign: { xs: 'center', sm: 'center', md: 'left' },
					marginTop: { xs: 15, sm: 20, md: 0 },
					ml: { md: 5 },
				}}
			>
				<Typography
					color="white"
					fontFamily="Alkalami"
					sx={{
						fontSize: { xs: 25, sm: 50, xl: 80 },
					}}
				>
					Hi, I'm Daniel Giannotti
				</Typography>
				<Carousel
					animation="fade"
					indicators={0}
					interval={2500}
					duration={600}
					navButtonsAlwaysInvisible={1}
					sx={{
						overflow: 'visible !important',
						lineHeight: 0.9,
						flexDirection: 'column',
					}}
					axys="y"
				>
					{skills.map((item, i) => (
						<Typography
							key={i}
							color="#a80c06"
							fontWeight="bold"
							fontFamily="Alkalami"
							sx={{
								fontSize: { xs: 50, sm: 130, xl: 180 },
                                lineHeight: 0.9,
								mt: { xs: '1vh', sm: '4vh' },
							}}
						>
							{item.value}
						</Typography>
					))}
				</Carousel>
			</Box>
		</Box>
	)
}

export default HeroBanner

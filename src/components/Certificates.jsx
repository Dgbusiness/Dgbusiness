import { Box, Typography } from '@mui/material'
import { certificates } from '../utils/Certificates.jsx'
import { SiUdemy } from 'react-icons/si'

const Certificates = ({ openInNewTab }) =>
	certificates.length ? (
		<Box
			display="flex"
			xs={12}
			md={12}
			sx={{
				width: { xs: '100vw' },
				marginTop: { xs: 5, md: 0 },
				justifyContent: 'center',
				flexWrap: 'wrap',
				flexDirection: 'row',
			}}
			gap={4}
		>
			{certificates.map((certificate) => (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
                        transition: 'margin 1s ',
						width: { xs: '100%', sm: '50%', md: '45%', xl: '25%' },
						'&:hover': {
							transform: 'scale3d(1.2, 1.2, 1)',
							transition: 'transform 1s, margin 1s ',
                            mt: 5
						},
					}}
					onClick={() => certificate.url !== '#' ? openInNewTab(certificate.url) : null}
				>
					<Box display="flex" textAlign="center">
						<Box 
							sx={{
								width: {xs: "100%", sm: "80%"}
							}}
						>
							<Typography>{certificate.name}</Typography>
						</Box>
						{certificate.platform === 'udemy' && (
							<Box>
								<SiUdemy
									style={{
										fontSize: 45,
									}}
								/>
							</Box>
						)}
					</Box>
					<Box fullWidth>
						<Box
							component="img"
							src={certificate.img}
							alt={certificate.name.toLowerCase().trim()}
							sx={{
								height: { xs: 200, sm: 250, md: 300 },
								borderRadius: 4,
							}}
						/>
					</Box>
				</Box>
			))}
		</Box>
	) : (
		<Typography variant="h4">No certificates yet.</Typography>
	)

export default Certificates

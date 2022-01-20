import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import MainLayout from '@components/MainLayout'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'
import { server } from '@config/index'

export default function Register() {
	const { push } = useRouter()

	const [username, setUsername] = useState('chenlay')
	const [email, setEmail] = useState('chenlay@gmail.com')
	const [password, setPassword] = useState('123456')

	const handleSubmit = async (event) => {
		event.preventDefault()

		// console.table({ username, email, password })

		const { data } = await axios.post(`${server}/api/register`, {
			username,
			email,
			password,
		})

		console.log('REGISTER RESPONSE', data)
	}

	const handleChange = (event) => {}

	return (
		<MainLayout title='Account Registration'>
			<CssBaseline />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Register an account
				</Typography>
				<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						required
						margin='normal'
						fullWidth
						id='username'
						label='Username'
						name='username'
						autoComplete='username'
						autoFocus
						value={username}
						onChange={handleChange}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						value={email}
						onChange={handleChange}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='password'
						value={password}
						onChange={handleChange}
					/>
					<FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Register
					</Button>
					<Grid container>
						<Grid item>
							<Typography
								sx={{ cursor: 'pointer' }}
								onClick={() => push('/login')}
								variant='body2'
							>
								{'Have an account? Login In'}
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ my: 3 }} />
		</MainLayout>
	)
}

function Copyright(props) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}
		>
			{'Copyright © '}
			<Link color='inherit' href='#!'>
				PJK-DEV
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

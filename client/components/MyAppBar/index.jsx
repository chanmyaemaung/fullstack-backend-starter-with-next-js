import PropTypes from 'prop-types'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import {
	AppBar,
	CssBaseline,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import MySideBar from './Sidebar'
import NoSsr from '@mui/material/NoSsr'
import LoginIcon from '@mui/icons-material/Login'
import { root, right } from './style'
import { useRouter } from 'next/router'

// * ___main_appbar_function___
export default function MyAppBar(props) {
	const { push } = useRouter()

	return (
		<NoSsr>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar color='inherit'>
					<Toolbar variant='dense' component='div'>
						<Box sx={root}>
							<MySideBar />
							<Typography
								sx={{ cursor: 'pointer' }}
								onClick={() => push('/')}
								component='h6'
								variant='h6'
								textAlign='center'
							>
								PJK-DEV
							</Typography>
							<Box sx={right}>
								<IconButton
									onClick={() => push('/register')}
									sx={{ ml: 1 }}
									color='inherit'
								>
									<LoginIcon />
								</IconButton>
							</Box>
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</NoSsr>
	)
}

// * ___Hiding_on_scroll_function___
function HideOnScroll(props) {
	const { children, window } = props
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	})

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

// * ___Hiding_on_scroll_declare_propTypes___
HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
}

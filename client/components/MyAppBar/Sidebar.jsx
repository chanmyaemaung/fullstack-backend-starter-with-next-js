import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import { useState, Fragment } from 'react'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'

export default function MySideBar() {
	const { push } = useRouter('')

	const [state, setState] = useState({
		left: false,
	})

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setState({ ...state, [anchor]: open })
	}

	// tag links
	const luckyLink = () => window.open('https://bit.ly/3rlGEIt', '_blank')

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List onClick={() => push('/')}>
				<ListItem button>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary={'Home'} />
				</ListItem>
			</List>
			<Divider />
		</Box>
	)

	return (
		<>
			{['left'].map((anchor) => (
				<Fragment key={anchor}>
					<IconButton onClick={toggleDrawer(anchor, true)}>
						<MenuIcon />
					</IconButton>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						{list(anchor)}
					</SwipeableDrawer>
				</Fragment>
			))}
		</>
	)
}

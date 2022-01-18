import Head from 'next/head'
import { Container } from '@mui/material'
import NoSsr from '@mui/material/NoSsr'

const MainLayout = ({ title, keywords, description, children }) => {
	return (
		<NoSsr>
			<Head>
				<meta
					name='viewport'
					content='initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NoSsr>
				<Container maxWidth='md'>{children}</Container>
			</NoSsr>
		</NoSsr>
	)
}

export default MainLayout

MainLayout.defaultProps = {
	title: 'Thai Lotto New',
	keywords: 'my blog, chenlay blog, chan myae maung',
	description:
		'This is for my personal blog built with NEXT JS. Developed by PJK-DEV',
}

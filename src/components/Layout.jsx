import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
const Layout = () => {
	return (
		<Fragment>
			<Navbar />
			<main className='outlet-section'>
				<Outlet />
			</main>
			<Footer />
		</Fragment>
	)
}

export default Layout

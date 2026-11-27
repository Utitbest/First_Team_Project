import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


const Layout = () => {
  return (
    <div className='flex-col flex h-screen'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
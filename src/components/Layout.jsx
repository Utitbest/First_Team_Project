import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


const Layout = () => {
  return (
    <>
      <Header />
      <main className='flex-1 flex w-full'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
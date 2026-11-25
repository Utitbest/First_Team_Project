import Header from './Header'
import { Outlet } from 'react-router-dom'



const Layout = () => {
  return (
    <>
        <Header />
        <main className='flex-1 flex w-full'>
            <Outlet />
        </main>
        
    </>
  )
}

export default Layout
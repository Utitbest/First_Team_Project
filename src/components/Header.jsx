import Logo from '/Logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='px-3 w-full flex items-center bg-white border-b border-gray-200 h-12.5'>
        <div className='w-12.5 h-full overflow-hidden'>
            <img className='w-full' src={Logo} alt="Site logo" />
        </div>
        <nav className='flex-1 h-full flex items-center justify-end px-14 gap-3'>
            <ul className='font-N h-full w-[70%] flex items-center justify-center gap-5'>
                <NavLink className='text-green-800 font-medium' to='/'>Home</NavLink>
                <NavLink className='text-green-800 font-medium' to='/about'>About</NavLink>
                <NavLink className='text-green-800 font-medium' to='/recipes'>Recipes</NavLink>
            </ul>
            <button className='cursor-pointer px-3 py-2 rounded-[10px] text-white text-[15px] font-medium bg-green-800'>
                Browser Recipes
            </button>
        </nav>
    </header>
  )
}

export default Header
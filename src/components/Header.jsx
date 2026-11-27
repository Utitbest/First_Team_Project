import Logo from '/healthy-recipe-finder-logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className=' bg-white border-b border-gray-200'>
       <div className='mx-auto max-w-4xl h-18 flex items-center'>
            <div className='flex items-center gap-2'>
                <img className='w-10' src={Logo} alt="Site logo" />
                <b className='text-green-950'>Healtht Recipe Finder</b>
            </div>
            <nav className='flex-1 flex items-center justify-around gap-3 border'>
                <ul className='flex items-center justify-center gap-5'>
                    <NavLink className='text-green-800 font-medium' to='/'>Home</NavLink>
                    <NavLink className='text-green-800 font-medium' to='/about'>About</NavLink>
                    <NavLink className='text-green-800 font-medium' to='/recipes'>Recipes</NavLink>
                </ul>
                <button className='cursor-pointer px-3 py-2 rounded-[10px] text-white text-[15px] font-medium bg-green-800'>
                    Browser Recipes
                </button>
            </nav>
        </div>
    </header>
  )
}

export default Header
import Logo from '/healthy-recipe-finder-logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className=' bg-white border-b border-gray-200'>
       <div className='mx-auto max-w-4xl h-18 flex items-center gap-6'>
            <div className='flex items-center gap-2'>
                <img className='w-10' src={Logo} alt="Site logo" />
                <b className='text-green-950'>Healtht Recipe Finder</b>
            </div>
            <nav className='flex-1 flex items-center justify-end gap-3'>
                <ul className='flex flex-1 items-center justify-center gap-5'>
                    <NavLink className='text-green-950 font-medium' to='/'>Home</NavLink>
                    <NavLink className='text-green-950 font-medium' to='/about'>About</NavLink>
                    <NavLink className='text-green-950 font-medium' to='/recipes'>Recipes</NavLink>
                </ul>
                <button className='cursor-pointer px-3 py-2 rounded-[10px] text-white text-[15px] font-medium bg-green-950'>
                    Browser Recipes
                </button>
            </nav>
        </div>
    </header>
  )
}

export default Header
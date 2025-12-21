import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'



const Navbar = () => {
  return (
    <div className='bg-white py-3 shadow-2xl px-4 md:px-0'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>

      {/* logo Section */}
      <div className='flex gap-7 items-center'>

        {/* HeadLine */}
        <Link to="/"><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif'>Z</span>eptro</h1></Link>

        {/* Not doing Location access section as it is not reqired rn */}

        

      </div>

      {/* Menu section */}
        <nav className='flex gap-7 items-center'>

          {/* Navlinks */}
          <ul className='md:flex gap-7 items-center text-xl font-semibold hidden'>
            <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Home</li></NavLink>
            <NavLink to={"/products"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Products</li></NavLink>
            <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>About</li></NavLink>
            <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Contact</li></NavLink>
          </ul>

          {/* Cart Symbol */}
          <Link to={'/cart'} className='relative'>
            <IoCartOutline className='h-7 w-7' />
              <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>0</span>
          </Link>
          
          {/* SignIn SignOut Button */}
          <div>
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
            
          
        </nav>

      </div>
    </div>
  )
}

export default Navbar

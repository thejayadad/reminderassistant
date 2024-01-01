import React from 'react'
import Logo from '../Logo'
import AuthLinks from './AuthLinks'
import getServerUser from '@/lib/getServerUser'

const Navbar = async () => {
    const user = getServerUser()
  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between mx-auto max-w-screen-xl items-center'>
            <Logo />
            <AuthLinks user={user} />
        </nav>
    </header>
  )
}

export default Navbar
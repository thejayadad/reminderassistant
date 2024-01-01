import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import { FiPlus, FiList, FiActivity, FiHome, FiUser, FiLogOut } from 'react-icons/fi';
import {getServerSession} from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LogoutButton from '../Buttons/LogoutButton';
import LoginWithGoogle from '../Buttons/LoginWithGoogle';
import Link from 'next/link';

const AuthLinks = async () => {
    const session = await getServerSession(authOptions)

  return (
    <div className="flex items-center gap-2">
        {!!session && (
            <>
            <div className='flex items-center'>
            <LogoutButton />
            </div>

            </>
        )}
        {!session && (
            <>
            <LoginWithGoogle />
            </>
        )}
    </div>
  )
}

export default AuthLinks
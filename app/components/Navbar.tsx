'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [username, setUsername] = useState('')
  const router = useRouter()

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      setUsername(currentUser)
    }
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem('currentUser')
    setUsername('')
    router.push('/')
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/learn-more" className="text-xl font-bold text-orange-500">
          illinigpt
        </Link>
        <div className="space-x-4">
          {username ? (
            <>
              <span>Welcome, {username}</span>
              <button onClick={handleSignOut} className="hover:text-gray-300">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/signin" className="hover:text-gray-300">
                Sign In
              </Link>
              <Link href="/signup" className="hover:text-gray-300">
                Sign Up
              </Link>
              <Link href="/learn-more" className="text-orange-500 hover:text-gray-300">
                Learn More
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
'use client'

import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'

export default function Home() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    // Retrieve the username from localStorage when the component mounts
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      setUsername(currentUser)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {username && <h2 className="text-2xl mb-4">Hi, {username}</h2>}
      <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>
      <SearchBar />
    </div>
  )
}
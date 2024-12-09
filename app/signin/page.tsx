'use client'

import { useState } from 'react'
import { db } from '../../utils/firebaseConfig'
import { ref, get } from "firebase/database"
import { useRouter } from 'next/navigation'

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState({ text: '', isError: false })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage({ text: '', isError: false })

    try {
      const userRef = ref(db, 'users/' + username)
      const snapshot = await get(userRef)

      if (snapshot.exists()) {
        const userData = snapshot.val()
        if (userData.password === password) {
          setMessage({ text: 'You have successfully signed in', isError: false })
          // Store the username in localStorage
          localStorage.setItem('currentUser', username)
          // Redirect to the main page after a short delay
          setTimeout(() => router.push('/'), 1500)
        } else {
          setMessage({ text: 'Incorrect password', isError: true })
        }
      } else {
        setMessage({ text: 'Username does not exist', isError: true })
      }
    } catch (error) {
      console.error("Error signing in: ", error)
      setMessage({ text: 'An error occurred. Please try again.', isError: true })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Sign In</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="btn">
            Sign In
          </button>
        </div>
      </form>
      {message.text && (
        <div className={`mt-4 p-2 rounded ${message.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message.text}
        </div>
      )}
    </div>
  )
}

export default SignIn

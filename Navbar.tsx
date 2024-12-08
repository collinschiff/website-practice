import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <div className="space-x-4">
          <Link href="/signin" className="hover:text-gray-300">
            Sign In
          </Link>
          <Link href="/signup" className="hover:text-gray-300">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
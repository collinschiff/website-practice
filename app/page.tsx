import SearchBar from './components/SearchBar'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>
      <SearchBar />
    </div>
  )
}
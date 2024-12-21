import Link from 'next/link'
import React from 'react'


const Home = () => {
  return (
    <div>
      <h1 className="text-7xl">
        Home Page
      </h1>
      <Link href="/about" className="text-2xl">About</Link>
    </div>
  )
}

export default Home


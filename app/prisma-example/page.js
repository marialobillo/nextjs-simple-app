import React from 'react'
import Link from 'next/link'

const ExamplePage = () => {
  return (
    <div>
          <h1 className="text-5xl">Prisma Example Page</h1>
          <Link href="/" className="text-2xl">Home</Link>
    </div>
  )
}

export default ExamplePage
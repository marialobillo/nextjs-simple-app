import React from 'react'
import Link from 'next/link'

const TasksPage = () => {
  return (
    <div>
          <h1 className="text-5xl">Tasks Page</h1>
          <Link href="/" className="text-2xl">Home</Link>
    </div>
  )
}

export default TasksPage
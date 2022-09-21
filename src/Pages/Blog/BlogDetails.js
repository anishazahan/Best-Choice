import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const {id} = useParams()
  return (
    <div>

        <h2>This is blog details</h2>
    </div>
  )
}

export default BlogDetails
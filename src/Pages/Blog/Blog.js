import React, { useState } from 'react'
import useBlogs from '../../Hooks/useBlogs'

import { Link } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import MinimizeBlogs from './MinimizeBlogs';

const Blog = () => {
    const [allBlogs,setAllBlogs]=useState(false);

    const [blogs]=useBlogs();
    
  return (
    <div className='max-w-6xl mx-auto'>
        <h2 className='text-2xl font-semibold my-14 text-center text-gray-800'>This is our Blog</h2>
       <div className="flex flex-col">
        {
          allBlogs? blogs.map(blog=><MinimizeBlogs key={blog.id} blog={blog}></MinimizeBlogs> ):
          blogs.slice(0,3).map(blog=><MinimizeBlogs key={blog.id} blog={blog}></MinimizeBlogs> )
        }
       </div>
       <div className="mr-auto my-5 ">
        <button className='link' onClick={()=>{setAllBlogs(!allBlogs)}}>{allBlogs? 'see less':'See More'}</button>
    </div>
    
    </div>
  )
}

export default Blog
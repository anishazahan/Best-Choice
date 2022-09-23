import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {

    const {id} = useParams()
    const [blogDetails,setBlogDetails] =useState([]);
    useEffect(()=>{
      fetch('Blog.json')
      .then(res=>res.json())
      .then(data=>setBlogDetails(data))
      
    },[])
    console.log(blogDetails);

  return (
    <div>
       
        
    </div>
  )
}

export default BlogDetails
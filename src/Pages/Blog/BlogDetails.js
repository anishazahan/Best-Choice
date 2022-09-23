import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogImg from '../../../src/assets/blog1.jpg'

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
    <div className='mt-20 mb-28 max-w-7xl px-5 lg:px-10'>
       <img src={blogImg} alt="" />
       <h2 className='text-center font-semibold text-black my-5'>Post Format: Image</h2>
       <h2 className='mb-3 font-medium text-gray-500 text-sm text-center'>Posted By Admin 22 Apr {(new Date().getFullYear())}</h2>
       <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        
    </div>
  )
}

export default BlogDetails
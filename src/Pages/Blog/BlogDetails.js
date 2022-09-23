import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import blogImg from '../../../src/assets/blog1.jpg'
import {AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'

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
       <img className='mx-auto' src={blogImg} alt="" />
       <h2 className='text-center font-semibold text-black my-5'>Post Format: Image</h2>
       <h2 className='mb-3 font-medium text-gray-500 text-sm text-center'>Posted By Admin 22 Apr {(new Date().getFullYear())}</h2>
       <p className='text-left text-[14px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
       <h1 className='text-sm font-semibold mt-5 mb-3'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</h1>
       <p className='text-[14px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum delenitiatque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
       <p className='text-left text-[14px] mt-5'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
       <div className="icons flex space-x-5 mt-10 mx-auto">
                            <Link className='text-3xl rounded-sm hover:bg-primary hover:text-white text-secondary p-2  shadow-lg' to='/'> <AiFillFacebook></AiFillFacebook> </Link>
                            <Link className='text-3xl rounded-sm hover:bg-primary hover:text-white text-secondary p-2  shadow-lg' to='/'> <AiFillLinkedin></AiFillLinkedin> </Link>
                            <Link className='text-3xl rounded-sm hover:bg-primary hover:text-white text-secondary p-2  shadow-lg' to='/'> <AiFillInstagram></AiFillInstagram> </Link>
                            <Link className='text-3xl rounded-sm hover:bg-primary hover:text-white text-secondary p-2  shadow-lg' to='/'> <AiFillTwitterSquare></AiFillTwitterSquare> </Link>
                        </div>
        
    </div>
  )
}

export default BlogDetails
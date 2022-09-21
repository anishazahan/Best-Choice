import React, { useEffect, useState } from 'react'
import useBlogs from '../../Hooks/useBlogs'


const HomeBolg = () => {
    // const [blogs,setBlogs] =useState([]);
 
    // useEffect(()=>{
    //     fetch('blog.json')
    //     .then(res => res.json())
    //     .then(data => setBlogs(data))
    // },[])
   
    const [blogs] = useBlogs();
    
  return (
    <div className='max-w-7xl mx-auto'>
        <div className="grid grid-cols-2 gap-3 m-0 p-0">
            {
                blogs && blogs.map(blog=>{
                    return <div className=" my-5 p-0 m-0">
                        <div className="">
                            <img className='w-full' src={blog.img} alt="" />
                        </div>
                        <h2 className='mt-4 mb-2 font-bold'>{blog.tittle}</h2>
                        <h2 className='mb-3 font-medium text-gray-600 text-sm'>Posted By Admin 22 Apr {(new Date().getFullYear())}</h2>
                        <p className='text-sm pr-10'>{(blog.description).slice(0,149)}</p>
                        <div className="">
                            <button className=' py-1 hover:border hover:bg-transparent transition-all hover:border-1 bg-secondary text-white border-secondary roinded-sm hover:text-secondary font-medium px-10'>Details</button>
                        </div>
                    </div>
                }).slice(0,2)
            }
        </div>

    </div>
  )
}

export default HomeBolg
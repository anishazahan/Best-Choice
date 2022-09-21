import { useEffect, useState } from "react";

const useBlogs = () =>{
    const [blogs, setBlogs] = useState([]);
    console.log(blogs);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return [blogs, setBlogs]
}
export default useBlogs;
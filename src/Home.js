import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
       {title: 'My new website', body:'site with react;;;;', author:'Jean', id:'14'},
       {title: 'Welcome home', body:'site with react;;;;', author:'Marie', id:'15'},
       {title: 'Welcome you', body:'site with react;;;;', author:'Monia', id:'16'},
    ]);

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }
    
    

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title="Marie's blogs" handleDelete={handleDelete} />

             
        </div>
            

     ); 
    }
 
export default Home;
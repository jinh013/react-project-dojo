import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
       {title: 'My new website', body:'site with react;;;;', author:'Jean', id:'14'},
       {title: 'Welcome home', body:'site with react;;;;', author:'Marie', id:'15'},
       {title: 'Welcome you', body:'site with react;;;;', author:'Monia', id:'16'},
    ]);
    

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
            

     ); 
    }
 
export default Home;
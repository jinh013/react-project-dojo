import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
       {title: 'My new website', body:'site with react;;;;', author:'Jean', id:'14'},
       {title: 'Welcome home', body:'site with react;;;;', author:'Marie', id:'15'},
       {title: 'Welcome you', body:'site with react;;;;', author:'Monia', id:'16'},
    ]);
    

    return ( 
        <div className="home">
            <BlogList blogs = {blogs}/>
        </div>
            

     ); 
    }
 
export default Home;
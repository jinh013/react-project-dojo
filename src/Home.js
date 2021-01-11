import { useState } from 'react';

const Home = () => {
    //let name = 'Jean';
    const [name, setName] = useState('Jean');
    const[age, setAge] = useState(29);

    const handleClick = () => {
        setName('Monia');
        setAge(26);
    }


    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p> { name } is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>

     ); 
    }
 
export default Home;
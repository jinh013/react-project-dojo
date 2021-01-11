const Home = () => {

    const handleClick = () => {
        console.log("hello, Jean"); 
    }

    const handleClickAgain = (name) => {
        console.log("hello " + name);
        
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('jean')}>click me again</button>
        </div>

     ); 
}
 
export default Home ;

import SearchBar from '../../components/searchBar/SearchBar';
import  './HomePage.scss';

function HomePage(){

    return(
        <div className="homePage">
            
            <div className="textContainer">
                <div className="wrapper">

                <h1 className='title'>
                    Find Real Estate & Get Your Dream Place
                </h1>

                <p>
                Our real estate business specializes in delivering exceptional properties tailored to meet the diverse needs of our clientele. With a keen focus on meticulous planning, innovative design, and sustainable development practices, we strive to create spaces that exceed expectations. From residential developments that redefine modern living to commercial projects that foster vibrant business environments, our portfolio reflects our commitment to quality and excellence.
                </p>

                <SearchBar />
                
                <div className="boxes">
                    <div className="box">

                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">

                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">

                        <h1>2000+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>


                </div>
            </div>
            <div className="imgContainer">

                <img src="https://github.com/safak/react-estate-ui/blob/completed/public/bg.png?raw=true" 
             
                alt="" />
            </div>

        </div>
    )
    
}
export default HomePage;

import'./Navbar.scss';
function Navbar(){
    return(

     <nav> 
        <div className="left">
            <a href ='/'className='logo'>
                <img src="https://sp.yimg.com/ib/th?id=OIP.zfpqH6H4KBA1ATqnsesfCAHaHa&pid=Api&w=148&h=148&c=7&dpr=2&rs=1" 
                alt="" />

                <span className='span'>INDIAN HILL</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
        </div>
        <div className="right">
        <a href="/">Sign in</a>
        <a href="/"className='change'>Sign up</a>
        </div> 
        </nav>
    )
}
export default Navbar;
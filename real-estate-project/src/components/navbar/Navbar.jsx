
import { useState } from 'react';
import'./Navbar.scss';
function Navbar(){

    const [open,setopen] =useState(false)

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
        <div className='menuIcon'>
            <img src='https://tse3.mm.bing.net/th?id=OIP.1ZWz3P90zVwVb-0fiy78PwHaHa&pid=Api&P=0&h=180
            'alt='' 
            onClick={()=>setopen((prev)=>!prev)}
            />

        </div>
        <div className={open ?'menu active' : "menu"}>
        <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">sign in</a>
            <a href="/">sign up</a>

        </div>
        </div> 
        </nav>
    )
}
export default Navbar;
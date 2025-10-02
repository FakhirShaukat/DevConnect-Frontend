import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { assets } from '../assets/assets.js'
import {Link} from 'react-router-dom'



const Main = () => {
    return (
        <div className='bg-black text-white'>
            <Navbar />
            <div className='h-[80vh]'>
                <div className='main-content text-white flex flex-col justify-center items-center ' id="home">
                    <div className='headings w-full text-center mt-[150px]'>
                        <h1 className='text-7xl font-semibold'>Connect. Build. Grow.</h1>
                        <h3 className='text-3xl pt-6 text-gray-300 '>A platform for developers to connect with projects and peers</h3>
                    </div>
                    <div className='search-bar w-full pt-6 flex justify-center items-center  gap-2'>
                        <input type="search" className='w-[500px] p-2 text-md rounded-md' placeholder='Search for developers, skills, languages' />
                        <button className=' rounded-lg p-2 text-md px-4 bg-blue-500 hover:bg-blue-600 transition duration-300'>Search </button>
                    </div>
                    <div className='CTA-buttons pt-10 space-x-4'>
                        <button className='border p-2 rounded-lg text-md hover:bg-white hover:text-black tranisition duration-300' >Learn More</button>
                        <Link to="./selectionpage"><button className='border p-2 rounded-lg text-md bg-white text-black hover:bg-black hover:text-white tranisition duration-300'>Get Started</button></Link>
                    </div>
                </div>
            </div>
            <div className='about-section h-[80vh] flex ' id="about">
                <div className='details text-center w-full flex flex-col md:flex-row  justify-center items-center gap-4'>
                    <h1 className='text-5xl font-semibold'>Why DevConnect  </h1>
                    <p className='w-[500px]'>At DevConnect, Developers breakthrough projects, tasks, problems by connecting to a thriving platform.
                        Build, share and grow your network stronger than ever
                    </p>
                    
                </div>
            </div>

            <Footer/>



        </div>
    )
}

export default Main

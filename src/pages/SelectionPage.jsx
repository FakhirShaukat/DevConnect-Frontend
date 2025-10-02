import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const SelectionPage = () => {
  return (
    <>
      <div className='h-screen w-full bg-black text-white  '>
        <Link to="/"><div className='BackBtn p-4 px-10'><button>Back</button></div></Link>
        <div className='heading text-4xl font-semibold text-center mt-10'>Who is using ?</div>
        <Link to="/loginpage">
          <div className="selection-container flex flex-col md:flex-row justify-center mt-10 items-center gap-6 ">
            
            <div className="developer-con flex flex-col rounded-xl bg-white text-black justify-center items-center w-[200px] h-[250px] border shadow-md cursor-pointer
              hover:scale-105 hover:shadow-xl hover:bg-gray-100 transition-transform duration-300 ease-in-out">
              <img src={assets.code} className="w-20" alt="Developer" />
              <p className="pt-2 font-medium">Developer</p>
            </div>

            <div className="user-con flex flex-col rounded-xl bg-white text-black justify-center items-center w-[200px] h-[250px] border shadow-md cursor-pointer
              hover:scale-105 hover:shadow-xl hover:bg-gray-100 transition-transform duration-300 ease-in-out">
              <img src={assets.user} className="w-20" alt="User" />
              <p className="pt-2 font-medium">User</p>
            </div>
          </div>
        </Link>


      </div>
    </>
  )
}

export default SelectionPage

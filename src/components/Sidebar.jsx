import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const sidebarLinks = [
        { label: "Dashboard", icons: assets.home },
        { label: "Projects", icons: assets.layers },
        { label: "Meetings", icons: assets.videocall },
    ]
    
    return (
        <div className='sidebar h-screen w-[200px] text-white fixed bg-black'>
            <div className='logo flex px-2 pt-6 gap-2'>
                <img className='w-6 invert' src={assets.global} alt="" />
                <p>DevConnect</p>
            </div>
            <div className='sidebar-links  pt-10 p-6 space-y-4 '>
                {sidebarLinks.map((link, index) => (
                    <Link key={index} className="links text-white flex items-center  w-full gap-3 p-2 px-5 hover:bg-white/10 rounded-lg cursor-pointer">
                        <img className="w-4 invert" src={link.icons} />
                        <p className="text-sm  ">{link.label}</p>
                    </Link>
                ))}
            </div>
            <div className='mt-[230px]  px-2'>
                <Link to="/">
                <div className=' flex  items-center gap-2  p-2 text-sm  rounded-lg bg-red-600 hover:bg-red-700 transition duration-300'>
                <img src={assets.logout} className='invert w-4' alt="" />
                <button>Log Out</button>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar

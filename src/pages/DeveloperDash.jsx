import React from 'react'
import { assets } from '../assets/assets'
import Sidebar from '../components/Sidebar'

const DeveloperDash = () => {

    const team = [
        { name: "Alex", role: "Working on GitHub Project", img: assets.user },
        { name: "Julie", role: "UI/UX Designer", img: assets.user },
        { name: "Sam", role: "Backend Developer", img: assets.user }
    ]


    return (
        <div className='h-screen w-full bg-white'>
            <Sidebar/>
            <div className='content-side ml-[200px] h-screen  '>
                <div className='content-header flex justify-between items-center p-2 px-4'>
                    <div className='search-bar  w-[50%]  gap-2  flex'>
                        <input type="searchbox" placeholder='Search for skills, languages' className='border w-full p-2 text-sm rounded-full' />
                        <button className='border px-2 rounded-full text-sm text-white bg-green-500 hover:bg-green-600 transition duration-300'>Search</button>
                    </div>
                    <div className='user-info flex justify-center items-center border p-1 px-4 bg-black text-white gap-2 rounded-full'>
                        <img src={assets.user} className='w-8  p-1 invert' alt="" />
                        <p className='text-sm'>Franklin Smith</p>
                    </div>
                </div>
                <div className='dashboard-content p-2 px-4 w-full '>
                    <div className='flex justify-between items-center '>
                        <h1 className='text-3xl font-bold'>Dashboard</h1>
                        <div className='addproject space-x-4'>
                            <button className='border p-2 text-xs rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300'>+ add project</button>
                        </div>
                    </div>
                    <div className='project-details'>
                        <p className='text-xs pt-2 text-gray-400'>Plan and accomplish important tasks</p>
                        <div className='cards pt-2 flex justify-between'>
                            <div className='border w-[230px]   h-[120px] px-4 p-2 rounded-lg shadow-md hover:shadow-lg transition duration-200' >
                                <div className='flex justify-between  items-center'>
                                    <h3 className='text-lg'>Total Projects</h3>
                                    <img src={assets.arrow} className='w-8 border border-gray-800  rounded-full p-1' alt="" />
                                </div>
                                <p className='text-4xl pt-2'>20</p>
                            </div>
                            <div className='border w-[230px] bg-black text-white h-[120px] px-4 p-2 rounded-lg shadow-md hover:shadow-lg transition duration-200' >
                                <div className='flex justify-between  items-center'>
                                    <h3 className='text-lg'>Running Projects</h3>
                                    <img src={assets.arrow} className='w-8 border border-gray-800 invert   rounded-full p-1' alt="" />
                                </div>
                                <p className='text-4xl pt-2'>4</p>
                            </div>
                            <div className='border w-[230px]  h-[120px] px-4 p-2 rounded-lg shadow-md hover:shadow-lg transition duration-200' >
                                <div className='flex justify-between  items-center'>
                                    <h3 className='text-lg'>Pending Projects</h3>
                                    <img src={assets.arrow} className='w-8 border border-gray-800 rounded-full p-1' alt="" />
                                </div>
                                <p className='text-4xl pt-2'>10</p>
                            </div>
                            <div className='border w-[230px] bg-black text-white h-[120px] px-4 p-2 rounded-lg shadow-md hover:shadow-lg transition duration-200' >
                                <div className='flex justify-between  items-center'>
                                    <h3 className='text-lg'>Ended Projects</h3>
                                    <img src={assets.arrow} className='w-8 border border-gray-800 invert   rounded-full p-1' alt="" />
                                </div>
                                <p className='text-4xl pt-2'>6</p>
                            </div>
                        </div>
                    </div>

                    <div className='projects-info mt-6  flex w-full gap-2 '>
                        <div className='recent-projects w-[60%] 2'>
                            <h2 className='text-xl font-semibold'>Recent Projects</h2>
                            <ul className='pt-2 space-y-2'>
                                <li className='p-2 border rounded-md hover:bg-gray-50 transition'>AI Chat-bot Application</li>
                                <li className='p-2 border rounded-md hover:bg-gray-50 transition'>E-Commerce Website for a Shoe Brand</li>
                                <li className='p-2 border rounded-md hover:bg-gray-50 transition'>Portfolio Website using ThreeJS</li>
                                <li className='p-2 border rounded-md hover:bg-gray-50 transition'>Descriptive Dashboard for Admins</li>
                            </ul>
                        </div>
                        <div className='team-collaboration w-[40%]'>
                            <div className='content border h-full p-2 rounded-lg '>
                                <h2 className='text-xl font-semibold'>Team Members</h2>
                                <ul className="space-y-2 cursor-pointer pt-2">
                                    {team.map((member, index) => (
                                        <li key={index}className="flex items-center gap-2 p-1 border rounded-full hover:bg-gray-50 transition">
                                            <img src={member.img}alt={member.name}className="w-8 h-8 rounded-full border"/>
                                            <div>
                                                <h3 className="font-medium text-sm">{member.name}</h3>
                                                <p className="text-xs text-gray-500">{member.role}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default DeveloperDash

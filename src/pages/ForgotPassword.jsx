import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
        <div className='bg-black h-screen text-white'>
            <Link to="/loginpage"><div className='BackBtn p-4 px-10'><button>Back</button></div></Link>
            <div className='login-form flex justify-center items-center '>
                <div className='form-details border rounded-lg w-[300px] h-auto text-center  mt-10'>
                    <div className='logo flex justify-center items-center pt-4 gap-2'>
                        <img className='w-6 invert' src={assets.global} alt="" />
                        <h1>DevConnect</h1>
                    </div>
                    <div className='pt-4 text-center p-1'>
                        <h1 className='text-lg font-semibold'>Forgot Your Password ? Reset Your Access Here.</h1>
                    </div>
                    <div className='inputs mt-4  w-full px-2 space-y-2  mb-10 '>
                        <input type="email" className='w-full p-2 text-sm rounded-lg text-black' placeholder='Enter your email' /><br />
                        <div><button className='bg-blue-500 w-full rounded-full p-2 text-sm hover:bg-blue-600 transition duratio-300 '>Send Code</button></div>
                    </div>

                </div>

            </div>

        </div>
  )
}

export default ForgotPassword

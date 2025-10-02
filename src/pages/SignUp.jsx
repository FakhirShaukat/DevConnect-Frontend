import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const SignUp = () => {
    return (
        <div className='bg-black h-screen text-white'>
            <Link to="/loginpage"><div className='BackBtn p-4 px-10'><button>Back</button></div></Link>
            <div className='login-form flex justify-center items-center '>
                <div className='form-details border rounded-lg w-[400px] h-auto text-center  mt-5'>
                    <div className='logo flex justify-center items-center pt-4 gap-2'>
                        <img className='w-6 invert' src={assets.global} alt="" />
                        <h1>DevConnect</h1>
                    </div>
                    <div className='pt-4 text-center'>
                        <h1 className='text-xl font-semibold'>Create New Account.</h1>
                        <p className='pt-1 text-xs text-gray-400'>Unleash your potential</p>
                    </div>
                    <div className='inputs mt-2 w-full px-2 space-y-2  '>
                        <input type="email" className='w-full p-2 text-sm rounded-lg text-black' placeholder='Enter First Name' required /><br />
                        <input type="password" className='w-full p-2 text-sm rounded-lg  text-black' placeholder='Enter Last Name' required />
                        <input type="password" className='w-full p-2 text-sm rounded-lg  text-black' placeholder='Enter your Email' required />
                        <input type="password" className='w-full p-2 text-sm rounded-lg  text-black' placeholder='Enter your Password' required />
                    </div>
                    <div className='px-2'><button className='mt-3 w-full p-2 font-semibold text-sm rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300'>Register</button></div>
                    <div className='divider mt-2 flex justify-center items-center p-2 gap-2 text-sm text-gray-500'>
                        <div className='border border-gray-500 w-full'></div>
                        <div>OR</div>
                        <div className='border border-gray-500  w-full'></div>
                    </div>
                    <div className='google-login px-2  pb-6'>
                        <div className='flex justify-center text-sm cursor-pointer rounded-full p-2 border hover:bg-white hover:text-black transition duration-300 items-center gap-2'>
                            <p><img className='w-4' src={assets.google} alt="" /></p>
                            <p>Continue with Google</p>
                        </div>
                    </div>



                </div>

            </div>

        </div>
    )
}

export default SignUp

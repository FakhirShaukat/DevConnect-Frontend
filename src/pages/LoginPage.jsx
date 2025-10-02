import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const username = 'admin@example.com'
    const password = '123'

    const handlelogin = () => {
        if (user === username && pass === password) {
            alert("Login Successfull !");
            navigate("/developerdashboard");
        } else {
            alert("Invalid credentials !")
        }

    }


    return (
        <div className='bg-black h-screen text-white'>
            <Link to="/selectionpage"><div className='BackBtn p-4 px-10'><button>Back</button></div></Link>
            <div className='login-form flex justify-center items-center '>
                <div className='form-details border rounded-lg w-[300px] h-auto text-center  mt-10'>
                    <div className='logo flex justify-center items-center pt-4 gap-2'>
                        <img className='w-6 invert' src={assets.global} alt="" />
                        <h1>DevConnect</h1>
                    </div>
                    <div className='pt-4 text-center'>
                        <h1 className='text-xl font-semibold'>Sign In To Your Account.</h1>
                        <p className='pt-1 text-xs text-gray-400'>Unleash your potential</p>
                    </div>
                    <div className='inputs mt-4 w-full px-2 space-y-2  '>
                        <input type="email" className='w-full p-2 text-sm rounded-lg text-black' placeholder='Enter your email' required onChange={(e) => setUser(e.target.value)} /><br />
                        <input type="password" className='w-full p-2 text-sm rounded-lg  text-black' placeholder='Enter your password' required onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <div className='px-2'><button onClick={handlelogin} className='mt-4 w-full p-2 font-semibold rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300'>Login</button></div>
                    <div className='text-xs mt-2 leading-normal'>
                        <p>Don't have and account? <a href="/signup" className='text-blue-800'>SignUp</a></p>
                        <a href="/forgotpassword" className='text-blue-800'>Forgot Password ?</a>
                    </div>
                    <div className='divider mt-4 flex justify-center items-center p-2 gap-2 text-sm text-gray-500'>
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

export default LoginPage

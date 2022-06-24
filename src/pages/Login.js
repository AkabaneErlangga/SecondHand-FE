import React, {useState} from 'react'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Login = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block bg-register'></div>    
            <div className='flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto mx-auto bg-gray-100 p-8 px-8 rounded-2xl'>
                    <h2 className=' text-35px text-center font-bold'>SIGN IN</h2>
                    <div className='flex flex-col text-black py-2 '>
                        <label>Email</label>
                        <input className='rounded-xl p-2 text-black' placeholder='Example: johndee@gmail.com' type='text' />
                    </div>
                    <div className='flex flex-col py-2 text-black relative'>
                        
                        <label>Password</label>
                        <input className='rounded-md p-1 text-black' placeholder='Masukkan password' type={(open === false)? 'password' : 'text'} />
                        
                        <div className='text-2xl absolute right-2 bottom-4'>
                            {
                                (open === false)? <AiFillEyeInvisible onClick={toggle}/>:
                                <AiFillEye onClick={toggle}/>
                            }
                        </div>
                    </div>
                    <button className='w-full my-5 py-2 bg-purple-500 rounded-md font-bold shadow-lg shadow-purple-500/50 hover:shadow-purple/40 text-white'>Masuk</button>
    
                    <div>
                        <p className='text-black text-center p-5'>Belum punya akun? <Link to="/register" className='text-purple-500'>Daftar di sini</Link></p>
                    </div>
                </form>
            </div>
    
        </div>
      )
}

export default Login
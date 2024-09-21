import { useNavigate } from 'react-router-dom'
import Logo from '../../public/wlogo.png'
export default function Login() {

    const Navigate = useNavigate()

    function handleLogin(){
        console.log('error')
        Navigate('/')
    }

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100 flex justify-center items-center w-full h-full pb-16">
            <div className="p-12 bg-slate-200 flex flex-col gap-4 rounded-md text-center items-center justify-center">
                <img className='w-24 h-24 p-2' src={Logo} />
                <h1 className='text-gray-900 dark:text-white font-semibold'>Space Commerce</h1>
                <input className='bg-slate-200 border border-slate-500 text-slate-500 placeholder:text-slate-500 rounded-md px-1 py-2 w-full' placeholder='Username' />
                <input className='bg-slate-200 border border-slate-500 text-slate-500 placeholder:text-slate-500 rounded-md px-1 py-2 w-full' placeholder='Password' />
                <div className='flex flex-row w-full justify-between items-center gap-10'>
                    <h1 className='text-gray-900 font-semibold dark:text-white'>Forgot password</h1>
                    <h1 className='text-gray-900 font-semibold dark:text-white'>Create Account</h1>
                </div>
                <button onClick={handleLogin} className='bg-slate-800 hover:bg-slate-600 border border-slate-500 text-slate-200 placeholder:text-slate-500 rounded-md px-1 py-2 w-full'>Login</button>
            </div>
        </div>
    )
}
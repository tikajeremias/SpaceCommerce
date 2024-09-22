import Logo from '../../public/wlogo.png'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

    const Navigate = useNavigate()

    function handleLogin() {
        console.log('error')
        Navigate('/login')
    }

    return (
        <div className="fixed w-full h-16 top-0 flex justify-center items-center">
            <div className="w-[70%] h-full bg-white dark:bg-gray-900 flex justify-between items-center py-2">
                <div className="h-full w-fit flex items-center justify-start">
                    <img className='h-full p-2' src={Logo} />
                    <h1 className='text-gray-900 font-semibold dark:text-white'>Space Commerce</h1>
                </div>
                <div className="h-full w-fit flex items-center justify-start gap-10">
                    <h1 className='text-gray-900 font-semibold dark:text-white cursor-pointer'>Create Account</h1>
                    <h1 onClick={handleLogin} className='text-gray-900 font-semibold dark:text-white cursor-pointer'>Login</h1>
                </div>
            </div>
        </div>
    )
}
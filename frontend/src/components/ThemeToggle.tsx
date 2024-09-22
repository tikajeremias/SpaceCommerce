import { useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';

export default function ThemeToggle() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button onClick={toggleTheme} className="p-2 w-10 bg-gray-200 dark:bg-gray-800 rounded text-gray-900 dark:text-gray-100">
            {theme === 'light' ? <CiDark className='w-full h-full' /> : <CiLight className='w-full h-full' />}
        </button>
    );
}
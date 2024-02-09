/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { LoggedUser } from '../../../../common/types';

const DropdownUser = () => {
    const navigate = useNavigate();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [user, setUser] = useState<LoggedUser | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div className='relative'>
            <Link
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='flex items-center gap-4'
                to='#'
            >
                <span className='text-right'>
                    <span className='block text-sm font-medium'>
                        {user?.fullname}
                    </span>
                    <span className='block text-xs'>{user?.role}</span>
                </span>

                <div className='p-3 bg-gray-300 rounded-full'>
                    <BiUser className='text-2xl' />
                </div>
            </Link>

            <div
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-7 flex w-[180px] gap-4 px-6 py-5 flex-col rounded-lg border border-stroke bg-white shadow-default ${
                    dropdownOpen === true ? 'block' : 'hidden'
                }`}
            >
                <Link
                    to='/profile'
                    className='flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-blue-500 lg:text-base'
                >
                    <BiUser className='text-lg' />
                    My Profile
                </Link>
                <button
                    onClick={() => navigate('/login')}
                    className='flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-blue-500 lg:text-base'
                >
                    <BiLogOut className='text-lg text-red-600' />
                    <span className='text-red-600'>Log Out</span>
                </button>
            </div>
        </div>
    );
};

export default DropdownUser;

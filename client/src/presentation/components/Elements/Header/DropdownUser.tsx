/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

type Props = {
    setLogoutModalOpen(value: boolean): void;
};

const DropdownUser = ({ setLogoutModalOpen }: Props) => {
    // const user = useLoggedUser();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className='relative'>
            {/* {user ? (
                <Link
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className='flex items-center gap-4'
                    to='#'
                >
                    <span className='text-right'>
                        <span className='block text-sm font-medium'>
                            {user?.fullName}
                        </span>
                        <span className='block text-xs'>
                            {user?.role ? user?.role : '-'}
                        </span>
                    </span>

                    <div className='p-3 bg-gray-300 rounded-full'>
                        <BiUser className='text-2xl' />
                    </div>
                </Link>
            ) : (
                <span className='block text-xs'>-</span>
            )} */}
            <Link
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='flex items-center gap-4'
                to='#'
            >
                <span className='text-right'>
                    <span className='block text-sm font-medium'>Admin</span>
                    <span className='block text-xs'>Admin</span>
                </span>

                <div className='p-3 bg-gray-300 rounded-full'>
                    <BiUser className='text-2xl' />
                </div>
            </Link>
            <div
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-7 flex w-56 gap-6 px-6 py-5 flex-col rounded-lg border border-stroke bg-white shadow-default ${
                    dropdownOpen === true ? 'block' : 'hidden'
                }`}
            >
                <button
                    onClick={() => setLogoutModalOpen(true)}
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

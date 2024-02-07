/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const DropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();

    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <div className='relative'>
            <Link
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='flex items-center gap-4'
                to='#'
            >
                <span className='hidden text-right lg:block'>
                    <span className='block text-sm font-medium'>
                        Abdul Azis
                    </span>
                    <span className='block text-xs'>Asesi</span>
                </span>

                <Avatar
                    size='large'
                    icon={<BiUser />}
                />
            </Link>

            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-4 flex w-[180px] gap-4 px-6 py-5 flex-col rounded-lg border border-stroke bg-white shadow-default ${
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

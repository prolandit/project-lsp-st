/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import UserRemoteDataSource from '../../../../data/datasources/UserRemoteDataSource';
// import useLoggedUser from '../../../../common/hooks/useLoggedUser';

type Props = {
    setLogoutModalOpen(value: boolean): void;
};

interface ProfileData {
    username: string;
    namaLengkap: string;
    role: string;
}

const DropdownUser = ({ setLogoutModalOpen }: Props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData | null>(null);

    useEffect(() => {
        getUserByToken();
    }, []);

    const getUserByToken = async () => {
        try {
            const token = localStorage.getItem('token') ?? '';
            if (token) {
                const data = await UserRemoteDataSource.getLoggedUser(token);
                if (data && typeof data === 'object') {
                    setProfileData({
                        username: data.username,
                        namaLengkap: data.namaLengkap,
                        role: data.role,
                    });
                } else {
                    console.error('Data format is incorrect');
                }
            } else {
                console.error('Token not found');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className='relative'>
            {profileData ? (
                <Link
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className='flex items-center gap-4'
                    to='#'
                >
                    <span className='text-right'>
                        <span className='block text-sm font-medium'>
                            {profileData.namaLengkap}
                        </span>
                        <span className='block text-xs'>
                            {profileData.role || '-'}
                        </span>
                    </span>

                    <div className='p-3 bg-gray-300 rounded-full'>
                        <BiUser className='text-2xl' />
                    </div>
                </Link>
            ) : (
                <span className='block text-xs'>-</span>
            )}
            <div
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-7 flex w-56 gap-6 px-6 py-5 flex-col rounded-lg border border-stroke bg-white shadow-default ${dropdownOpen === true ? 'block' : 'hidden'
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

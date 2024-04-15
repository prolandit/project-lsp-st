import { BiGroup, BiPlus, BiUser } from 'react-icons/bi';
import { FaWpforms } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { MenuType } from './types';

export const superUserMenus: MenuType[] = [
    {
        name: 'Beranda',
        path: '/',
        icon: <MdDashboard />,
    },
    {
        name: 'Profile',
        path: '/profile',
        icon: <BiUser />,
    },
    {
        name: 'Pengguna',
        path: '/users',
        icon: <BiGroup />,
    },
];

export const asesiAsesorMenus: MenuType[] = [
    {
        name: 'Profile',
        path: '/profile',
        icon: <BiUser />,
    },
    {
        name: 'Permohonan Sertifikasi',
        path: '/permohonan-sertifikasi',
        icon: <FaWpforms />,
    },
];

export const adminLspMenus: MenuType[] = [
    {
        name: 'Data Asesi',
        path: '/data-asesi',
        icon: <BiGroup />,
    },
    {
        name: 'User',
        icon: <BiUser />,
        path: '/user',
        children: [
            {
                name: 'Daftar Akun',
                path: '/user/akun',
                icon: <BiUser />,
            },
            {
                name: 'Tambah Akun',
                path: '/user/buat-akun',
                icon: <BiPlus />,
            },
        ],
    },
];

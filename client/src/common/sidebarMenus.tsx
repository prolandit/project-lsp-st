import { BiGroup, BiPlus, BiUser } from 'react-icons/bi';
import { FaWpforms } from 'react-icons/fa';
import { GoTasklist } from 'react-icons/go';
import { IoCalendarOutline } from 'react-icons/io5';
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
        path: '/pengguna',
        icon: <BiGroup />,
    },
    {
        name: 'TUK',
        path: '/tuk',
        icon: <GoTasklist />,
    },
    {
        name: 'Asesor',
        path: '/asesor',
        icon: <BiGroup />,
    },
    {
        name: 'Jadwal Sertifikasi',
        icon: <IoCalendarOutline />,
        path: '/jadwal-sertifikasi',
        children: [
            {
                name: 'Daftar Asesmen',
                path: '/jadwal-sertifikasi/daftar-asesmen',
                icon: <IoCalendarOutline />,
            },
        ],
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

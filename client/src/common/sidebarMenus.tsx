import { BiGroup, BiUser } from 'react-icons/bi';
import { FaWpforms } from 'react-icons/fa';
import { RiUserAddLine } from 'react-icons/ri';
import { PageRoutes } from './enum';

export const asesiAsesorMenus = [
    {
        name: 'Profile',
        path: '/profile',
        icon: <BiUser />,
    },
    {
        name: 'Permohonan Sertifikasi',
        path: PageRoutes.PERMOHONAN_SERTIFIKASI,
        icon: <FaWpforms />,
    },
];

export const adminLspMenus = [
    {
        name: 'Data Asesi',
        path: PageRoutes.ADMIN_LSP_ASESI,
        icon: <BiGroup />,
    },
    {
        name: 'Buat Akun',
        path: PageRoutes.ADMIN_LSP_CREATE_ACCCOUNT,
        icon: <RiUserAddLine />,
    },
];

import { BiGroup, BiUser } from 'react-icons/bi';
import { FaWpforms } from 'react-icons/fa';

export const asesiAsesorMenus = [
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

export const adminLspMenus = [
    {
        name: 'Data Asesi',
        path: 'admin/lsp/asessions',
        icon: <BiGroup />,
    },
];
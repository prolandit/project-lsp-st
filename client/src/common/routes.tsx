import BerandaLayout from '../presentation/components/Layouts/BerandaLayout';
import MainLayout from '../presentation/components/Layouts/MainLayout';
import EditAsesorPage from '../presentation/pages/Asesor/EditAsesorPage';
import ListAsesorPage from '../presentation/pages/Asesor/ListAsesorPage';
import TambahAsesorPage from '../presentation/pages/Asesor/TambahAsesorPage';
import ChangePasswordPage from '../presentation/pages/Auth/ChangePasswordPage';
import LoginPage from '../presentation/pages/Auth/LoginPage';
import RegisterPage from '../presentation/pages/Auth/RegisterPage';
import AssignAsesmenPage from '../presentation/pages/JadwalSertifikasi/AssignAsesmenPage';
import EditAsesmentPage from '../presentation/pages/JadwalSertifikasi/EditAsesmentPage';
import ListDaftarAsesmenPage from '../presentation/pages/JadwalSertifikasi/ListDaftarAsesmenPage';
import TambahAsesmentPage from '../presentation/pages/JadwalSertifikasi/TambahAsesmenPage';
import NotFoundPage from '../presentation/pages/NotFoundPage';
import EditPenggunaPage from '../presentation/pages/Pengguna/EditPenggunaPage';
import ListPenggunaPage from '../presentation/pages/Pengguna/ListPenggunaPage';
import TambahPenggunaPage from '../presentation/pages/Pengguna/TambahPenggunaPage';
import EditBuktiAdministratifPage from '../presentation/pages/Persyaratan/BuktiAdministratif/EditBuktiAdministratifPage';
import ListBuktiAdministratifPage from '../presentation/pages/Persyaratan/BuktiAdministratif/ListBuktiAdministratifPage';
import TambahBuktiAdministratifPage from '../presentation/pages/Persyaratan/BuktiAdministratif/TambahBuktiAdministratifPage';
import EditMukPage from '../presentation/pages/Persyaratan/Muk/EditMukPage';
import ListMukPage from '../presentation/pages/Persyaratan/Muk/ListMukPage';
import TambahMukPage from '../presentation/pages/Persyaratan/Muk/TambahMukPage';
import EditPersyaratanDasarPage from '../presentation/pages/Persyaratan/PersyaratanDasar/EditPersyaratanDasarPage';
import ListPersyaratanDasarPage from '../presentation/pages/Persyaratan/PersyaratanDasar/ListPersyaratanDasarPage';
import TambahPersyaratanDasarPage from '../presentation/pages/Persyaratan/PersyaratanDasar/TambahPersyaratanDasarPage';
import EditPersyaratanPendaftaranPage from '../presentation/pages/Persyaratan/PersyaratanPendaftaran/EditPersyaratanPendaftaranPage';
import ListPersyaratanPendaftaranPage from '../presentation/pages/Persyaratan/PersyaratanPendaftaran/ListPersyaratanPendaftaranPage';
import TambahPersyaratanPendaftaranPage from '../presentation/pages/Persyaratan/PersyaratanPendaftaran/TambahPersyaratanPendaftaranPage';
import ProfilePage from '../presentation/pages/Profile/ProfilePage';
import EditTukPage from '../presentation/pages/Tuk/EditTukPage';
import ListTukPage from '../presentation/pages/Tuk/ListTukPage';
import TambahTukPage from '../presentation/pages/Tuk/TambahTukPage';
import { RouteParam } from './types';

const routes: RouteParam[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <BerandaLayout />,
            },
            {
                path: '/profile',
                element: <ProfilePage />,
            },
            {
                path: '/pengguna',
                element: <ListPenggunaPage />,
            },
            {
                path: '/pengguna/tambah',
                element: <TambahPenggunaPage />,
            },
            {
                path: '/pengguna/edit/:id',
                element: <EditPenggunaPage />,
            },
            {
                path: '/tuk',
                element: <ListTukPage />,
            },
            {
                path: '/tuk/tambah',
                element: <TambahTukPage />,
            },
            {
                path: '/tuk/edit/:id',
                element: <EditTukPage />,
            },
            {
                path: '/asesor',
                element: <ListAsesorPage />,
            },
            {
                path: '/asesor/tambah',
                element: <TambahAsesorPage />,
            },
            {
                path: '/asesor/edit/:id',
                element: <EditAsesorPage />,
            },
            {
                path: '/jadwal-sertifikasi/daftar-asesmen',
                element: <ListDaftarAsesmenPage />,
            },
            {
                path: '/jadwal-sertifikasi/daftar-asesmen/tambah',
                element: <TambahAsesmentPage />,
            },
            {
                path: '/jadwal-sertifikasi/daftar-asesmen/edit/:id',
                element: <EditAsesmentPage />,
            },
            {
                path: '/jadwal-sertifikasi/daftar-asesmen/assign/:id',
                element: <AssignAsesmenPage />,
            },
            {
                path: '/persyaratan/persyaratan-dasar',
                element: <ListPersyaratanDasarPage />,
            },
            {
                path: '/persyaratan/persyaratan-dasar/tambah',
                element: <TambahPersyaratanDasarPage />,
            },
            {
                path: '/persyaratan/persyaratan-dasar/edit/:id',
                element: <EditPersyaratanDasarPage />,
            },
            {
                path: '/persyaratan/persyaratan-pendaftaran',
                element: <ListPersyaratanPendaftaranPage />,
            },
            {
                path: '/persyaratan/persyaratan-pendaftaran/tambah',
                element: <TambahPersyaratanPendaftaranPage />,
            },
            {
                path: '/persyaratan/persyaratan-pendaftaran/edit/:id',
                element: <EditPersyaratanPendaftaranPage />,
            },
            {
                path: '/persyaratan/materi-uji-kompetensi',
                element: <ListMukPage />,
            },
            {
                path: '/persyaratan/materi-uji-kompetensi/tambah',
                element: <TambahMukPage />,
            },
            {
                path: '/persyaratan/materi-uji-kompetensi/edit/:id',
                element: <EditMukPage />,
            },
            {
                path: '/persyaratan/bukti-administratif',
                element: <ListBuktiAdministratifPage />,
            },
            {
                path: '/persyaratan/bukti-administratif/tambah',
                element: <TambahBuktiAdministratifPage />,
            },
            {
                path: '/persyaratan/bukti-administratif/edit/:id',
                element: <EditBuktiAdministratifPage />,
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/ubah-password',
        element: <ChangePasswordPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];

export default routes;

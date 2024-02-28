import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Button from '../Elements/Button';
import Header from '../Elements/Header';
import Modal from '../Elements/Modal';
import Sidebar from '../Elements/Sidebar';
import AnimationContainer from '../Fragments/AnimationContainer';

const MainLayout = () => {
    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const onLogout = () => {
        setModalOpen(false);

        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <AnimationContainer className='bg-gray-100'>
            <div className='flex flex-row h-screen overflow-hidden'>
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                <div className='relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto'>
                    <Header
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                        setLogoutModalOpen={setModalOpen}
                    />
                    <main>
                        <Outlet />
                    </main>
                </div>
                <Modal
                    show={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onConfirm={onLogout}
                    onCloseBuilder={<Button type='button'>Batal</Button>}
                    onConfirmBuilder={
                        <Button
                            type='button'
                            className='bg-red-500 hover:bg-red-400'
                        >
                            Ya
                        </Button>
                    }
                >
                    <span className='font-semibold text-red-600'>
                        Peringatan!!!
                    </span>
                    <hr />
                    <span>Anda yakin ingin keluar?</span>
                </Modal>
            </div>
        </AnimationContainer>
    );
};

export default MainLayout;

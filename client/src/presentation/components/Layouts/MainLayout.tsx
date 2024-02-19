import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Elements/Header';
import LogoutModal from '../Elements/Header/LogoutModal';
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
                <LogoutModal
                    show={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onLogout={onLogout}
                />
            </div>
        </AnimationContainer>
    );
};

export default MainLayout;

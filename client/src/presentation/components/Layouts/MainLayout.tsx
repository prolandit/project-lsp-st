import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Elements/Header';
import Sidebar from '../Elements/Sidebar';

const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='bg-gray-100'>
            <div className='flex flex-row h-screen overflow-hidden'>
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                <div className='relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto'>
                    <Header
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                    />
                    <main className='my-8'>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;

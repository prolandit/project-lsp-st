import { ReactNode, useState } from 'react';
import Header from '../Elements/Header';
import Sidebar from '../Elements/Sidebar';

type Props = {
    children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
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
                    <main className='my-8'>{children}</main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;

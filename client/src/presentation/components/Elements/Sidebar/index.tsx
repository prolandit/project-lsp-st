/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useRef } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { Role } from '../../../../common/enum';
import { useAppSelector } from '../../../../common/hooks';
import {
    adminLspMenus,
    asesiAsesorMenus,
} from '../../../../common/sidebarMenus';
import SidebarLink from './SidebarLink';

type Props = {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
    const user = useAppSelector((state) => state.user.user);
    const sidebar = useRef<any>(null);

    const menus = useMemo(() => {
        return user?.role?.toLowerCase() === Role.ADMIN_LSP
            ? adminLspMenus
            : asesiAsesorMenus;
    }, [user]);

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-blue-800 duration-300 ease-linear shadow-md lg:static lg:translate-x-0 ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className='flex items-center justify-between gap-2 px-6 py-5 lg:py-6'>
                <NavLink to='/'>
                    <span className='text-xl font-semibold text-white'>
                        Sistem LSP
                    </span>
                </NavLink>

                <BiArrowBack
                    className='block text-xl text-white lg:hidden'
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls='sidebar'
                    aria-expanded={sidebarOpen}
                />
            </div>

            <div className='flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar'>
                <nav className='px-4 py-4 lg:px-6'>
                    <div>
                        <h3 className='mb-4 text-sm font-semibold text-white'>
                            MENU
                        </h3>
                        <ul className='flex flex-col gap-2'>
                            {menus.map((menu) => {
                                return (
                                    <SidebarLink
                                        key={menu.name}
                                        to={menu.path}
                                    >
                                        {menu.icon}
                                        {menu.name}
                                    </SidebarLink>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;

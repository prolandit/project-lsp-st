import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MenuType } from '../../../../common/types';
import SidebarLink from './SidebarLink';
import SidebarLinkGroup from './SidebarLinkGroup';

type Props = {
    menu: MenuType;
    pathname: string;
    setSidebarExpanded: (value: boolean) => void;
    sidebarExpanded: boolean;
};

const SidebarMenuItem = ({
    menu,
    pathname,
    setSidebarExpanded,
    sidebarExpanded,
}: Props) => {
    const hasChildren = menu.children && menu.children.length > 0;

    return (
        <div key={menu.name}>
            {hasChildren ? (
                <SidebarLinkGroup
                    activeCondition={
                        pathname === '/' || pathname.includes(menu.path)
                    }
                >
                    {(handleClick, open) => (
                        <>
                            <SidebarLink
                                to={menu.path}
                                className={
                                    pathname.includes(menu.path)
                                        ? 'bg-blue-900'
                                        : ''
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    sidebarExpanded
                                        ? handleClick()
                                        : setSidebarExpanded(true);
                                }}
                            >
                                <div className='flex flex-row items-center justify-between w-full'>
                                    <div className='flex flex-row items-center justify-start gap-2'>
                                        {menu.icon}
                                        {menu.name}
                                    </div>
                                    <div>
                                        {open ? (
                                            <IoIosArrowUp />
                                        ) : (
                                            <IoIosArrowDown />
                                        )}
                                    </div>
                                </div>
                            </SidebarLink>
                            <div
                                className={`translate transform overflow-hidden ${
                                    !open && 'hidden'
                                }`}
                            >
                                <ul className='mt-4 mb-5.5 flex flex-col gap-2.5 pl-6'>
                                    {menu.children?.map((childMenu) => (
                                        <li key={childMenu.name}>
                                            <SidebarMenuItem
                                                key={childMenu.path}
                                                menu={childMenu}
                                                pathname={pathname}
                                                setSidebarExpanded={
                                                    setSidebarExpanded
                                                }
                                                sidebarExpanded={
                                                    sidebarExpanded
                                                }
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </SidebarLinkGroup>
            ) : (
                <SidebarLink
                    to={menu.path}
                    className={pathname === menu.path ? 'bg-blue-900' : ''}
                >
                    {menu.icon}
                    {menu.name}
                </SidebarLink>
            )}
        </div>
    );
};

export default SidebarMenuItem;

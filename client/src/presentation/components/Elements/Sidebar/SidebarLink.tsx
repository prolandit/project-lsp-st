import { NavLink, useLocation } from 'react-router-dom';

type Props = {
    to: string;
    children: React.ReactNode;
};

const SidebarLink = ({ to, children }: Props) => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <NavLink
            to={to}
            className={`group relative flex items-center gap-2 rounded-md px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-blue-900  ${
                pathname === to && 'bg-blue-900'
            }`}
        >
            {children}
        </NavLink>
    );
};

export default SidebarLink;

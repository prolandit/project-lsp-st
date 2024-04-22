import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type Props = {
    to: string;
    className?: string;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const SidebarLink = ({ to, children, onClick, className }: Props) => {
    return (
        <NavLink
            to={to}
            className={twMerge(
                'group relative flex items-center gap-2 rounded-md px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-blue-900',
                className
            )}
            onClick={onClick}
        >
            {children}
        </NavLink>
    );
};

export default SidebarLink;

import { ReactNode, useState } from 'react';

type Props = {
    children: (handleClick: () => void, open: boolean) => ReactNode;
    activeCondition: boolean;
};

const SidebarLinkGroup = ({ children, activeCondition }: Props) => {
    const [open, setOpen] = useState<boolean>(activeCondition);

    const handleClick = () => {
        setOpen(!open);
    };

    return <li>{children(handleClick, open)}</li>;
};

export default SidebarLinkGroup;

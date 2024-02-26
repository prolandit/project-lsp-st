import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { Role } from '../../../common/enum';
import { useAppSelector } from '../../../common/hooks';

const IndexLayout = () => {
    const user = useAppSelector((state) => state.user.user);

    const indexElement = useMemo(() => {
        return user?.role?.toLowerCase() === Role.ADMIN_LSP ? (
            <Navigate to='/admin/lsp/asessions' />
        ) : (
            <Navigate to='/profile' />
        );
    }, [user]);

    return indexElement;
};

export default IndexLayout;

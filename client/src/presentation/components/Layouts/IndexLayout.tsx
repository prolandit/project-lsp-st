import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { Role } from '../../../common/enum';
import useLoggedUser from '../../../common/hooks/useLoggedUser';

const IndexLayout = () => {
    const user = useLoggedUser();

    const indexElement = useMemo(() => {
        return user?.role?.toLowerCase() === Role.ADMIN_LSP ? (
            <Navigate to='/admin/lsp/data-asesi' />
        ) : (
            <Navigate to='/profile' />
        );
    }, [user]);

    return indexElement;
};

export default IndexLayout;

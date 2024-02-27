import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { PageRoutes, Role } from '../../../common/enum';
import useLoggedUser from '../../../common/hooks/useLoggedUser';

const IndexLayout = () => {
    const user = useLoggedUser();

    const indexElement = useMemo(() => {
        return user?.role?.toLowerCase() === Role.ADMIN_LSP ? (
            <Navigate to={PageRoutes.ADMIN_LSP_ASESI} />
        ) : (
            <Navigate to={PageRoutes.PROFILE} />
        );
    }, [user]);

    return indexElement;
};

export default IndexLayout;

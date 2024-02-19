import { useMemo } from 'react';
import { Role } from '../../../common/enum';
import { useLoggedUser } from '../../../common/hooks/useLoggedUser';
import AsesiProfilePage from '../../pages/AsesiProfilePage';
import AsesorProfilePage from '../../pages/AsesorProfilePage';

const ProfileLayout = () => {
    const user = useLoggedUser();

    const profileElement = useMemo(() => {
        return user?.role?.toLowerCase() === Role.ASESI ? (
            <AsesiProfilePage />
        ) : (
            <AsesorProfilePage />
        );
    }, [user]);

    return profileElement;
};

export default ProfileLayout;

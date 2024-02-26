import { useMemo } from 'react';
import { Role } from '../../../common/enum';
import useLoggedUser from '../../../common/hooks/useLoggedUser';
import AsesiProfilePage from '../../pages/asesi/AsesiProfilePage';
import AsesorProfilePage from '../../pages/asesor/AsesorProfilePage';

const ProfileLayout = () => {
    const user = useLoggedUser();

    const profileElement = useMemo(() => {
        return user?.role?.toLowerCase() === Role.ASESI ? (
            <AsesiProfilePage user={user} />
        ) : (
            <AsesorProfilePage user={user} />
        );
    }, [user]);

    return profileElement;
};

export default ProfileLayout;

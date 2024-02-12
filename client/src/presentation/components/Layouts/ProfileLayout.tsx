import { useEffect, useMemo, useState } from 'react';
import { LoggedUser } from '../../../common/types';
import AsesiProfilePage from '../../pages/AsesiProfilePage';
import AsesorProfilePage from '../../pages/AsesorProfilePage';

const ProfileLayout = () => {
    const [user, setUser] = useState<LoggedUser | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const profileElement = useMemo(() => {
        return user?.role.toLowerCase() === 'asesi' ? (
            <AsesiProfilePage />
        ) : (
            <AsesorProfilePage />
        );
    }, [user]);

    return profileElement;
};

export default ProfileLayout;

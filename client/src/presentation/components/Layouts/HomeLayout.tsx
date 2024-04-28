import AssesmentSchedulePage from '../../pages/Home/AssesmentSchedulePage';

const HomeLayout = () => {
    // const user = useLoggedUser();

    // const indexElement = useMemo(() => {
    //     return user?.role?.toLowerCase() === Role.ADMIN_LSP ? (
    //         <Navigate to='/data-asesi' />
    //     ) : (
    //         <Navigate to='/profile' />
    //     );
    // }, [user]);

    return <AssesmentSchedulePage />;
};

export default HomeLayout;

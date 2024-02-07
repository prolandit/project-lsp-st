import MainLayout from '../components/Layouts/MainLayout';

const AsesiProfilePage = () => {
    return (
        <MainLayout>
            <div className='flex flex-row gap-4 mx-12'>
                <div className='w-full p-2 bg-white rounded-md shadow-sm drop-shadow-sm md:p-6 2xl:p-10'>
                    <span>Data Profile</span>
                </div>
                <div className='w-full p-4 bg-white rounded-md shadow-sm drop-shadow-sm md:p-6 2xl:p-10'></div>
            </div>
        </MainLayout>
    );
};

export default AsesiProfilePage;

import { useParams } from 'react-router-dom';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '../../components/Elements/Tabs';
import AssignAsesorTabView from './TabView/AssignAsesorTabView';

const AssignAsesmenPage = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <Tabs defaultValue='asesor'>
            <div className='flex flex-row items-center mx-4 my-6 lg:mx-8'>
                <TabsList className='bg-white '>
                    <TabsTrigger
                        value='asesor'
                        className='w-full'
                    >
                        Asesor
                    </TabsTrigger>
                    <TabsTrigger
                        value='asesor-penyelia'
                        className='w-full'
                    >
                        Asesor Penyelia
                    </TabsTrigger>
                    <TabsTrigger
                        value='asesi'
                        className='w-full'
                    >
                        Asesi
                    </TabsTrigger>
                    <TabsTrigger
                        value='admin'
                        className='w-full'
                    >
                        Admin
                    </TabsTrigger>
                    <TabsTrigger
                        value='pleno'
                        className='w-full'
                    >
                        Pleno
                    </TabsTrigger>
                </TabsList>
            </div>
            <div className='flex flex-col mx-3 my-6 bg-white rounded-t-lg lg:mx-8'>
                <div className='px-4 py-4 lg:px-6'>
                    <TabsContent value='asesor'>
                        <AssignAsesorTabView />
                    </TabsContent>
                    <TabsContent value='asesor-penyelia'>
                        <div>Asesor Penyelia</div>
                    </TabsContent>
                    <TabsContent value='asesi'>
                        <div>Asesi</div>
                    </TabsContent>
                    <TabsContent value='admin'>
                        <div>Admin</div>
                    </TabsContent>
                    <TabsContent value='pleno'>
                        <div>Pleno</div>
                    </TabsContent>
                </div>
            </div>
        </Tabs>
    );
};

export default AssignAsesmenPage;

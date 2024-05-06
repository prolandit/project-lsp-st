import { useParams } from 'react-router-dom';
import { localDateString } from '../../../common/utils';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '../../components/Elements/Tabs';
import AssignAdminView from './AssignView/AssignAdminView';
import AssignAsesiView from './AssignView/AssignAsesiView';
import AssignAsesorPenyaliaView from './AssignView/AssignAsesorPenyaliaView';
import AssignAsesorView from './AssignView/AssignAsesorView';
import AssignPlenoView from './AssignView/AssignPlenoView';

const AssignAsesmenPage = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <Tabs defaultValue='asesor'>
            <div className='flex flex-row items-center mx-4 my-6 lg:mx-8'>
                <TabsList className='bg-white'>
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
                <div className='px-4 py-7 lg:px-6'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-6 px-4 py-4 border border-gray-200 rounded-md lg:px-6'>
                            <span className='text-xl font-semibold text-center'>
                                Detail Asesmen
                            </span>
                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-row'>
                                    <span className='font-semibold w-60'>
                                        Nama Kegiatan
                                    </span>
                                    <span className='font-medium'>
                                        : Tes Simulasi 3
                                    </span>
                                </div>
                                <div className='flex flex-row'>
                                    <span className='font-semibold w-60'>
                                        Nama Skema
                                    </span>
                                    <span className='font-medium'>
                                        : Instruktur Junior (KKNI LEVEL III)
                                    </span>
                                </div>
                                <div className='flex flex-row'>
                                    <span className='font-semibold w-60'>
                                        Lokasi
                                    </span>
                                    <span className='font-medium'>
                                        : Jalan Jalan
                                    </span>
                                </div>
                                <div className='flex flex-row'>
                                    <span className='font-semibold w-60'>
                                        Tanggal Pra Asesmen
                                    </span>
                                    <span className='font-medium'>
                                        : {localDateString(new Date())}
                                    </span>
                                </div>
                                <div className='flex flex-row'>
                                    <span className='font-semibold w-60'>
                                        Tanggal Asesmen
                                    </span>
                                    <span className='font-medium'>
                                        : {localDateString(new Date())}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <TabsContent value='asesor'>
                            <AssignAsesorView />
                        </TabsContent>
                        <TabsContent value='asesor-penyelia'>
                            <AssignAsesorPenyaliaView />
                        </TabsContent>
                        <TabsContent value='asesi'>
                            <AssignAsesiView />
                        </TabsContent>
                        <TabsContent value='admin'>
                            <AssignAdminView />
                        </TabsContent>
                        <TabsContent value='pleno'>
                            <AssignPlenoView />
                        </TabsContent>
                    </div>
                </div>
            </div>
        </Tabs>
    );
};

export default AssignAsesmenPage;

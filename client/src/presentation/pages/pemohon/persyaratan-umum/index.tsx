import { Tabs, TabsContent, TabsList, TabsTrigger } from "./../../../components/Elements/Tabs";
import BuktiKompetensi from "./BuktiKompetensi";
import PersyaratanDasar from "./PersyaratanDasar";
import PersyaratanPendaftaran from "./PersyaratanPendaftaran";

const PersyaratanUmum: React.FC = () => {
  return (
    <>
      <div className="mx-3 lg:mx-8 mt-12">
        <span className="text-lg font-semibold">Berkas Asesi</span>
      </div>
      <Tabs defaultValue="persyaratan-dasar">
        {/* <div className="w-full overflow-auto"> */}
        <TabsList className="flex md:inline-flex justify-start mx-3 my-6 bg-white rounded-xl lg:mx-8 gap-3 py-6 px-2 shadow-md overflow-y-hidden overflow-x-auto md:w-auto">
          <TabsTrigger value="persyaratan-dasar">Persyaratan Dasar</TabsTrigger>
          <TabsTrigger value="persyaratan-pendaftaran">Persyaratan Pendaftaran</TabsTrigger>
          <TabsTrigger value="bukti-kompeten">Bukti Kompeten</TabsTrigger>
          <TabsTrigger value="bukti-administratif">Bukti Administratif</TabsTrigger>
        </TabsList>
        {/* </div> */}
        <div className="flex flex-col mx-3 my-3 bg-white rounded-lg lg:mx-9">
          {/* <span className="text-lg font-semibold">Daftar Peserta</span> */}

          <TabsContent value="persyaratan-dasar">
            <PersyaratanDasar />
          </TabsContent>
          <TabsContent value="persyaratan-pendaftaran">
            <PersyaratanPendaftaran />
          </TabsContent>
          <TabsContent value="bukti-kompeten">
            <BuktiKompetensi />
          </TabsContent>
          <TabsContent value="bukti-administratif">Change your password here.</TabsContent>
        </div>
      </Tabs>
      {/* <div className="flex flex-row items-center justify-between px-4 py-4 lg:px-6">
      <span className="text-base font-semibold text-blue-600">Beranda</span>
    </div>
    <hr /> */}
    </>
  );
};

export default PersyaratanUmum;

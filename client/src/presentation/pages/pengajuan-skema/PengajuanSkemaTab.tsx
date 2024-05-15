import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./../../components/Elements/Tabs";
import PengajuanSkemaBuktiAdministrasi from "./PengajuanSkemaBuktiAdministrasi";
import PengajuanSkemaBuktiKompetensi from "./PengajuanSkemaBuktiKompetensi";
import PengajuanSkemaDataPribadi from "./PengajuanSkemaDataPribadi";
import PengajuanSkemaPersyaratanDasar from "./PengajuanSkemaPersyaratanDasar";
import PengajuanSkemaPersyaratanPendaftaran from "./PengajuanSkemaPersyaratanPendaftaran";

const PengajuanSkemaTab: React.FC = () => {
  return (
    <>
      <Tabs defaultValue="data-pribadi">
        <TabsList className="inline-flex justify-start mx-3 my-6 bg-white rounded-xl lg:mx-8 gap-3 py-6 px-2 shadow-md">
          <TabsTrigger value="data-pribadi">Data Pribadi</TabsTrigger>
          <TabsTrigger value="persyaratan-dasar">Persyaratan Dasar</TabsTrigger>
          <TabsTrigger value="bukti-kompetensi">Bukti Kompetensi</TabsTrigger>
          <TabsTrigger value="bukti-administratif">
            Bukti Administratif
          </TabsTrigger>
          <TabsTrigger value="persyaratan-pendaftaran">
            Persyaratan Pendaftaran
          </TabsTrigger>
        </TabsList>
        <div className="flex flex-col mx-3 my-3 bg-white rounded-lg lg:mx-9">
          {/* <span className="text-lg font-semibold">Daftar Peserta</span> */}

          <TabsContent value="data-pribadi">
            <PengajuanSkemaDataPribadi />
          </TabsContent>
          <TabsContent value="persyaratan-dasar">
            <PengajuanSkemaPersyaratanDasar />
          </TabsContent>
          <TabsContent value="bukti-kompetensi">
            <PengajuanSkemaBuktiKompetensi />
          </TabsContent>
          <TabsContent value="bukti-administratif">
            <PengajuanSkemaBuktiAdministrasi />
          </TabsContent>
          <TabsContent value="persyaratan-pendaftaran">
            <PengajuanSkemaPersyaratanPendaftaran />
          </TabsContent>
        </div>
      </Tabs>

      {/* <div className="flex flex-row items-center justify-between px-4 py-4 lg:px-6">
      <span className="text-base font-semibold text-blue-600">Beranda</span>
    </div>
    <hr /> */}
    </>
  );
};

export default PengajuanSkemaTab;

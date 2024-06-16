import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./../../../components/Elements/Tabs";
import { useEffect, useState } from "react";
import FormSkema from "./FormSkema";
import UnitKompetensi from "./UnitKompetensi";
import Element from "./Element";
import Kuk from "./kuk";
// import PengajuanSkemaBuktiAdministrasi from "./PengajuanSkemaBuktiAdministrasi";
// import PengajuanSkemaBuktiKompetensi from "./PengajuanSkemaBuktiKompetensi";
// import PengajuanSkemaDataPribadi from "./PengajuanSkemaDataPribadi";
// import PengajuanSkemaPersyaratanDasar from "./PengajuanSkemaPersyaratanDasar";
// import PengajuanSkemaPersyaratanPendaftaran from "./PengajuanSkemaPersyaratanPendaftaran";

const SkemaCreate: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<string>("form-skema");
  const tabs = [
    {
      label: "1. Form Skema",
      value: "form-skema",
    },
    {
      label: "2. Unit Kompetensi",
      value: "unit-kompetensi",
    },
    {
      label: "3. Element",
      value: "element",
    },
    {
      label: "4. KUK",
      value: "kuk",
    },
  ];

  useEffect(() => {
    setValue(searchParams.get("tab") || "form-skema");
  }, [searchParams]);

  const setChangeTab = (value: string) => {
    setSearchParams(`?tab=${value}`);
  };

  return (
    <>
      <Tabs value={value}>
        <TabsList className="inline-flex justify-start mx-3 my-6 bg-white rounded-xl lg:mx-8 gap-3 py-6 px-2 shadow-md">
          {tabs.map((tab) => (
            <TabsTrigger value={tab.value} onClick={() => setChangeTab(tab.value)}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex flex-col mx-3 my-3 bg-white rounded-lg lg:mx-9">
          {/* <span className="text-lg font-semibold">Daftar Peserta</span> */}

          <TabsContent value={"form-skema"}>
            <FormSkema />
          </TabsContent>

          <TabsContent value={"unit-kompetensi"}>
            <UnitKompetensi />
          </TabsContent>

          <TabsContent value={"element"}>
            <Element />
          </TabsContent>

          <TabsContent value={"kuk"}>
            <Kuk />
          </TabsContent>
          {/* <TabsContent value="data-pribadi">
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
            </TabsContent> */}
        </div>
      </Tabs>

      {/* <div className="flex flex-row items-center justify-between px-4 py-4 lg:px-6">
        <span className="text-base font-semibold text-blue-600">Beranda</span>
      </div>
      <hr /> */}
    </>
  );
};

export default SkemaCreate;

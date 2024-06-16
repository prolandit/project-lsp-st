export interface UnitsSkemaStructure {
  code: string;
  name: string;
}

export interface SkemaStructure {
  code: string;
  name: string;
  units: UnitsSkemaStructure[];
}

export interface FormSkemaStructure {
  kodeSkema: string;
  lisensiSkema: string;
  namaSkema: string;
  skkni: string;
  year: number;
  tipeform: number;
  dokumenPendukung: File | null;
}

// change into unit kerja soon
export interface UnitKompetensiStructure {
  skema: string;
  namaKelompokKerja: string;
  nomorKelompokKerja: number;
}

export interface ElementStructure {
  unitKompetensi: string;
  namaElement: string;
  nomorElement: number;
}

export interface UnitKerjaStructure {
  skema: string;
  namaKelompokKerja: string;
  nomorKelompokKerja: number;
}

export interface KukStructure {
  element: string;
  namaKuk: string;
  nomorKuk: number;
}

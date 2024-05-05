export interface UnitsSkemaStructure {
  code: string;
  name: string;
}

export interface SkemaStructure {
  code: string;
  name: string;
  units: UnitsSkemaStructure[];
}

export interface PemohonStructure {
  scheme: SkemaStructure;
  requestDate: string;
  status: string;
  id: number;
  notes: string;
  photo: string;
  institute: string;
  tuk: string;
  purpose: string;
}

export interface PemohonPortofolioStructure {
  name: string;
  file: string | null;
}

export interface PersyaratanPendaftaranStructure {
  name: string;
  formType: string;
  file: string | null;
  status: "disetujui" | "submit";
}

export interface BuktiKompetensiStructure {
  unitKompetensi: string;
  element: string;
  kuks: string[];
  files: string[];
}

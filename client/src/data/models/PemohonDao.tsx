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

export interface PengelolaanSuratStructure {
  id: number;
  name: string;
  date: Date;
  file: string | null;
}

export interface PengelolaanSuratStructure {
  id: number;
  name: string;
  file: string | null;
}

export interface PersyaratanPortofolioStructure {
  name: string;
  formType: string;
  file: string | null;
  status: "disetujui" | "submit";
}

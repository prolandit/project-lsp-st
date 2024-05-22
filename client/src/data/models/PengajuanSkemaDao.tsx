export interface PengajuanSkemaDataListStructure {
  id: number;
  name: string;
  date: Date;
  catatan: string;
  status: string;
}

export interface PengajuanSkemaAssesmentListStructure {
  id: number;
  kodeSkema: string;
  namaSkema: string;
  kodeUnit?: string;
  namaUnitKompetensi?: string;
  subRows?: PengajuanSkemaAssesmentListChildStructure[];
}

export interface PengajuanSkemaAssesmentListChildStructure {
  kodeUnit?: string;
  namaUnitKompetensi?: string;
}

export interface PengajuanSkemaDataPribadiStructure {
  fullName?: string;
  nik?: string;
  birthPlace?: string;
  birthDate?: string;
  gender?: string;
  nationality?: string;
  address?: string;
  posCode?: string;
  telp?: string;
  phone?: string;
  areaAddress?: string;
  education?: string;
  jobStatus?: string;
}

export interface PengajuanSkemaPersyaratanDasarStructure {
  id: number;
  namaPersyaratan?: string;
  formType?: string;
  file: File | null;
}

export interface PengajuanSkemaBuktiKompetensiStructure {
  id: number;
  unitKompetensi?: string;
  namaElemen?: string;
  namaKUK?: string;
  file: File | null;
}

export interface PengajuanSkemaBuktiAdministrasiStructure {
  id: number;
  namaPersyaratan?: string;
  formType?: string;
  file: File | null;
}
export interface PengajuanSkemaPersyaratanPendaftaranStructure {
  id: number;
  namaPersyaratan?: string;
  formType?: string;
  file: string;
}

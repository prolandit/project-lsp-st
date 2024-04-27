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

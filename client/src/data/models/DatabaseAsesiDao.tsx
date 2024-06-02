export interface DatabaseAsesiAlumniListStructure {
  id: number;
  nama?: string;
  assesment?: string;
  tuk?: string;
  noKtp?: number;
  email?: string;
  telp?: number;
  noSertifikat?: number;
  skema?: string;
  lisensiSkema?: string;
  metodeUji?: string;
  tanggalBerlaku?: string;
}

export interface DatabaseAsesiAlumniDataStructure {
    nama?: string;
    noKtp?: string;
    skema?: string;
    noRegistrasiProduksi?: string;
    tanggalBerlaku?: string;
    namaTUK?: string;
    statusRekomendasi?: string;
    statusKelulusan?: string;
    alamatAsesmen?: string;
    ketuaPleno?: string;
    email?: string;
    telp?: string;
    noRegistrasi?: string;
    noSertifikat?: string;
    noBlanko?: string;
    namaJadwalAsesmen?: string;
    tanggalAsesmen?: string;
    namaAsesor?: string;
    namaAdmin?: string;
    aktifitas?: string;
    file?: File;

  }
  

const data = [
  {
    id: 1,
    name: "user",
    etos_kerja: 60,
    jumlah_pinjaman: 50,
    kedisiplinan: 100,
    lama_bekerja: 40,
  },
  {
    id: 2,
    name: "Users",
    etos_kerja: 80,
    jumlah_pinjaman: 50,
    kedisiplinan: 80,
    lama_bekerja: 40,
  },
  {
    id: 3,
    name: "rizkigoti123",
    etos_kerja: 100,
    jumlah_pinjaman: 50,
    kedisiplinan: 80,
    lama_bekerja: 40,
  },
];

//menghitung besson rank 1 array
function bessonRank(arr) {
  const sortedArr = [...arr].sort((a, b) => b - a);
  // Menghitung jumlah kemunculan nilai yang sama
  const countValues = sortedArr.reduce((count, value) => {
    count[value] = (count[value] || 0) + 1;
    return count;
  }, {});
  // Menghitung rata-rata peringkat untuk nilai yang sama
  const averageRanks = sortedArr.reduce((ranks, value, index) => {
    ranks[value] = (ranks[value] || 0) + (index + 1);
    return ranks;
  }, {});

  for (const value in averageRanks) {
    averageRanks[value] /= countValues[value];
  }

  //   mengembalikan array yang sudah di bessonrank
  const bessonRankArr = arr.map((value) => averageRanks[value]);
  return bessonRankArr;
}

// mengambil setiap kriteria dan dijadikan array
const etos_kerja = data.map(({ etos_kerja }) => etos_kerja);
const jumlah_pinjaman = data.map(({ jumlah_pinjaman }) => jumlah_pinjaman);
const kedisiplinan = data.map(({ kedisiplinan }) => kedisiplinan);
const lama_bekerja = data.map(({ lama_bekerja }) => lama_bekerja);

// menghitung besson rank dari array per kriteria yang sudah dibuat
const bessonRankEtosKerja = bessonRank(etos_kerja);
const bessonRankJumlahPinjaman = bessonRank(jumlah_pinjaman);
const bessonRankKedisiplinan = bessonRank(kedisiplinan);
const bessonRankLamaBekerja = bessonRank(lama_bekerja);

// hasil peringkat beeson rank dimasukan lagi ke array bersama dengan data id dan namanya
const result = data.map((item, index) => ({
  id: item.id,
  name: item.name,
  bessonRankEtosKerja: bessonRankEtosKerja[index],
  bessonRankJumlahPinjaman: bessonRankJumlahPinjaman[index],
  bessonRankKedisiplinan: bessonRankKedisiplinan[index],
  bessonRankLamaBekerja: bessonRankLamaBekerja[index],
}));

console.log(result);

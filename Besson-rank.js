function bessonRank(arr) {
  // Membuat salinan array untuk diurutkan
  const sortedArr = [...arr].sort((a, b) => b - a);
  
  // Menghitung jumlah kemunculan nilai yang sama
  const countValues = {};
  sortedArr.forEach(value => {
    countValues[value] = countValues[value] ? countValues[value] + 1 : 1;
  });
  
  // Menghitung rata-rata peringkat untuk nilai yang sama
  const averageRanks = {};
  let rankSum = 0;
  let rankCount = 0;
  sortedArr.forEach((value, index) => {
    rankSum += index + 1;
    rankCount++;
    if (index === sortedArr.length - 1 || value !== sortedArr[index + 1]) {
      const rankAverage = rankSum / rankCount;
      for (let i = index - rankCount + 1; i <= index; i++) {
        averageRanks[sortedArr[i]] = rankAverage;
      }
      rankSum = 0;
      rankCount = 0;
    }
  });
  
  // Mengembalikan array peringkat Besson
  const bessonRankArr = arr.map(value => averageRanks[value]);
  return bessonRankArr;
}


const data = [
  {
    id: 2,
    name: 'user',
    etos_kerja: 60,
    jumlah_pinjaman: 50,
    kedisiplinan: 100,
    lama_bekerja: 40
  },
  {
    id: 4,
    name: 'Users',
    etos_kerja: 80,
    jumlah_pinjaman: 50,
    kedisiplinan: 80,
    lama_bekerja: 40
  },
  {
    id: 3,
    name: 'rizkigoti123',
    etos_kerja: 100,
    jumlah_pinjaman: 50,
    kedisiplinan: 80,
    lama_bekerja: 40
  },
  {
    id: 4,
    name: 'rizkigoti123',
    etos_kerja: 100,
    jumlah_pinjaman: 50,
    kedisiplinan: 80,
    lama_bekerja: 40
  },
  {
    id: 5,
    name: 'rizkigoti123',
    etos_kerja: 70,
    jumlah_pinjaman: 50,
    kedisiplinan: 50,
    lama_bekerja: 40
  },
  {
    id: 6,
    name: 'rizkigoti123',
    etos_kerja: 100,
    jumlah_pinjaman: 50,
    kedisiplinan: 80,
    lama_bekerja: 40
  }
];

const etos_kerja = data.map(({ etos_kerja }) => etos_kerja);
const jumlah_pinjaman = data.map(({ jumlah_pinjaman }) => jumlah_pinjaman);
const kedisiplinan = data.map(({ kedisiplinan }) => kedisiplinan);
const lama_bekerja = data.map(({ lama_bekerja }) => lama_bekerja);


// Contoh penggunaan dengan data karyawan

const bessonRankEtosKerja = bessonRank(etos_kerja);
const bessonRankJumlahPinjaman = bessonRank(jumlah_pinjaman);
const bessonRankKedisiplinan = bessonRank(kedisiplinan);
const bessonRankLamaBekerja = bessonRank(lama_bekerja);

const result = data.map((item, index) => ({
  id: item.id,
  name: item.name,
  bessonRankEtosKerja: bessonRankEtosKerja[index],
  bessonRankJumlahPinjaman: bessonRankJumlahPinjaman[index],
  bessonRankKedisiplinan: bessonRankKedisiplinan[index],
  bessonRankLamaBekerja: bessonRankLamaBekerja[index],
}));

console.log(result);

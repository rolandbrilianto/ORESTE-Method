// let bobot = [50, 80, 60, 70];
let bobot = [0.2, 0.4, 0.25, 0.15];
// kalau bobot mu dalam angka bukan desimal, pake kode dibawah ini ya
// let total = bobot.reduce(function (acc, curr) {
//   return acc + curr;
// }, 0);

// let normalisasiBobot = bobot.map(function (elem) {
//   return Number((elem / total).toFixed(2));
// });

const data = [
  {
    id: 1,
    name: "user",
    distanceScoreEtosKerja: 2.389033567,
    distanceScoreJumlahPinjaman: 1.986184991,
    distanceScoreKedisiplinan: 2.389033567,
    distanceScoreLamaBekerja: 3.262720151,
  },
  {
    id: 2,
    name: "Users",
    distanceScoreEtosKerja: 1.642707082,
    distanceScoreJumlahPinjaman: 1.986184991,
    distanceScoreKedisiplinan: 2.74441226,
    distanceScoreLamaBekerja: 3.262720151,
  },
  {
    id: 3,
    name: "rizkigoti123",
    distanceScoreEtosKerja: 1,
    distanceScoreJumlahPinjaman: 1.986184991,
    distanceScoreKedisiplinan: 2.74441226,
    distanceScoreLamaBekerja: 3.262720151,
  },
];

const preferensi = data.map(function (obj) {
  const preferensiEtosKerja = obj.distanceScoreEtosKerja * bobot[0];
  const preferensiJumlahPinjaman = obj.distanceScoreJumlahPinjaman * bobot[1];
  const preferensiKedisiplinan = obj.distanceScoreKedisiplinan * bobot[2];
  const preferensiLamaBekerja = obj.distanceScoreLamaBekerja * bobot[3];

  return {
    id: obj.id,
    name: obj.name,
    preferensiEtosKerja,
    preferensiJumlahPinjaman,
    preferensiKedisiplinan,
    preferensiLamaBekerja,
  };
});

console.log("nilai preferensi", preferensi);

const totalPreferensi = preferensi.map(function (obj) {
  const total =
    obj.preferensiEtosKerja +
    obj.preferensiJumlahPinjaman +
    obj.preferensiKedisiplinan +
    obj.preferensiLamaBekerja;

  return {
    id: obj.id,
    name: obj.name,
    totalPreferensi: total,
  };
});

totalPreferensi.sort(function (a, b) {
  return a.totalPreferensi - b.totalPreferensi;
});

totalPreferensi.forEach(function (obj, index) {
  obj.ranking = index + 1;
});

console.log("hasil akhir", totalPreferensi);

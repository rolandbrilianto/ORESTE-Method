const dataBessonRank = [
  {
    id: 1,
    name: "user",
    bessonRankEtosKerja: 3,
    bessonRankJumlahPinjaman: 2,
    bessonRankKedisiplinan: 1,
    bessonRankLamaBekerja: 2,
  },
  {
    id: 2,
    name: "Users",
    bessonRankEtosKerja: 2,
    bessonRankJumlahPinjaman: 2,
    bessonRankKedisiplinan: 2.5,
    bessonRankLamaBekerja: 2,
  },
  {
    id: 3,
    name: "rizkigoti123",
    bessonRankEtosKerja: 1,
    bessonRankJumlahPinjaman: 2,
    bessonRankKedisiplinan: 2.5,
    bessonRankLamaBekerja: 2,
  },
];

function calculateDistanceScore(item, c) {
  const {
    bessonRankEtosKerja,
    bessonRankJumlahPinjaman,
    bessonRankKedisiplinan,
    bessonRankLamaBekerja,
    ...rest
  } = item;

  const calculateScore = (rank, criteria) => {
    return Math.pow(
      0.5 * Math.pow(rank, 3) + 0.5 * Math.pow(criteria, 3),
      0.33
    );
  };

  const distanceScoreEtosKerja = calculateScore(bessonRankEtosKerja, c[0]);
  const distanceScoreJumlahPinjaman = calculateScore(
    bessonRankJumlahPinjaman,
    c[1]
  );
  const distanceScoreKedisiplinan = calculateScore(
    bessonRankKedisiplinan,
    c[2]
  );
  const distanceScoreLamaBekerja = calculateScore(bessonRankLamaBekerja, c[3]);

  return {
    ...rest,
    distanceScoreEtosKerja: Number(distanceScoreEtosKerja.toFixed(9)),
    distanceScoreJumlahPinjaman: Number(distanceScoreJumlahPinjaman.toFixed(9)),
    distanceScoreKedisiplinan: Number(distanceScoreKedisiplinan.toFixed(9)),
    distanceScoreLamaBekerja: Number(distanceScoreLamaBekerja.toFixed(9)),
  };
}

function calculateDistanceScores(data) {
  const c = [1, 2, 3, 4];

  return data.map((item) => calculateDistanceScore(item, c));
}

const result = calculateDistanceScores(dataBessonRank);
console.log(result);

Ini adalah kodingan metode SPK ORESTE versi javascript.
Saya membuat ini karena saya merasa kesusahan mencari source code untuk SPK Oreste yang dimana kebanyakan adalah dalam bentuk PHP

Tahap-tahap dari SPK Oreste ini adalah :
1. Menghitung besson rank 
2. Menghitung distance score dengan rumus ((0,5 x (bessonRank)^3) + (0,5 x (kriteria-Ke)^3))^0,333
3. Menghitung nilai preferensi dengan cara mengalikan setiap distance score dengan bobotnya lalu di jumlahkan per alternatifnya
4. meranking nilai total Preferensi dari setiap alternatif, YANG TERBAIK ADALAH TOTAL PREFERENSI TERENDAH! UNTUK ORESTE RANK 1 NYA ADALAH NILAI TOTAL PREFERENSI TERENDAH

Pseudo-code 

1.
// mencari resultan gaya dengan massa dikali percepatan
/*Algoritma
1. Input nilai massa dengan value 660
2. Input nilai percepatan dengan value 2
3. Input resultan gaya dengan nilai berapapun sebagai nilai default
4. Kalkulasikan resultan gaya dengan operasi matematika massa dikali percepatan
5. Hasil dari operasi matematika ditampung dalam variabel resultan gaya menggantikan nilai defaultnya.
6. Tampilkan nilai dari resultan gaya yang telah diubah
*/
//Pseudocose

STORE "mass" with 660
STORE "acceleration" with 2
STORE "Total Force" with any value

    CALCULATE "mass" times "acceleration"
        SET "Total Force" with calculation result

DISPLAY "Total Force"

2.
// menghitung tahun kabisat
/*
1. Input nilai tahun dengan nilai sembarang sebagai nilai default
2. Input nilai tahun kabisat dengan nilai sembarang sebagai nilai default
3. Kalkulasikan nilai tahun agar memenuhi persyaratan sebagai tahun kabisat
4. Jika nilai memenuhi persyaratan, maka input nilai "tahun kabisat" ke dalam variabel tahun kabisat dan jika nilai "false" inputkan "bukan tahun kabisat" ke dalam variabel tahun kabisat 
5. tampilkan nilai tahun kabisat
*/
STORE "Year" with any value
STORE "Leap Year" with any value

CALCULATE
    IF "Year" divided by 4 equals 0 and "Year" mod 100 not equals 0
        OR 
    IF "Year"divided by 4 equals 0 and "Year" mod 100 equals 0 and "Year" mod 400 equals 0 
    THEN
        SET "Leap Year" as "Tahun Kabisat"
    ELSE
        SET "Leap Year" as "Bukan Tahun Kabisat"

DISPLAY "Leap Year"

3.
// menghitung pakaian yang masuk mesin cusi sebelum mesin cuci menyala
/*
1. Input jumlah total pakaian dengan value 20
2. Input nilai counter dengan nilai inisiasi berupa 0
3. Lakukan Looping untuk melakukan perulangan kalkulasi dimana nilai counter akan bertambah setiap satu kali looping
4. Tampilkan nilai counter
*/


STORE "Total Pakaian" with 20
STORE "Counter" with 0

    While "Total Pakaian" not equal 0
        CALCULATE "Counter" + 1

DISPLAY "Counter"

4.
//Memeriksa kuku siswa dan siswi di sekolah

/*
1. Input jumlah siswa dengan value 40
2. Input status dengan value sembarang sebagai default
3. Input aksi dengan value sembarang sebagai default
4. Lakukan looping untuk memeriksa semua siswa dengan kondisional
5. Hasil dari kondisional akan memperbaharui nilai variabel action
6. Tampilkan nilai action dari setiap siswa yang telah melalui looping
*/

STORE "Jumlah Siswa" with 40
STORE "Status" with any value
STORE "Action" with any value

While "Jumlah Siswa" not equal 0
    CALCULATE "Jumlah Siswa" - 1

    IF "Status" equal "Kuku Pendek"
    THEN
        SET "Action" with "Siswa Mendapat Pujian"
    ELSE
        SET "Action" with "Siswa Mendapat Hukuman"

DISPLAY "Action"

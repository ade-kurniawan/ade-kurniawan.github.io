/*Directions
//contoh output
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.

["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  
Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.

Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
Format tanggal pada data adalah dd-mm-YYYY
Misal angka bulan 01, tuliskan "Januari"
Gunakan switch case untuk menuliskan bulan di atas.
Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.

Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

Test-case
Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
function dataHandling2(input) {
    input.splice(1, 4, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA International Metro');
    
    console.log(input);
    
    var dateArray1 = input[3].split('/');
    var bulan = parseInt(dateArray1[1]);
    
    switch(bulan) {
      case 1: bulan = 'Januari'; break;
      case 2: bulan = 'Februari'; break;
      case 3: bulan = 'Maret'; break;
      case 4: bulan = 'April'; break;
      case 5: bulan = 'Mei'; break;
      case 6: bulan = 'Juni'; break;
      case 7: bulan = 'Juli'; break;
      case 8: bulan = 'Agustus'; break;
      case 9: bulan = 'September'; break;
      case 10: bulan = 'Oktober'; break;
      case 11: bulan = 'November'; break;
      case 12: bulan = 'Desember'; break;
      default: bulan = '';
    }
    console.log(bulan);
    
    // Urutkan
    tanggalInt = parseInt(dateArray1[0]);
    bulanInt = parseInt(dateArray1[1]);
    tahunInt = parseInt(dateArray1[2]);
    dateJoin = tanggalInt + ' ' + bulanInt + ' ' + tahunInt;
    dateArray2 = dateJoin.split(' ');
    dateDesc = dateArray2.sort(function(value1, value2) { return value1 > value2 });
    
    // Format Tanggal jadi 2 Digit (01-31)
    dateNormal = dateDesc[2];
    if(String(dateNormal).length === 1) {
      dateNormal = '0' + dateNormal;
      dateDesc.splice(2, 1, dateNormal)
    }
    
    console.log(dateDesc);
    
    // JOIN Tanggal dan Tambah Spasi
    date = dateArray1.join('-');
    console.log(date);
    
    // Batasi Nama Max 15 Char
    namaLimit = input[1].slice(0, 15);
    console.log(namaLimit);
  }
  
  var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
  
  dataHandling2(input);
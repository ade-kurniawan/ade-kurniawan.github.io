var hari= 31,
    bulan= 5,
    tahun= 1945;

    switch (bulan) {
        case 1:
        bulan = " Januari ";
        break;
        case 2:
        bulan = " Februari ";
        break;
        case 3:
        bulan = " Maret ";
        break;
        case 4:
        bulan = " April ";
        break;
        case 5:
        bulan = " Mei ";
        break;
        case 6:
        bulan = " Juni ";
        break;
        case 7:
        bulan = " Juli ";
        break;
        case 8:
        bulan = " Agustus ";
        break;
        case 9:
        bulan = " September ";
        break;
        case 10:
        bulan = " Oktober ";
        break;
        case 11:
        bulan = " November ";
        break;
        case 12:
        bulan = " Desember ";
        break;   
    }

    if ((1 >= hari <= 31) || (1 >= bulan <= 12) || (1200 >= tahun <=2050) ) {
        console.log ("Input invalid, silahkan masukkan nilai dengan benar.")
    } else {
        console.log (hari + bulan + tahun) ;
    }

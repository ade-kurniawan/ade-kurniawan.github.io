var Nama= 'Nina'
    Peran= 'Penyihir'

if  (Nama== '') {
    console.log("Nama harus diisi")
}
if (Nama!='') {
    if (Peran== '') {
        console.log("Halo " +Nama + ", Pilih peranmu untuk memulai game!")
    }
    else {
        if (Peran== 'Ksatriya') {
        console.log("Selamat datang di dunia Proxytia," +Nama)
        console.log("Halo Ksatriya " +Nama + ", kamu dapat menyerang dengan senjatamu")
        }
        if (Peran== 'Tabib') {
        console.log("Selamat datang di dunia Proxytia," +Nama)
        console.log("Halo Tabib " +Nama + ", kamu akan membantu temanmu yang terluka")
        }
        if (Peran== 'Penyihir') {
        console.log("Selamat datang di dunia Proxytia," +Nama)
        console.log("Halo Penyihir " +Nama + ", ciptakan keajaiban yang membantu kemenanganmu")
        }
    }
}

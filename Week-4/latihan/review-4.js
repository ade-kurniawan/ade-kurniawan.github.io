/*
cek jika nama empty string tampilkan 
  'Silahkan isi nama kamu'

cek jika job tidak sesuai option tampilkan 
  'Silahkan pilih salah satu dari job {Ksatria}, {Tabid}, {Penyihir}'
jika job sesuai option tampilkan pesan
  'Selamat datang {nama} kamu login sebagai {job}'
  
cek jika weapon tidak sesuai job maka tampilkan
  '{job} {nama} kamu tidak dapat menggunakan {weapon} sebagai senjatamu'
jika weapon sesuai maka tampilkan
  '{job} {nama} kamu menggunakan {weapon} sebagai senjatamu'
  */

 var proxitiaJob = [
    { 
      name: 'Ksatria',
      weapon: [
        'pedang',
        'tombak'
      ]
    },
    {
      name: 'Tabid',
      weapon: [
        'gada'
      ]
    },
    {
      name: 'Penyihir',
      weapon: [
        'tongkat'
      ]
    }
  ]
  
  function inGame(){
    // Your code here
  }
  
  inGame('Yoki', 'Ksatria', 'tongkat');
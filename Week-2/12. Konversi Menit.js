function konversiMenit(menit) {
  nilaiJam = Math.round (menit/60);
  
  if (menit < 60) {
    nilaiJam = 0;
  }

  nilaiMenit = menit % 60;
  
  if (nilaiMenit < 10) {
    nilaiMenit = "0" + nilaiMenit;
  }

  return nilaiJam + ":" + nilaiMenit;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
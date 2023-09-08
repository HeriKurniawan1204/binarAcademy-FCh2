const dataAngka=([9,4,7,7,4,3,2,2,8]);
getAngkaTerbesarKedua = (dataAngka) => {
    if (!Array.isArray(dataAngka)){
        return "Error: Parameter harus berupa array ya";
    }

    const sortedNumbers = dataAngka.slice().sort((a, b)=> b- a);

    if (sortedNumbers.length >= 2) {
        return sortedNumbers[1];
    }else {
        return "Error: hmm gada angka terbesar kedua dalam array"
    }
  }
  console.log(getAngkaTerbesarKedua(dataAngka));
  console.log(getAngkaTerbesarKedua(0));
  console.log(getAngkaTerbesarKedua());
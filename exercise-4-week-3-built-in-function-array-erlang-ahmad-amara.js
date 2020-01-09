function dataHandling2(arr){
    arr.splice(1, 4, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA International Metro')
    var output2 = '';
    var output3 = [];

    var tanggal = arr[3];
    var pemisah = tanggal.split('/');

    switch (pemisah[1]){
        case '05':
            output2 += 'Mei';
    }

    for (i = pemisah.length -1; i >= 0; i--){
        if (i === 2){
            output3.push(pemisah[i]);
        } else if (i === 1){
            output3.push(pemisah[1]);
        } else if (i === 0){
            output3.splice(1, 0, pemisah[i]);
        }
    }

    var nama = arr[1];



    var out1 = console.log(arr);
    var out2 = console.log(output2);
    var out3 = console.log(output3);
    var out4 = console.log(pemisah.join('-'));
    var out5 = console.log(nama.slice(0,15));


    return out1 + out2 + out3 + out4 + out5;

}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
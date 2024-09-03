const array1 = [1,2,3,4,5];
const array2 = [1,2];
const array3 = [5];
const arrayKosong = [];

const hasil1 = jumlahkanArray(array1);
const hasil2 = jumlahkanArray(array2);
const hasil3 = jumlahkanArray(array3);
const hasilKosong = jumlahkanArray(arrayKosong);



function jumlahkanArray(array){
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}




/*
String.replace(pattern,replacement)
mengembalikan string baru dengan satu, beberapa, atau semua kecocokan dari pattern yang diganti dengan replacement 
*/
const sayHello = "Selamat Pagi!"

console.log(sayHello.replace("Pagi","Siang"))

/*
array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
melakukan perhitungan pada semua element element array yang bertipe number dan fungsi tersebut akan mengembalikan nilai berupa hasil perhitungan seluruh element dalam array
*/

const arrNums = [1,2,3,4,5]
arrNums.reduce((a,b) => a+b,0)

/*
Array.some(callbackFn)
Metode some()instance Array akan mengembalikan nilai true jika menemukan elemen dalam array yang memenuhi fungsi pengujian yang diberikan. Jika tidak, ia akan mengembalikan nilai false.
*/

const someDatas = [1,2,3,4,5,6,7,8,9,10];
console.log(someDatas.some(value => value % 2 === 0));


/*
Array.every(callbackFn)
Metode some()instance Array akan mengembalikan nilai true jika menemukan semua elemen dalam array yang memenuhi fungsi pengujian yang diberikan. Jika tidak, ia akan mengembalikan nilai false.
*/

const everyDatas = [2,4,6,8,10,12,14,16];

console.log(someDatas.every(value=>value % 2 === 0))

console.log(everyDatas.every(value=>value % 2 === 0))

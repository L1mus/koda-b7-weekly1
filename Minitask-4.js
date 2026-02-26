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

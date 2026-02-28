function genMultificationtable(num) {
  if (isNaN(num) || typeof num !== "number") {
    return console.log("Gunakan tipe data number, selain itu tidak valid");
  }
  let result = "";
  for (let i = 1; i <= num; i++) {
    // result =+ `${i}`
    for (let j = 1; j <= num; j++) {
      result += `${i * j}`;
    }
    result += "\n";
  }
  return console.log(result);
}

genMultificationtable(5);
genMultificationtable("342432");
genMultificationtable("hello world");
genMultificationtable("!@#$%^&*");

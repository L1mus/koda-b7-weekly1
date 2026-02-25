function polindromeChecker(str) {
  if (str === undefined || typeof str !== "string" || str === "") {
    return console.log("Input tidak valid");
    const cleanData = str.toLowerCase().replace(/[^a-z0-9]/g);
  }
  let strReverse = cleanData.split("").reverse().join("");
  if (strReverse === cleanData) {
    return console.log("str tersebut merupakan polindrome");
  } else {
    return console.log("str tersebut bukan merupakan polindrome");
  }
}


polindromeChecker("Kasur Rusak");//normal case
polindromeChecker("Malam");//case mudah
polindromeChecker("Hello");//case tidak polindrome
//edge case dan absurd case
polindromeChecker("")
polindromeChecker(123);
polindromeChecker(["Malam"]);
polindromeChecker("%$#@!");
polindromeChecker("%$#@!@#$%");

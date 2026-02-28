function converterTemprature(value, code, convertTo) {
  if (typeof code !== "string") {
    return console.log(`Code harus bertype String`);
  }
  if (isNaN(value)) {
    return console.log("Input value harus bertype Number");
  }
  const cleanData = code.toUpperCase().trim();
  let result = 0;
  switch (cleanData) {
    case "C":
      if (convertTo === "F") {
        result = (9 / 5) * value + 32;
      } else if (convertTo === "K") {
        result = value + 273.15;
      } else if (convertTo === "R") {
        result = 4 / 5 + value;
      }
      break;
    case "F":
      if (convertTo === "C") {
        result = (5 / 9) * (value - 32);
      } else if (convertTo === "K") {
        result = (5 / 9) * (value - 32) + 273.15;
      } else if (convertTo === "R") {
        result = (4 / 9) * (value - 32);
      }
      break;
    case "K":
      if (convertTo === "F") {
        result = (9 / 5) * (value - 273.15) + 32;
      } else if (convertTo === "C") {
        result = value - 273.15;
      } else if (convertTo === "R") {
        result = 4 / 5 + (value - 273.15);
      }
      break;
    case "R":
      if (convertTo === "F") {
        result = (9 / 4) * value + 32;
      } else if (convertTo === "K") {
        result = (5 / 4) * value + 273.15;
      } else if (convertTo === "C") {
        result = (5 / 4) * value;
      }
      break;
    default:
      console.log(`Input tidak Valid!!! 
                Masukan harus angka,
                Masukan code dari tempratur apa,
                Masukan code ke tempratur apa,
                contohcontoh: C(celcius), F(Fahrenheit), K(Kelvin),dan R(Reamur)`);
  }
  return console.log(
    `convert dari ${value} ${code} ke ${convertTo} menjadi ${result} ${convertTo}`,
  );
}

converterTemprature(100, "C", "F");
converterTemprature(37, "C", "R");
converterTemprature(0, "K", "C");
converterTemprature(50, "F", "C");
converterTemprature(80, "R", "K");
converterTemprature(0, "K", "C");
converterTemprature(25, "C", "C");
converterTemprature(40, "F", "C");
converterTemprature(36.6, "C", "F");
converterTemprature("30", "C", "F");
// converterTemprature( , "C", "F")
converterTemprature(-500, "C", "K");
converterTemprature(25, " C ", "K");
converterTemprature(25, "C#", "K");
converterTemprature(25, 2, "K");

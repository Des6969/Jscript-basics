const tempConverter = (temp, measurement = "c") => {
  if (measurement === "c") {
    //convert celsius to farnheit
    return (9 / 5) * temp + 32;
  }
  //farnheit to celsius
  return (5 / 9) * (temp - 32);
};
console.log(tempConverter(45, "f"));

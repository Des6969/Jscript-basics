const tempConverter = (temp, measurement = "c") => {
  if (measurement === "c") {
    return (9 / 5) * temp + 32;
  }
  return (5 / 9) * (temp - 32);
};
console.log(tempConverter(45, "f"));

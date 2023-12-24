console.log("temperature");
const celsius = Number(prompt("enter the temperature"));
const fahrenheit = Number(prompt("enter the temperature"));

//const temperature= ()=>{}
const temperature = (celsius) => {
  return (9 / 5) * celsius + 32;
};
const o = temperature(celsius);
console.log("temperature in fahrenheit is " + o);

//const fahrenheit =()=>{}
const temp = (fahrenheit) => {
  return (5 / 9) * (fahrenheit - 32);
};
const r = temp(fahrenheit);
console.log("Temperature in Fahrenheit is " + r);

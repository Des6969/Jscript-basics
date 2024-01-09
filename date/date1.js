console.log("date");
//Date
//It is an object
const today = new Date(); //default date
console.log(today);
console.log(today.setMilliseconds(100));

today.getUTCFullYear(today);
//afule set gareko date and time
const someTime = new Date("2000-09-26");
console.log(someTime);
//ISO date time
const now = today.toISOString();
console.log({ now });

//write a function that accepts a date and shows which day is entered

const dayFinder = (date) => {
  const day = new Date(date);
};
const dayIndex = day.getDay();

switch (dayIndex) {
  case 0:
    return Sunday;
    break;
  case 1:
    return Monday;
    break;
  case 2:
    return Tuesday;
    break;
  case 3:
    return Wednesday;
    break;
  case 4:
    return Thursday;
    break;
  case 5:
    return Friday;
    break;
  case 6:
    return Saturday;
    break;
}
console.log(dayIndex);

//
//write a functions that accept the date and time show which day as date

const dayFinder = (date) => {
  const daay = new Date(date); //object...
  return daay.getDay();
};

const res = dayFinder("2024-01-05"); //call...
console.log(res); //for chckingg...

switch (res) {
  case 0:
    console.log("Sunday");
    break;

  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;

  default:
    console.log("Not saturday");
}

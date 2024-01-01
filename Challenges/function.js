console.log("object");
/*
1.write a function called reserve
2.call the reserve function with parameter
3.invoke that function with data 
4.typecast that num into string
5.get the length of the string
6.loop in opposite way
7.return the value

*/
const reverse = (num) => {
  const data = String(num);
  const lengthofdata = data.length;
  let reversedata = "";
  for (let i = lengthofdata - 1; i >= 0; i--) {
    reversedata += data[i];
  }
  console.log(reversedata);
};
reverse(56789);

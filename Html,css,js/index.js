console.log("hello");
function today() {
  return new Date();
}

function getFormData() {
  const fName = document.getElementById("Name").value;
  const lName = document.getElementById("Wame").value;
  console.log({ fName, lName });
}

document.getElementById("dateId").innerHTML = today();

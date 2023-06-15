let button = document.getElementById("submit");
button.onclick = () => {
  let input = parseInt(document.getElementById("getValue").value);
  let inputtype = document.getElementById("getDegree").value;
  let outputtype = document.getElementById("getType").value;
  // console.log(input)
  // console.log(type)
  //   console.log(inputtype)
  //   console.log(outputtype)
  let result = "";
  switch (inputtype) {
    case "C":
      result = CelcuisTo(input, outputtype);
      break;
    case "F":
      result = FahrenheitTo(input, outputtype);
      break;
    case "K":
      result = KelvinTo(input, outputtype);
      break;
  }
  console.log(result);
  document.getElementById('answer').innerHTML = result.toFixed(2);
  if (outputtype == 'K')
    document.getElementById('degree').innerHTML = "";
  else
    document.getElementById('degree').innerHTML = "&deg;"

  document.getElementById('converted').innerHTML = outputtype;

}
function CelcuisTo(input, outputtype) {
  let output = "";
  switch (outputtype) {
    case "C":
      output = input;
      break;
    case "F":
      output = eval(input * (9 / 5) + 32);
      break;
    case "K":
      output = eval(input + 273.15);
      break;
  }
  return output;
}
function KelvinTo(input, outputtype) {
  let output = "";
  switch (outputtype) {
    case "K":
      output = input;
      break;
    case "C":
      output = eval(input - 273.15);
      break;
    case "F":
      output = eval((input - 273.15) * (9 / 5) + 32);
      break;
  }
  return output;
}
function FahrenheitTo(input, outputtype) {
  let output = ""
  switch (outputtype) {
    case "F":
      output = input;
      break;
    case "C":
      output = eval((input - 32) * (5 / 9))
      break;
    case "K":
      output = eval((input + 459.67) * (5 / 9))
      break;

  }
  return output;
}

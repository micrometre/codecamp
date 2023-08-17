
let currentDate = new Date(); 
let currentHour = currentDate.getHours()

let currentMonth= currentDate.toLocaleString('default', {month: 'long'})


function getMonthList(locales, format = "long") {
  const year = new Date().getFullYear(); 
  const monthList = [...Array(12).keys()]; 
  const formatter = new Intl.DateTimeFormat(locales, {
    month: format
  });
  const getMonthName = (monthIndex) =>
    formatter.format(new Date(year, monthIndex));

  return monthList.map(getMonthName);
}


console.log(getMonthList())




/*
let num = 0
if(num > 0 ){
console.log("Good morning")
}
else if(num > 12 && num < 18){
console.log("Good Afternon")
}
else {
console.log("Good Eveninig")
}

*/
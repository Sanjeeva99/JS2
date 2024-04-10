// 1.Construction Method

// 2.Dates
let today = new Date();
let day  =  today.getDay();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let millisec = today.getMilliseconds();
let month = today.getMonth();
let year = today.getFullYear();
let time = today.getTime();
let timezone = today.getTimezoneOffset();
let UTCdate = today.getUTCDate();
let UTCday = today.getUTCDay();

console.log(today);
console.log(day);
console.log('Hours', hours);
console.log('Minutes', minutes);
console.log('Seconds', seconds);
console.log('Millisec', millisec);
console.log('Month', month);
console.log('Year', year);
console.log('Time', time);
console.log('TieZone', timezone);
console.log('UTCDATE', UTCdate);
console.log('UTCDAY', UTCday);



// 3.Number Method
//(π) pi value = 3.14159265359
let decimal = 3.14159265359;
let getSomeValue = decimal.toFixed(0);
console.log('by fixed num', getSomeValue);

let getSomeValue2 = decimal.toPrecision(1);
console.log('by precision num', getSomeValue2);

let getSomeValue3 = decimal.valueOf();
console.log('by value of', getSomeValue3);




console.log(typeof(decimal));  //CONVERSION number (implicite/explicite)
console.log(typeof(getSomeValue)); //conversion string (implicie/explicite)



//  4.Types of Math Methods
//  a)Min NO.
let num = 50;
let num2 = 75;
let myNum = Math.min(num, num2);
console.log('Min Num', myNum); 

let num3 = 47665;
let num4 =  93148;
let Mynum = Math.min(num3, num4);
console.log('Min numb', Mynum);


//  b)Max Num
let no = 47665;
let no2 =  93148;
let myno = Math.min(no, no2);
console.log('max', myno);


let num5 = 536;
let num6 =  896;
let sumnum = Math.min(num5, num6);
console.log('MAX', sumnum);


//  c)Square root of no.
let Num = 625;
let squareroot = Math.sqrt(Num);
console.log('Square root of 625 is', squareroot);

let Num2 = 5625;
let squareroot2 = Math.sqrt(Num2);
console.log('Sqaure root of 5625 is', squareroot2);


//  d)Rounded Value
let TataNexon = 100000.19;
let price =  1000000.39;
let roundvalue = Math.round(TataNexon);
console.log('Car price', roundvalue);

let TataHarrier = 200000.59;
let price2 =  200000.45;
let roundvalue2 = Math.round(TataHarrier);
console.log('Car price', roundvalue2);

// e)Make a price to Below value
let TataPunch = 1000000.95;
let price3 = 1000000.12;
let belowvalue = Math.round(price3);
console.log('Below Vlaue1 is', belowvalue);

let belowvalue2 = Math.round(TataPunch);
console.log('Below Vlaue2 is', belowvalue2);


// f)Make a price to Above value
let TataSafari = 2500000.49;
let price4 = 2500000.96;
let abovevalue = Math.round(price4);
console.log('Above Value3 is', abovevalue);

let abovevalue2 = Math.round(TataSafari);
console.log('Above Value4 is', abovevalue2);

// g)Random Number from 1 to 1000
let generateRandomNum = Math.random();
let generateRandomlyNum = (generateRandomNum * 999) + 1;
console.log('Random Number', Math.ceil(generateRandomlyNum));













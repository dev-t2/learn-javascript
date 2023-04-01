const date1 = new Date();

console.log(`date1: ${date1}`);

console.log(``);

const date2 = new Date(2023, 3, 1, 12, 48, 44);

console.log(`date2: ${date2}`);

console.log(``);

const date3 = new Date('Sat Apr 01 2023 12:48:44 GMT+0900 (한국 표준시)');

console.log(`date3: ${date3}`);

console.log(``);

const date4 = new Date();

console.log(`date4: ${date4}`);
console.log(`getFullYear: ${date4.getFullYear()}`);
console.log(`getMonth: ${date4.getMonth()}`);
console.log(`getDate: ${date4.getDate()}`);
console.log(`getHours: ${date4.getHours()}`);
console.log(`getMinutes: ${date4.getMinutes()}`);
console.log(`getSeconds: ${date4.getSeconds()}`);

console.log(``);

date4.setFullYear(2024);
date4.setMonth(4);
date4.setDate(2);
date4.setHours(14);
date4.setMinutes(24);
date4.setSeconds(30);

console.log(`updated date4: ${date4}`);
console.log(`updated getFullYear: ${date4.getFullYear()}`);
console.log(`updated getMonth: ${date4.getMonth()}`);
console.log(`updated getDate: ${date4.getDate()}`);
console.log(`updated getHours: ${date4.getHours()}`);
console.log(`updated getMinutes: ${date4.getMinutes()}`);
console.log(`updated getSeconds: ${date4.getSeconds()}`);

console.log(``);

const date5 = new Date();
const day = date5.getDay();

console.log(`day: ${day}`);

const getDay = (day) => {
  if (day === 0) {
    return '일요일';
  } else if (day === 1) {
    return '월요일';
  } else if (day === 2) {
    return '화요일';
  } else if (day === 3) {
    return '수요일';
  } else if (day === 4) {
    return '목요일';
  } else if (day === 5) {
    return '금요일';
  } else if (day === 6) {
    return '토요일';
  } else {
    return '';
  }
};

console.log(`getDay: ${getDay(day)}`);

console.log(``);

const date6 = new Date();

console.log(`date6: ${date6}`);
console.log(`getTime: ${date6.getTime()}`);

console.log(``);

date6.setTime(1700000000000);

console.log(`updated date6: ${date6}`);
console.log(`updated getTime: ${date6.getTime()}`);

console.log(``);

Date.prototype.isAfter = function (date) {
  const aDate = this.getTime();
  const bDate = date.getTime();

  console.log({ aDate, bDate });

  return aDate > bDate;
};

const date7 = new Date('Sat Apr 01 2023 13:40:01 GMT+0900 (한국 표준시)');
const date8 = new Date('Thu May 02 2024 14:24:30 GMT+0900 (한국 표준시)');

console.log(`isAfter: ${date7.isAfter(date8)}`);

console.log(``);

console.log(`isAfter: ${date8.isAfter(date7)}`);

console.log(``);

const time = new Date().getTime();

console.log(`now: ${Date.now()}`);
console.log(`time: ${time}`);

setTimeout(() => {
  console.log(`now: ${Date.now()}`);
  console.log(`time: ${time}`);
}, 1000);

"use strict";

// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// let markMass = 95;
// let markHeight = 1.88;
// let johnMass = 85;
// let johnHeight = 1.76;

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

// if (markHigherBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// } else {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// }

// let avgDolphin = (96 + 100 + 89) / 3;
// let avgKoala = (88 + 91 + 110) / 3;
// console.log(avgDolphin, avgKoala);
// if (avgDolphin === avgKoala && avgDolphin >= 100) {
//   console.log("Its a draw");
// } else if (avgDolphin > avgKoala && avgDolphin >= 100) {
//   console.log("Dolphin wins 🐬");
// } else if (avgDolphin < avgKoala && avgKoala >= 100) {
//   console.log("Dolphin wins 🐨");
// } else {
//   console.log("No team wins the trophy 😒");
// }

// let day = "saturday";
// switch (day) {
//   case "monday":
//     console.log("Thats it your first day");
//     break;
//   case "tuesday":
//     console.log("Maybe do some other new activities");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Make meeting with clients");
//     break;
//   case "friday":
//     console.log("Half day work!");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Just enjoy your Holiday!!! 🙂");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// let age = 23;
// let drink = age >= 18 ? "wine 🍷" : "water 🚰";
// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 🚰"}`);

// let bill = 275;
// let tip = bill >= 50 && bill <= 300 ? (15 * bill) / 100 : (20 * bill) / 100;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// const fruitpieces = function (fruits) {
//   return fruits * 4;
// };

// const juice = function (apple, orange) {
//   const total = fruitpieces(apple + orange);
//   return `Your juice is perpared by ${apple} apples and ${orange} oranges, totally ${total} pieces are used`;
// };

// console.log(juice(3, 4));

// const juice = (apple, orange) =>
//   `Your juice is perpared by ${apple} apples and ${orange} oranges.`;
// console.log(juice(2, 4));

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const checkWinner = function (avgDolphins, avgKoala) {
//   if (avgDolphins > avgKoala * 2)
//     console.log(`Dolpnins win (${avgDolphins} vs ${avgKoala}).`);
//   else if (avgDolphins * 2 < avgKoala)
//     console.log(`Koala win (${avgKoala} vs ${avgDolphins})`);
//   else console.log("No team wins 😭");
// };

// let dolphinAvg = calcAverage(44, 23, 71);
// let koalaAvg = calcAverage(65, 54, 49);

// checkWinner(dolphinAvg, koalaAvg);

// dolphinAvg = calcAverage(85, 54, 41);
// koalaAvg = calcAverage(23, 34, 27);

// checkWinner(dolphinAvg, koalaAvg);

// const friends = ["Dyno", "Prasanth", "Dev", "shuhail"];
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[3] = "Yadhav";
// console.log(friends);

// const festival = function (invitedMembers) {
//   console.log(invitedMembers[1]);
// };

// festival(friends);

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const years = [1968, 2000, 2001, 1995, 1999];

// const ages = [
//   calcAge(years[2]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Dyno", "Prasanth", "Dev", "shuhail"];
// console.log(typeof friends);
// friends.push("Jake");
// console.log(friends);
// friends.unshift("Steve");
// console.log(friends);
// friends.pop();
// friends.shift();
// console.log(friends);

// const fr = friends.indexOf("Dev");
// console.log(fr);

// console.log(friends.includes("dino"));

// const bills = [125, 555, 44];
// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];
// const totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totalBill, tips, bills);

// const praveen = {
//   firstName: "Praveen",
//   lastName: "Kumar",
//   birthYear: 2000,
//   friends: ["vedha", "Nivedha", "Yogesh"],
//   job: "entrepreneur",
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(praveen.calcAge());

// console.log(
//   `${praveen.firstName} has ${praveen["friends"].length} friends, and his best friend is called ${praveen.friends[0]}.`
// );

// console.log(
//   `${praveen.firstName} is a ${praveen.calcAge()}-years old ${
//     praveen.job
//   }, and he has ${praveen.hasDriversLicense ? "a" : "no"} driver's license.`
// );

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.BMI > john.BMI) {
//   console.log(
//     `Mark's BMI (${mark.BMI}) is higher than John's BMI (${john.BMI})`
//   );
// } else {
//   console.log(
//     `John's BMI (${john.BMI}) is higher than mark's BMI (${mark.BMI})`
//   );
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
// }

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// const totalAvg = calcAverage(totals);
// console.log(bills, tips, totals, totalAvg);

// const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// let max = temperature[0];
// let min = temperature[0];

// const calcAmpl = function (temp1, temp2) {
//   const temp = temp1.concat(temp2);
//   console.log(temp);
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] === "number") {
//       if (temp[i] > max) max = temp[i];
//       if (temp[i] < min) min = temp[i];
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcAmpl([3, 5, 1], [9, 0, 5]);
// console.log(amplitude);

// let num = [10, 2, 3, 4];
// let newNums = [];
// for (let i = 0; i < num.length; i++) {
//   newNums.unshift(num[i]);
// }
// console.log(newNums);

// const calcKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degree celcius")),
//   };
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   console.log(kelvin);
// };
// calcKelvin();

// const printForeCast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++)
//     str = str.concat(`... ${arr[i]}℃ in ${i + 1} days `);
//   return str;
// };

// const temp = [17, 21, 23];
// console.log(printForeCast(temp) + "...");

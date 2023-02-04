/* 
1. থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
 */

// let n = 10;
// let sum = 0;
// for (let i = 0; i <= n; i++) {
// 	sum = sum + i;
// }
// console.log(sum);

/* 
2. ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।
*/

// let multiply = 3;

// for (let i = 1; i <= 10; i++){
//     let namta = (i + "*" + 3 + "=" + i * multiply);
//     console.log(namta);
// }

/* 
3. এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

*/

// let numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
 
// function findNumber(numberValue) {
//     let numberCount = [];
//     for (let i = 0; i < numberValue.length; i++){
//         let number = numberValue[i];
//         if (number > 5) {
//             numberCount.push(number)
//         }
//     }
//     return numberCount;
// }
// let finalResult = findNumber(numbers)
// console.log(finalResult.length);

/* 
4. তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

*/


// function friends(firstName, secondName) {

//     if (firstName.length > secondName.length) {
// 			return firstName.split('').reverse().join('');
// 		} else {
// 			return secondName.split('').reverse().join('');
// 		}
// }
// let finalOutput = friends('kamruzzaman', 'joy')
// console.log(finalOutput);

/* 
5. এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।
*/
// function millimeterToLitter(litter) {
//     let millimeter = litter / 1000;
//     return millimeter;
// }
// let LitterResult = millimeterToLitter(10000);
// console.log(LitterResult);

/* 
6. একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা। 
*/
// let human = [
//     {name:'sakib', age:30},
//     {name:'samiul', age:20},
//     {name:'sah', age:5},
//     {name:'samin', age:10}
// ]

// function persons(person){
//     let smallName = person[0];
//     for (let i = 0; i < person.length; i++) {
//         let personName = person[i]
//         if (personName.age < smallName.age) {
// 				smallName = personName;
// 		}
//     }
//     return smallName;
// }
// let findSmallPerson = persons(human)
// console.log(findSmallPerson.name);


// 7. ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

// function radianToDegree(radian) {
//     const degree = parseFloat((57.2958 * radian).toFixed(2));
//     return degree;
// }

// // const result = radianToDegree(10);
// // const result = radianToDegree(25);
// const result = radianToDegree(199);
// console.log(result);


// 8. ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।

// function isJavaScriptFile(fileName) {
   
// 			if (fileName.toLowerCase().endsWith('.js')) {
// 				return true;
//             }
//             else {
// 				return false;
// 			}
//     }
    

// let result = isJavaScriptFile('app.png')
// console.log(result);


// 9. ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।

// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা

// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।

// function oilPrice(disel, petrol, octen) {
//     let perDiselPrice = 114;
//     let perPetrolPrice = 130;
//     let perOctanePrice = 135;

//     let totalDiselCount = perDiselPrice * disel;
//     let totalPetrolCount = perPetrolPrice * petrol;
//     let totalOctaneCount = perOctanePrice * octen;

//     let totalCount = totalDiselCount + totalPetrolCount + totalOctaneCount;
//     return totalCount;
// }

// let price = oilPrice(30,20,10)
// console.log(price);

// একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।


// 10. function publicBusFare(totalPassenger){
//     if (typeof totalPassenger === 'number') {
// 			let remainPassenger = 0;
// 			if (totalPassenger >= 50) {
// 				let busPassenger = Math.floor(totalPassenger / 50) * 50;
// 				remainPassenger = totalPassenger - busPassenger;

// 				let microBusPassenger = Math.floor(remainPassenger / 11) * 11;
// 				remainPassenger = remainPassenger - microBusPassenger;
// 				publicBusTicketCost = remainPassenger * 250;
// 				return publicBusTicketCost;
// 			} else if (totalPassenger >= 11) {
// 				let microBusPassenger = Math.floor(totalPassenger / 11) * 11;
// 				remainPassenger = totalPassenger - microBusPassenger;
// 				publicBusTicketCost = remainPassenger * 250;
// 				return publicBusTicketCost;
// 			} else if (totalPassenger < 11 && totalPassenger > 0) {
// 				publicBusTicketCost = totalPassenger * 250;
// 				return publicBusTicketCost;
//         }
//             else {
//                 'Passenger number must be gratter than 0'
//         }
// 		}
// 			return ('Error: Please give the any integer number');
// }

// let result = publicBusFare(235)
// console.log(result);

 

// 11.  তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

// function isBestFriend(name1, name2){
//     if (name1.name === name2.friend && name1.friend === name2.name) {
//         return true;
//     }
//     else {
//         return false
//     }
// }


// let firstName = { name: "abul", friend: "babul" };
// let seconName = { name: "babul", friend: "abul" }
// let output = isBestFriend(firstName, seconName);
// console.log(output);





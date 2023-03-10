// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।

// function feetToInch(feet) {
//     const inch = feet * 12;
//     return inch;
// }
// let inchResult = feetToInch(15)
// console.log(inchResult);


// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।


// function centimeterToMeter(centimeter) {
//     let meter = centimeter / 100;
//     return meter;
// }
// let resultMeter = centimeterToMeter(1000)
// console.log(resultMeter);


// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

// function paperRequirements(firstBook, secondBook, thirdBook) {
//     let firstBookQuantity = 100;
//     let secondBookQuantity = 200;
//     let thirdBookQuantity = 300;


//     let firstBookCount = firstBookQuantity * firstBook;
//     let secondBookCount = secondBookQuantity * secondBook;
//     let thirdBookCount = thirdBookQuantity * thirdBook;

//     let totalBookQuantity = firstBookCount + secondBookCount + thirdBookCount;
//     return totalBookQuantity;

// }
// let finalOutput = paperRequirements(10, 25, 15);
// console.log(finalOutput);


// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

// let names = ['lojjaboti','sada', 'kalo', 'beguni', 'yellow']

// function bestFriend(friends){
//     let largestName = friends[0];

//     for (let i = 0; i < friends.length; i++){
//         let friend = friends[i]
//         if (friend.length > largestName.length) {
//             largestName = friend;

//         }
//     }
//     return largestName;
// }
// const result = bestFriend(names)
// console.log(result);


// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।


// function arrayNumbers(numbers) {
//     let positiveNumber = [];
//     for (let i = 0; i < numbers.length; i++){
//         let number = numbers[i];
//         if (number < 0) {
//             break;
//         }
//         else {
//              positiveNumber.push(number);
//         }
//     }
//     return positiveNumber;
// }

// let array = [10, 50, 80, 90, 100, 120, -65, 54 , 45];
// const result = arrayNumbers(array)
// console.log(result);

// 6. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।

// function triangle(firstSide , secondSide , thirdSide) {
    
//     let s  = (firstSide * secondSide * thirdSide) / 2;
//     let area = parseFloat(Math.sqrt(s * (s - firstSide) * (s - secondSide) * (s - thirdSide)).toFixed(2));
//     return area;
// }

// let calculate = triangle(8, 8, 8)
// console.log(calculate);

// 7.কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i < number; i++){
//         if (number % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// let result = isPrime(4)
// console.log(result);


// একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।


// function publicBusFare(totalPassenger) {
//     if (typeof totalPassenger === "number") {
//         let remianPasser = 0;
//         let bus = 50;
//         let micro = 11;
//         let publicCost = 250;
//         if (totalPassenger >= 50) {
//             let busPassenger = Math.floor(totalPassenger / bus) * 50;
//             remianPasser = totalPassenger - busPassenger;

//             let microBusPassenger = Math.floor(remianPasser / micro) * 11;
//             remianPasser = remianPasser - microBusPassenger;
//             let totalPublicBusCost = remianPasser * publicCost;
//             return totalPublicBusCost;
//         }

//         else if (totalPassenger >= 11) {
//             let microBusPassenger = Math.floor(totalPassenger / micro) * 11;
//             remianPasser = totalPassenger - microBusPassenger;
//             let totalPublicBusCost = remianPasser * publicCost;
//             return totalPublicBusCost;
//         }
//         else if (totalPassenger < 11 && totalPassenger > 0) {
//            let totalPublicBusCost = totalPassenger * 250
//             return totalPublicBusCost;
//         }
//         else {
//             return 'Please give the passenger value gratter than 0'
//         }
//     }
// }
// let calculate = publicBusFare(63)
// console.log(calculate);

// একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।
// অব্জজেক্টটি/Input দেখতে এমনঃ


// function smallestName(name) {
//     let smallName = name[0]

//     for (let i = 0; i < name.length; i++){
//         let personName = name[i]
//         if (personName.age < smallName.age) {
//             smallName = personName;

//         }
//     }
//     return smallName;
// }

// let names = [
//     {name:'sakib', age:30},
//     {name:'samiul', age:20},
//     {name:'sah', age:5},
//     {name:'samin', age:10}
// ]

// let result = smallestName(names);
// console.log(result);

let numbers = [10, 20, 35, 40, 120, 95,125]

function secondHighest(numbers) {
    let second_number = numbers.sort(function (a, b) {
        return b - a;
    })
    return second_number[1]
}
let find = secondHighest(numbers);
console.log(find);

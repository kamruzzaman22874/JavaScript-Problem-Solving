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
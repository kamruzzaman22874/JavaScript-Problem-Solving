১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।

let name = 'jamal';
let isTrue = true / false;
let number = 10;


২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।


let number = 5;
number = number +1
console.log(number);

const name = 10;
name = name + 5
console.log(name);

৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।


let firstNumber = 20;
let secondNumber = 10;

let result = firstNumber + secondNumber;
let result = firstNumber * secondNumber;
let result = firstNumber / secondNumber;
let result = firstNumber % secondNumber;
console.log(result);

৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।

let firstNumber = 20;
let secondNumber = 20;

if (firstNumber > secondNumber) {
    console.log('this is equal');
}
else {
    console.log('this is not equal');
}

৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।

let firstNumber = 10000;
let salary = 50000;

if (firstNumber === 10000 || salary === 20000) {
    console.log('True');
}
else {
    console.log('False');
}

৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো


let firstNumber = 10000;
let salary = 50000;

if (firstNumber < salary) {
    console.log('amake kicu ekta dekhao');
}
else if (firstNumber > salary) {
    console.log('biriyani khabo');
}
else {
    console.log('kicu dorkar nai');
}

৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।

var number = 7;
while (number < 19) {
    if (number % 2 === 1) {
        console.log(number);
    }
    number++
}

৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

let name = ['jamal', 'hasan', 'kamrul', 'hridoy', 'akas']
let names = ['abir', 'rony']
// let result = name.length;
// name[4]= 'jony';
let result = name.concat(names)

console.log(result);

let name = ['jamal', 'hasan', 'kamrul', 'hridoy', 'akas']

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

let numbers = [30, 50, 60, 80, 90, 100, 200]

for (let i = 0; i < numbers.length; i++){
    let number = numbers[i]
    if (number > 80) {
        console.log(number)
    }
}
১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।


function multiply(firstNumber, secondNumber, thirdNumber) {
	let result = firstNumber * secondNumber * thirdNumber;
    return result;
}

let number = multiply(10, 20, 30)
console.log(number);


১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।

let student = {
    name: 'jamal',
    age: 30,
    isHappy: true
};

student.name = 'kamrul'
console.log(student);
13. 13 er Namta

for (i = 1; i <= 10; i++){
    console.log(i + "*" + 3 + "=" + i*3);
}




এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

let numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];

let count = 0;

for (let i = 0; i < numbers.length; i++){
    number = numbers[i]
    if (number > 5) {
        // console.log(number);
        count += 1;
    }
    else {
        // console.log('not number');
    }
}

console.log(count);



function gratterThanFive(numbers) {
    let count = 0;
    for (let i = 0; i <= numbers.length; i++){
        const element = numbers[i]
        if (element > 5) {
            count++
        }
    }
    return count;
}

let result = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
let finalResult = gratterThanFive(result);
console.log(finalResult);

তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

let nameOne = 'John';
let nameTwo = 'Kamruzzaman';


let friendOne = nameOne.length
let friendTwo = nameTwo.length


if (friendOne > friendTwo) {
    console.log(nameOne.split("").reverse().join(""));
}
else {
    console.log(nameTwo.split("").reverse().join(""));
}



function reverseName(nameOne, nameTwo) {
    let friendOne = nameOne.length;
    let friendTwo = nameTwo.length;
        if (friendOne > friendTwo) {
			return (nameOne.split('').reverse().join(''));
		} else {
			return (nameTwo.split('').reverse().join(''));
		}
    
}

let result = reverseName("john", "Kamruzzaman")
console.log(result);

এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।

function mmTiMeter(meter) {
    let milimeter = 0.01 * meter;
    return milimeter;
}

let result = 100;
let count = mmTiMeter(result);
console.log(count);



একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।

const human = [
	{ name: 'sakib', age: 30 },
	{ name: 'samiul', age: 20 },
	{ name: 'sahid', age: 50 },
	{ name: 'sam', age: 10 },
];


function convertSmallName(names) {
    let smallName = names[0];
    for (i = 0; i < names.length; i++){
        let name = names[i]
        if (name < smallName) {
            smallName = name;
        }

    }
    return smallName;
}

let results = convertSmallName(human);
console.log(results);


ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

function radianToDegree(radian) {
    const degree = parseFloat((57.2958 * radian).toFixed(2));
    return degree;
}

// const result = radianToDegree(10);
// const result = radianToDegree(25);
const result = radianToDegree(199);
console.log(result);

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।

function isJavaScriptFile(fileName) {
   
			if (fileName.toLowerCase().endsWith('.js')) {
				return true;
            }
            else {
				return false;
			}
    }
    

let result = isJavaScriptFile('app.png')
console.log(result);


ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।

প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
প্রতি লিটার অকটেনের এর দাম – 135 টাকা

এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।

function oilPrice(disel, petrol, octen) {
    let perDiselPrice = 114;
    let perPetrolPrice = 130;
    let perOctanePrice = 135;

    let totalDiselCount = perDiselPrice * disel;
    let totalPetrolCount = perPetrolPrice * petrol;
    let totalOctaneCount = perOctanePrice * octen;

    let totalCount = totalDiselCount + totalPetrolCount + totalOctaneCount;
    return totalCount;
}

let price = oilPrice(30,20,10)
console.log(price);


একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।


function publicBusFare(totalPassenger){
    if (typeof totalPassenger === 'number') {
			let remainPassenger = 0;
			if (totalPassenger >= 50) {
				let busPassenger = Math.floor(totalPassenger / 50) * 50;
				remainPassenger = totalPassenger - busPassenger;

				let microBusPassenger = Math.floor(remainPassenger / 11) * 11;
				remainPassenger = remainPassenger - microBusPassenger;
				publicBusTicketCost = remainPassenger * 250;
				return publicBusTicketCost;
			} else if (totalPassenger >= 11) {
				let microBusPassenger = Math.floor(totalPassenger / 11) * 11;
				remainPassenger = totalPassenger - microBusPassenger;
				publicBusTicketCost = remainPassenger * 250;
				return publicBusTicketCost;
			} else if (totalPassenger < 11 && totalPassenger > 0) {
				publicBusTicketCost = totalPassenger * 250;
				return publicBusTicketCost;
        }
            else {
                'Passenger number must be gratter than 0'
        }
		}
			return ('Error: Please give the any integer number');
}

let result = publicBusFare(235)
console.log(result);



function busFare(totalPassenger) {
    let passenger = 0;
    let busPassengers = 50;
    let microPassengers = 11;
    

    if (totalPassenger >= 50) {
        let busPassenger = Math.floor(totalPassenger / busPassengers) * 50;
        passenger = totalPassenger - busPassenger;
        let microPassenger = Math.floor(passenger / microPassengers) * 11;
		passenger = passenger - microPassenger;
        let publicCost = passenger * 250;
        return publicCost;
    }
    else if (totalPassenger >= 11) {
        let microPassenger = (totalPassenger / microPassengers) * 11;
        passenger = totalPassenger - microPassenger;
        let publicCost = passenger * 250;
        return publicCost;
    }
    else if (totalPassenger < 11 && totalPassenger > 0) {
        return publicCost =totalPassenger * 250;
    }
    else {
        return 'Passenger must be gratter than 0'
    }
    
}

let result = busFare(2)
console.log(result);




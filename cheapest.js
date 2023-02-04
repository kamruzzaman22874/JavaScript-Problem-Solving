const phones = [
	{name: 'Samsung',camera: '13px',storage: '32gb',price: 20000,color: 'silver'},
	{name: 'Techno',camera: '13px',storage: '32gb',price: 25000,color: 'golden'},
	{name: 'Nokia',camera: '13px',storage: '32gb',price: 15000,color: 'silver'},
	{name: 'Symphony',camera: '13px',storage: '32gb',price: 35000,color: 'silver'},
	{name: 'Iphone',camera: '13px',storage: '32gb',price: 75000,color: 'silver'},
	{name: 'Motorola',camera: '13px',storage: '32gb',price: 12000,color: 'black'},
];

function cheapSheet(phones){
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const phonePrice = cheapSheet(phones)
console.log(phonePrice);
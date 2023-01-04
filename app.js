const fs = require('fs');
const genders = ['M', 'F'];
const maleNames = ['Adam', 'Bartek', 'Tomek', 'Mariusz', 'Grzegorz'];
const femaleNames = ['Ola', 'Natalia', 'Magda', 'Iza', 'Paulina'];
const lastNames = ['Jarosz', 'Orcza', 'Minta', 'Kotra'];

const randChoice = (arr) => {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
};

let people = [];

for (i = 0; i < 20; i++) {
	const gender = randChoice(genders);
	let firstNames = [];
	if (gender === 'M') {
		firstNames = maleNames;
	} else {
		firstNames = femaleNames;
	}
	const firstName = randChoice(firstNames);
	const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
	const age = Math.floor(Math.random() * 60) + 18;
	const phone = Math.floor(Math.random() * 999999999);
	const mail = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
	const person = {
		gender,
		firstName,
		lastName,
		age,
		phone,
		mail,
	};
	people.push(person);
}
const data = JSON.stringify(people);
fs.writeFile('people.json', data, (err) => {
	if (err) console.log('Something went wrong');
	console.log('File has been successfully generated! Check people.json');
});

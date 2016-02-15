var person = {
	gender: 'male',
	title:'Sr'
};
person.firstName = 'Rodolfo';
person['lastName'] = 'Fadino';
person.age=23;
console.log(person);
delete person.age;
console.log(person);
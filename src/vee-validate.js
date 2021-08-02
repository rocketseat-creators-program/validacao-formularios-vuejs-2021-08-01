import { extend } from 'vee-validate';
import { confirmed, email, max, min, required } from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

const rules = {
	confirmed,
	email,
	max,
	min,
	required,
};

Object.keys(rules).forEach((rule) => {
	extend(rule, {
		...rules[rule],
		message: messages[rule],
	});
});

extend('secretWord', {
	validate: (value) => value === 'expertsclub',
	message: 'This is not the secret word',
});

extend('strongPassword', (value) => {
	/*
		^ The password string will start this way
		(?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
		(?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
		(?=.*[0-9])	The string must contain at least 1 numeric character
		(?=.*[!@#$%^&*])	The string must contain at least one special character
		(?=.{8,})	The string must be eight characters or longer
	*/
	const strongPasswordRegex = new RegExp(
		'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
	);

	return strongPasswordRegex.test(value) || "This password isn't strong enough";
});

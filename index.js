#!/usr/bin/env node

const adventure = require('adventure');
const shop = adventure({
	name: 'write plain js with supershy',
	bg: 'blue'
});

const practices = [
    'Array:chunk',
    'Array:compact',
    'Array:difference'
];

practices.forEach((practice) => {
    shop.add(practice, () => {
        return require(`./${practice}`);
    });
})

shop.execute(process.argv.slice(2));

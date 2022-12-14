'use strict';

const Hapi = require('hapi');

// mock data

const data = [
	{ id: 1, name: 'Alex', age: 21 },
	{ id: 2, name: 'Alice', age: 23 }
];

// Create a server with a host and port
const server = Hapi.server({
	host: 'localhost',
	port: 8000
});

// Add the route
server.route({
	method: 'GET',
	path: '/',
	handler: (request, h) => {
		return 'hello world';
	}
});

server.route({
	method: 'GET',
	path: '/mock',
	handler: (request, h) => {
		return { data };
	}
});

// Start the server
async function start() {
	try {
		await server.start();
	} catch (err) {
		console.log(err);
		process.exit(1);
	}

	console.log('Server running at:', server.info.uri);
}

start();
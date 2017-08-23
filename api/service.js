module.exports = {
	orders : {
		name: 'orders',
		appId: 'sockshop',
		version: '0.0.1'
	},
	carts : {
		name: 'carts',
		appId: 'sockshop',
		version: '0.0.1'
	},
	shipping : {
		name: 'shipping',
		appId: 'sockshop',
		version: '0.0.1'
	},
	queuemaster : {
		name: 'queuemaster',
		appId: 'sockshop',
		version: '0.0.1'
	},
	user : {
		name: 'user',
		appId: 'sockshop',
		version: '0.0.1'
	},
	payment : {
		name: 'payment',
		appId: 'sockshop',
		version: '0.0.1'
	},
	catalogue : {
		name: 'catalogue',
		appId: 'sockshop',
		version: '0.0.1'
	},
	headers : {
		'X-App': 'sockshop',
		'X-Version': '0.0.1'
	},
	proxy : process.env.SERVICE_MESH_IP
}
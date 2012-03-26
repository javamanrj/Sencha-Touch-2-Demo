Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	
	name: 'Touch2Demo',

	controllers: [
		'Main'
	],

	models: [
		'Contato'
	],

	stores: [
		'Contatos'
	],

	views: [
		'ContatosList'
	],	

	viewport: {
		layout: {
			type: 'card',
			animation: {
				type: 'slide',
				duration: 1000
			}
		}
	},

	launch: function(){
	}
});
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
		Ext.Viewport.add(Ext.create('Touch2Demo.view.ContatosList'));
		Ext.Viewport.add(Ext.create('Touch2Demo.view.Panel2'));
	}
});
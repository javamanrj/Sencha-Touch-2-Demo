Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	
	name: 'Touch2Demo',

	views: [
	],

	models: [
	],

	controllers: [
		'Main'
	],

	stores: [
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
		Ext.Viewport.add(Ext.create('Touch2Demo.view.Panel1'));
		Ext.Viewport.add(Ext.create('Touch2Demo.view.Panel2'));
	}
});
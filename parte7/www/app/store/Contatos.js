Ext.define('Touch2Demo.store.Contatos',{
	extend: 'Ext.data.Store',
	config: {
		model: 'Touch2Demo.model.Contato',
		proxy: {
			type: 'localstorage',
			id: 'sencha-touch2-demo'
		},
		autoLoad: true,
		autoSync: true
	}	
});
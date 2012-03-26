Ext.define('Touch2Demo.store.Contatos',{
	extend: 'Ext.data.Store',
	config: {
		model: 'Touch2Demo.model.Contato',
		proxy: {
			type: 'ajax',
			url: 'app/data/contatos.xml',
			reader: {
				type: 'xml',
				record: 'contato',
				rootProperty: 'data'
			}
		},
		autoLoad: true
	}	
});
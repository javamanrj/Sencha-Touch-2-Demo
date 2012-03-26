Ext.define('Touch2Demo.view.ContatosList',{
	extend: 'Ext.dataview.List',
	alias: 'widget.contatoslist',
	config: {		
		store: 'Contatos',
		itemTpl: '{nome} - {sobrenome}',
		onItemDisclosure: true,
		items: [
			{
	            docked: 'top',
	            xtype: 'toolbar',
	            ui   : 'light',
	            title: 'Lista de contatos',
	            items: [
	            	{
	            		xtype: 'spacer'	
	            	},
	                {
	                    xtype: 'button',
	                    action: 'novoContato',
	                    text: 'Novo Contato'
	                }
	            ]
	        }
		]
	}
});
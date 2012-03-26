Ext.define('Touch2Demo.view.ContatosList',{
	extend: 'Ext.dataview.List',
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
	                    ui: 'forward',
	                    action: 'mudarPainel2',
	                    text: 'Mudar para painel 2'
	                }
	            ]
	        }
		]
	}
});
Ext.define('Touch2Demo.view.Panel1',{
	extend: 'Ext.Container',
	config: {
		html: 'Painel 1',
		items: [
			{
	            docked: 'top',
	            xtype: 'toolbar',
	            ui   : 'light',
	            items: [
	                {
	                    xtype: 'button',
	                    action: 'mudarPainel2',
	                    text: 'Mudar para painel 2'
	                }
	            ]
	        }
		]
	}
});
Ext.define('Touch2Demo.view.Panel2',{
	extend: 'Ext.Container',
	config: {
		html: 'Painel 2',
		items: [
			{
	            docked: 'top',
	            xtype: 'toolbar',
	            ui   : 'light',
	            items: [
	                {
	                    xtype: 'button',
	                    ui: 'back',
	                    action: 'mudarPainel1',
	                    text: 'Mudar para painel 1'
	                }
	            ]
	        }
		]
	}
});
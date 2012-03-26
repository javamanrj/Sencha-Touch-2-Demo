Ext.define('Touch2Demo.view.Panel2',{
	extend: 'Ext.Container',
	alias: 'widget.panel2',
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
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
	],

	stores: [
	],

	viewport: {
		layout: {
			type: 'card',
			animation: {
				type: 'slide',
				duration: 3000
			}
		}
	},

	launch: function(){
		Ext.Viewport.add(
			{
				html: 'Painel 1',
				items: [
					{
			            docked: 'top',
			            xtype: 'toolbar',
			            ui   : 'light',
			            items: [
			                {
			                    text: 'Mudar para painel 2',
			                    listeners: {
			                    	tap: function(){
			                    		Ext.Viewport.setActiveItem(1);
			                    	}
			                    }
			                }
			            ]
			        }
				]
			},
			{
				html: 'Painel 2',
				items: [
					{
			            docked: 'top',
			            xtype: 'toolbar',
			            ui   : 'light',
			            items: [
			                {
			                    text: 'Mudar para painel 1',
			                    ui: 'back',
			                    listeners: {
			                    	tap: function(){
			                    		Ext.Viewport.setActiveItem(0);
			                    	}
			                    }
			                }
			            ]
			        }
				]
			}
		)
	}

});
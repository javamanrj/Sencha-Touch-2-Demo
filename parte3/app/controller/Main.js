Ext.define('Touch2Demo.controller.Main',{
	extend: 'Ext.app.Controller',
	config: {
		control: {
			'button[action=mudarPainel1]' : {
				tap: 'onMudarPainel1'
			},

			'button[action=mudarPainel2]' : {
				tap: 'onMudarPainel2'
			}			
		}
	},

	onMudarPainel1: function(button){
		Ext.Viewport.setActiveItem(0);
		console.log('mudando para painel 1');
	},

	onMudarPainel2: function(button){
		Ext.Viewport.setActiveItem(1);
		console.log('mudando para painel 2');
	}

});
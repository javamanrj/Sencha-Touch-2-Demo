Ext.define('Touch2Demo.controller.Main',{
	extend: 'Ext.app.Controller',
	config: {

		routes: {
			'': 'showContatosList',
			'index.html': 'showContatosList'
		},

		control: {
			'button[action=mudarPainel1]' : {
				tap: 'onMudarPainel1'
			},

			'button[action=mudarPainel2]' : {
				tap: 'onMudarPainel2'
			}			
		}
	},

	showContatosList: function(){
		Ext.Viewport.add(Ext.create('Touch2Demo.view.ContatosList'));
	},

	onMudarPainel1: function(button){
		Ext.Viewport.setActiveItem(0);
	},

	onMudarPainel2: function(button){
		Ext.Viewport.add(Ext.create('Touch2Demo.view.Panel2'));
		Ext.Viewport.setActiveItem(1);
	}
});
	Ext.define('Touch2Demo.controller.Main',{
	extend: 'Ext.app.Controller',
	config: {

		routes: {
			'': 'showContatosList',
			'index.html': 'showContatosList'
		},

		refs: {
			contatosList: {
				xtype: 'contatoslist',
				selector: 'contatoslist',
				autoCreate: true
			},

			contatosForm: {
				xtype: 'contatosform',
				selector: 'contatosform',
				autoCreate: true
			},

			panel2: {
				xtype: 'panel2',
				selector: 'panel2',
				autoCreate: true
			}
		},

		control: {
			'button[action=mudarPainel1]' : {
				tap: 'showContatosList'
			},

			'button[action=novoContato]' : {
				tap: 'showContatosForm'
			},	

			'button[action=voltarContatosList]' : {
				tap: 'showContatosList'
			},	

			'button[action=mudarPainel2]' : {
				tap: 'onMudarPainel2'
			},
			
			contatosList: {
				itemtap: 'showContatosForm'
			}		
		}
	},

	showContatosList: function(){
		Ext.Viewport.setActiveItem(this.getContatosList());
	},

	showContatosForm: function(view, index, target, record, evt, opts){
		if(record && record.data){
			this.getContatosForm().setRecord(record);	
		}else{
			this.getContatosForm().reset();
		}
		Ext.Viewport.setActiveItem(this.getContatosForm());
	},

	onMudarPainel2: function(button){
		Ext.Viewport.setActiveItem(this.getPanel2());
		console.log(Ext.Viewport.getInnerItems());
	}
});
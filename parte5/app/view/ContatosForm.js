Ext.define('Touch2Demo.view.ContatosForm',{
	
	extend: 'Ext.form.Panel',
	alias: 'widget.contatosform',

	config: {
		items: [
			{
	            docked: 'top',
	            xtype: 'toolbar',
	            ui   : 'light',
	            title: 'Editando contato',
	            items: [
	                {
	                    xtype: 'button',
	                    ui: 'back',
	                    action: 'voltarContatosList',
	                    text: 'Contatos'
	                }
	            ]
	        },
	        {
	        	xtype: 'fieldset',
	        	title: 'Contato',
	        	items: [
	        		{
	        			xtype: 'textfield',
	        			name: 'nome',
	        			label: 'Nome'
	        		},
	        		{
	        			xtype: 'textfield',
	        			name: 'sobrenome',
	        			label: 'Sobrenome'
	        		},
	        		{
	        			xtype: 'textfield',
	        			name: 'email',
	        			label: 'Email'
	        		},
	        		{
	        			xtype: 'textfield',
	        			name: 'endereco',
	        			label: 'Endereco'
	        		}
	        	]
	        },
	        {
	        	xtype: 'button',
	        	action: 'salvarContato',
	        	ui: 'action',
	        	text: 'Salvar'
	        },
	        {
	        	xtype: 'button',
	        	action: 'deletarContato',
	        	ui: 'action',
	        	text: 'Deletar',
	        	hidden: true
	        }
		]
	}

});
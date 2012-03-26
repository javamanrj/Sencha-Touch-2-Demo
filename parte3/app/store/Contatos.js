Ext.define('Touch2Demo.store.Contatos',{
	extend: 'Ext.data.Store',
	config: {
		model: 'Touch2Demo.model.Contato',
		data: [
			{
				nome: 'Joao',
				sobrenome: 'Silva'
			},
			{
				nome: 'Zaedy',
				sobrenome: 'Sayao'
			}
		]
	}
});
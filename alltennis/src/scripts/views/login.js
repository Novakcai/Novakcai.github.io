var loginTpl = require('../tpl/login.string');

SPA.defineView('login',{
	html: loginTpl,





	plugins: ['delegated'],

	bindActions:{
		'tap.login':function(){
			this.hide();
		}
	},

	bindEvents:{
	}



})
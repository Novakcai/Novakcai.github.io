var indexTpl = require('../tpl/index.string');

SPA.defineView('index',{
	html: indexTpl,





	plugins: ['delegated'],




	modules: [{
		name: 'content',
		views: ['home', 'video' ,'community' , 'rank' ,'search'],
		//将视图装到哪
		container: '.l-index-content',
		defaultTag: 'home'
	}],
	//点击nav切换
	bindActions: {
		'tap.switch': function(e, data){
			this.modules.content.launch(data.tag);
			$(e.el).addClass('active').siblings().removeClass('active');
		}
	}

})
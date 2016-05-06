require('../lib/swiper-3.3.1.min.js');
var guideTpl = require('../tpl/guide.string');

SPA.defineView('guide', {
	html: guideTpl,

	plugins: ['delegated'],

	bindActions: {

		
	},
	//延迟多少秒进入下一个视图
	bindEvents: {
		"beforeShow":function(){
			setTimeout(function(){
				SPA.show('index');
			},2000)	
		}
	}
});
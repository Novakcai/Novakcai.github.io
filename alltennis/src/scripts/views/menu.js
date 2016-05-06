var menuTpl = require('../tpl/menu.string');

SPA.defineView('menu',{
	html: menuTpl,





	plugins: ['delegated'],


// 	bindActions: {
// 		'tap.menu': function () {
// 	    var el = document.body;
// 	    var mask = $('<div class="mask"></div>');
// 	    $(el).append(mask);

// 	    SPA.show('menu', {
// 	      ani: {
// 	        name: 'popup',
// 	        width: 180,
// 	        height: $(el).height(),
// 	        duration: 100,
// 	        autoHide: true,
// 	        autoDirection: false,
// 	        direction: 'left'
// 	      }
// 	    }, el);
// 	  }
// 	},
bindActions:{
	'tap.menu': function(){
		SPA.show('login');
		
	}
},
bindEvents:{
	'beforeShow': function(){
			var self = this;
	    	var root = this.root;
	    	var zIndex = $(root).css('z-index');
	    	var $mask = $('body .mask');
	    	$mask.css('z-index',zIndex-1);
	    	$mask.on('tap', function(){
	    		self.hide();
	    		$(this).remove();
	    	});
			}
		}
})

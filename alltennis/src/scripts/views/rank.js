require('../lib/swiper-3.3.1.min.js');
var rankTpl = require('../tpl/rank.string');

SPA.defineView('rank',{
	html: rankTpl,

	plugins: ['delegated'],
	init:{
		rankSwiper:null
	},
	bindActions:{
		'switch.rankhot': function(e,data){
			var $el = $(e.el);
			this.rankSwiper.slideTo($(e.el).index());
			$el.addClass('active').siblings().removeClass('active');
		},
		'tap.menu': function () {
	    var el = document.body;
	    var mask = $('<div class="mask"></div>');
	    $(el).append(mask);
	    SPA.show('menu', {
	      ani: {
	        name: 'popup',
	        width: 180,
	        height: $(el).height(),
	        duration: 300,
	        autoHide: true,
	        autoDirection: false,
        	direction: 'left'
	      }
	    }, el);
	  },
	},
	bindEvents: {
		'beforeShow': function(){
				var self = this;
			    self.rankSwiper = new Swiper('#rank-swiper',{
				loop: false,
				onSlideChangeStart: function(){
					$('#rank-ul li')
					.eq(self.rankSwiper.activeIndex)
					.addClass('active')
					.siblings()
					.removeClass('active');		
				}
			})

		}
	}

})
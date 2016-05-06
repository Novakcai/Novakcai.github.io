require('../lib/swiper-3.3.1.min.js');
var homeTpl = require('../tpl/home.string');
SPA.defineView('home',{
	html: homeTpl,

	plugins: ['delegated',{
		name: 'avalon',
		options: function(vm){
			vm.livelist = [];
		},
	}],
	init: {
		myHomeSwiper: null,
		navSwiper: null,
		vm: null
	},

	bindActions: {
	 //蒙层和滑动登陆菜单
	'switch.homehot': function(e, data){
			var $el = $(e.el);
			this.myHomeSwiper.slideTo($(e.el).index());
			$el.addClass('active').siblings().removeClass('active');
		},
		'tap.menu': function () {
	    var el = document.body;
	    var mask = $('<div class="mask"></div>');
	    $(el).append(mask);
	    SPA.show('menu', {
	      ani: {
	        name: 'popup',
	        width: 200,
	        height: $(el).height(),
	        duration: 300,
	        autoHide: true,
	        autoDirection: false,
        	direction: 'left'
	      }
	    }, el);
	  }
	},		
	bindEvents: {
		'beforeShow': function(){
				var  self = this;
				self.vm = self.getVM();
				$.ajax({
					url: '/alltennis/mock/livelist.json',
					success: function(res){
						self.vm.livelist = res.data;
					},
					error: function(data){
						
					}
				});

				var size = 35;
				var myScroll = new IScroll('#swiper-big', {
				    probeType: 3,
				    mouseWheel: true
				});
				myScroll.scrollBy(0, -size);

				var head = $('.head img'),
				    topImgHasClass = head.hasClass('up');
				var foot = $('.foot img'),
				    bottomImgHasClass = head.hasClass('down');
				myScroll.on('scroll', function () {
				    var y = this.y,
				        maxY = this.maxScrollY - y;
				    if (y >= 0) {
				        !topImgHasClass && head.addClass('up');
				        return '';
				    }
				    if (maxY >= 0) {
				        !bottomImgHasClass && foot.addClass('down');
				        return '';
				    }
				});




				//this 和that的替换
				var that = this;
				myScroll.on('scrollEnd', function () {
				    if (this.y >= -size && this.y < 0) {
				        myScroll.scrollTo(0, -size);
				        head.removeClass('up');
				    } else if (this.y >= 0) {
				        head.attr('src', '/alltennis/images/ajax-loader.gif');
				        //TODO ajax下拉刷新数据
                       
				        setTimeout(function () {
				            myScroll.scrollTo(0, -size);
				            head.removeClass('up');
				            head.attr('src', '/alltennis/images/arrow.png');
				        }, 1000);
				    }
				    
				    var maxY = this.maxScrollY - this.y;
				    if (maxY > -size && maxY < 0) {
				        var self = this;
				        myScroll.scrollTo(0, self.maxScrollY + size);
				        foot.removeClass('down')
				    } else if (maxY >= 0) {
				    	var self = this;
				        foot.attr('src', '/alltennis/images/ajax-loader.gif');
				        //TODO ajax上拉加载数据
				         //将数据push到里面
				        $.ajax({
				        	url: '/alltennis/mock/livelist.json',
							success: function(res){
								for (var i = 0;i<res.data.length;i++) {
									that.vm.livelist.push(res.data[i]);
								}
									// that.vm.livelist = res.data;
								 // console.log(that.vm.livelist);
								myScroll.refresh();
							 	setTimeout(function () {
					            myScroll.scrollTo(0, self.y + size);
					            foot.removeClass('down');
					            foot.attr('src', '/alltennis/images/arrow.png');
					            }, 1000);
								},

				        })
				    }
				}),




                //点击滑动和下边框切换
			    self.myHomeSwiper = new Swiper('#home-swiper',{
					loop: false,
					onSlideChangeStart: function(){
						$('#home-hot-nav li')
						.eq(self.myHomeSwiper.activeIndex)
						.addClass('active')
						.siblings()
						.removeClass('active');		
					}
				}),
				//轮播图
				self.navSwiper = new Swiper('#nav-swiper',{
					loop: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
	        		spaceBetween: 30,
	        		centeredSlides: true,
	       			autoplay: 2500,
	        		autoplayDisableOnInteraction: false
					})
			},










		}
})





 
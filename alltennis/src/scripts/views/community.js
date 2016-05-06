var communityTpl = require('../tpl/community.string');

SPA.defineView('community',{
	html: communityTpl,

init:{
	vm: null,
	num: 1

},



	plugins: ['delegated',{
		name: 'avalon',
		options: function(vm){
		 	vm.isTrue = false	
		}
	}],
	bindActions: {
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
	    'tap.comi':function(){

	  	if( this.num == 1 ){
	  		this.vm.isTrue = true;
	  		this.num = 0;
	  	}else{
	  		this.vm.isTrue = false;
	  		this.num = 1;
	  	}
	  	
	  }
			
	},


	bindEvents:{
		'beforeShow':function(){
			this.vm = this.getVM();
		}
	}



})

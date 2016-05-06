require('./lib/spa.min.js');

require('./views/index');
require('./views/home');
require('./views/search');
require('./views/video');
require('./views/rank');
require('./views/community');
require('./views/show');
require('./views/menu');
require('./views/login');
require('./views/guide');


//开始进入哪个界面
SPA.config({
	indexView: 'guide'
})
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: './'
});

// current module
var currentModule = 'app/' + document.location.href.match('[^\/]+$')[0].split('.')[0];

// Start libs.
requirejs(['lib/lib1', 'lib/lib2', 'lib/lib3']);

// Start global scripts.
requirejs(['app/global1', 'app/global2', 'app/global3'], function(global1, global2, global3) {
	global1.init();
	global2.init();
	global3.init();
});

// Start current module.
requirejs([currentModule], function(cm) {
	cm.init();
});
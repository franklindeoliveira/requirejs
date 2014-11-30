define(['app/modulo2', 'app/modulo3'], function(modulo2, modulo3) {

    var Page2 = {
        init: function() {
    		console.log('Module Page2 loaded!');
    		modulo2.consoleMsg('Module Modulo2 loaded!');
    		modulo3.consoleMsg('Module Modulo3 loaded!');
    	}
    };
    
    return Page2;
});
define(['app/modulo1'], function(modulo1) {

    var Page1 = {
        init: function() {
    		console.log('Module Page1 loaded!');
    		modulo1.consoleMsg('Module Modulo1 loaded!');
    	}
    };
    
    return Page1;
});
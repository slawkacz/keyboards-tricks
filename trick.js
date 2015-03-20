var Trick = {};
(function(namespace){       
    namespace.init = function(){
        var clickedKeys = namespace.keys.slice(0);
        var timer = 0;
        window.addEventListener("keyup", function(event){
            var keyIndex = clickedKeys.indexOf(event.which);
            if(keyIndex === 0) {
                if(clickedKeys.length-1 > 0) {
                    clickedKeys = clickedKeys.slice(-clickedKeys.length+1);
                    timer = setTimeout(function(){
                        clickedKeys = namespace.keys.slice(0); 
                    },2000);
                } else {
                    clickedKeys = namespace.keys.slice(0); 
                    clearTimeout(timer);
                    namespace.callback(clickedKeys,event);
                }
            }
            else
                clickedKeys = namespace.keys.slice(0);     
                    
        }, false);
    }
})(Trick);
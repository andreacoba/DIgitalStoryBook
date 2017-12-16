/* Bibimbaps Drive Around Town */

var bibimbaps = (function(window, document, $){

    return { // visible to the callee
        load: function() {
            setTimeout(function(){ // wait to allow everything to load
                
                 $ ("html").addClass("loaded") // makes loader image go away
                 .removeClass("loading");
     
                 /*
                 setTimeout(function(){
                     $("html").removeClass("loading");
                 }, 3500); */
     
             }, 4000); // 4 seconds
        }
    };
})(window, document, window.jQuery);
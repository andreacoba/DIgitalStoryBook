/* Bibimbaps Drive Around Town */

var bibimbaps = (function(window, document, $){
    
    var loadingSaucer= '<div id="loader"><div class="cup"><svg version="1.1" id="brew" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="266px" height="25px" viewBox="0 0 266 25" enable-background="new 0 0 266 25" xml:space="preserve"><ellipse fill="#903741" cx="133" cy="12.5" rx="133" ry="12.5"/></svg><p>Please wait while we load</p></div><div class="saucer"></div></div>';
    $(".loading-card").append(loadingSaucer);

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
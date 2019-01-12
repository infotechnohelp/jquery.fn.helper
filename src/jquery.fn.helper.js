(function (jQuery) {

    jQuery.fn.isShown = function(){
        return jQuery(this).css('display') !== 'none';
    };

}(jQuery));
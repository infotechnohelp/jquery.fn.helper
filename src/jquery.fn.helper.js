(function (jQuery) {

    jQuery.fn.isShown = function () {
        var result = true;

        this.each(function () {
            if (jQuery(this).css('display') === 'none') {
                result = false;
            }
        });

        return result;
    };

    jQuery.fn.slideDownUp = function (options) {

        var js = new Helper();

        if (options === undefined) {
            options = {};
        }

        var defaultOptions = {
            slideDown: 1000,
            delay: 1000,
            slideUp: 1000
        };

        return this.each(function () {
            jQuery(this)
                .finish()
                .slideDown(js.setOption('slideDown', options, defaultOptions))
                .delay(js.setOption('delay', options, defaultOptions))
                .slideUp(js.setOption('slideUp', options, defaultOptions));
        });
    };

}(jQuery));
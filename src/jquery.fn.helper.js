(function (jQuery) {

    // @todo Move to js.helper later
    function setOption(optionTitle, options, defaultOptions){
        return options[optionTitle] === undefined ? defaultOptions[optionTitle] : options[optionTitle];
    }

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
                .slideDown(setOption('slideDown', options, defaultOptions))
                .delay(setOption('delay', options, defaultOptions))
                .slideUp(setOption('slideUp', options, defaultOptions));
        });
    };

}(jQuery));
(function (jQuery) {

    var js = new Helper();

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


    jQuery.fn.scrollEnd = function (callback, timeout) {

        var scrollTimeout = null;
        $(this).scroll(function () {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(callback, timeout);
        });

    };

    jQuery.fn.resizeEnd = function (callback, timeout) {

        var resizeTimeout = null;
        $(this).resize(function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(callback, timeout);
        });

    };

    jQuery.fn.mousemoveEnd = function (callback, timeout) {

        var mousemoveTimeout = null;
        $(this).mousemove(function () {
            clearTimeout(mousemoveTimeout);
            mousemoveTimeout = setTimeout(callback, timeout);
        });

    };

    jQuery.fn.isOnScreen = function (options) {

        var win = $(window);

        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };

        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.outerHeight();

        if (options.marginBottom !== undefined) {
            viewport.bottom = viewport.bottom - options.marginBottom;
        }

        var bounds = this.offset();

        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };

}(jQuery));
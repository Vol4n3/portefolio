/**
 * Created by vol4n3 on 20/06/2017.
 */
$(document).ready(function () {
    "use strict";
    /*NAV EFFECT-CUT*/
    var $nav_effect_cut = $('.nav-effect-cut > li');
    $nav_effect_cut.hover(function () {
        setTimeout(function () {
            $(this).addClass('drop')
        }.bind(this), 300)
    }, function () {
        setTimeout(function () {
            $(this).removeClass('drop')
        }.bind(this), 300)
    });
    $nav_effect_cut.each(function (i) {
        var text = $(this).children().text();
        $('<div class="top"><a>' + text + '</a></div>').appendTo(this);
        $('<div class="bottom"><a>' + text + '</a></div>').appendTo(this);
    });
});
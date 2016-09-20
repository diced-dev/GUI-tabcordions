!function(a){var b={},c={};c.toggle=function(b,c,d){if(a.debugging("collapsible: Toggle called","report"),b instanceof jQuery)var e=b;else var e=$(b);jQuery.fn.reverse=[].reverse,e.reverse().each(function(){var b=$(this),e=b.hasClass("is-open");e?a.collapsible.close(b,c,d):a.collapsible.open(b,c,d)})},c.close=function(b,c,d){if(a.debugging('collapsible: Closing element "'+b+'"',"report"),b instanceof jQuery)var e=b;else var e=$(b);if(!e.length)return void a.debugging("collapsible: No element found to close","error");var f=e.height();e.css({height:f}).removeClass("is-open").attr("aria-hidden","true"),c?e.stop(!0).animate({height:0},300,d):(e.css({height:0}),"undefined"!=typeof d&&null!==d&&d())},c.open=function(b,c,d,e){if(a.debugging('collapsible: Opening element "'+b+'"',"report"),void 0===e&&(e=!0),b instanceof jQuery)var f=b;else var f=$(b);if(!f.length)return void a.debugging("collapsible: No element found to open","error");if(c){var g=f.css("height"),h=f.css({height:"auto"}).height();f.css({height:g})}f.addClass("is-open").attr("aria-hidden","false"),e&&f.first().focus(),c?f.stop(!0).animate({height:h},400,function(){f.css({height:""}),"undefined"!=typeof d&&null!==d&&d()}):(f.css({height:""}),"undefined"!=typeof d&&null!==d&&d())},b.init=function(){a.debugging("tabcordion: Initiating","report"),$(".js-collapsible").length&&(a.debugging("tabcordion: Found instance","report"),a.tabcordion.render())},b.render=function(){a.debugging("tabcordion: Rendering","report"),$(".js-collapsible").not(".js-rendered").on("click arrow",function(b){a.debugging("collapsible: Collapsible clicked","interaction"),b.preventDefault();var c=$(this),d=c.attr("href")?c.attr("href"):c.attr("data-collapsible"),e=c.parents(".tabcordion"),f="undefined"!==e.attr("data-tabcordion-scroll")&&"none"!==e.attr("data-tabcordion-scroll");if(e.length){a.debugging("collapsible: Found to be inside tabcordion","report");var g=c.parents(".tabcordion").find(".collapsible-body"),h=1===parseInt($("html").css("line-height")),i=!0;if(h||(i=!1,c.parents(".tabcordion-accordion").length&&(i=!0)),c.parents(".tabcordion-tabs").length&&(i=!1),a.collapsible.close(g.filter(".is-open"),i),f){a.debugging("collapsible: Open accordion with scroll-to-content","report");var j=e.attr("data-tabcordion-scroll");void 0===j&&(j=0),a.collapsible.open(e.find(d),i,function(){$("html, body").animate({scrollTop:c.offset().top-60-j},200)},!1)}else{a.debugging("collapsible: Open accordion without scroll-to-content","report");var k=$(window).scrollTop();$(window).one("scroll",function(){$(window).scrollTop(k)}),a.collapsible.open(e.find(d),i,null,!1)}e.find(".js-collapsible").parents(".js-collapsible-tab").removeClass("is-active"),e.find('.js-collapsible[data-collapsible="'+d+'"], .js-collapsible[href="'+d+'"]').parents(".js-collapsible-tab").addClass("is-active"),e.find(".js-collapsible").attr("aria-selected",!1).attr("aria-expanded",!1),e.find('.js-collapsible[data-collapsible="'+d+'"], .js-collapsible[href="'+d+'"]').attr("aria-selected",!0).attr("aria-expanded",!0),"click"===b.type&&$(d).focus()}else{a.debugging("collapsible: Triggering pure toggle","report");var l=c.attr("data-collapsible-mode");"show"===l?a.collapsible.open(d,!0):"hide"===l?a.collapsible.close(d,!0):a.collapsible.toggle(d,!0)}}),$(".tabcordion-tabs .js-collapsible").not(".js-rendered").on("keydown",function(b){a.debugging("collapsible: Keyboard used","interaction");var c,d=$(this),e=d.parents("li").prev().children(".js-collapsible"),f=d.parents("li").next().children(".js-collapsible"),g=d.parents(".tabcordion-tabs").find(".js-collapsible"),h="";switch(b.keyCode){case 37:c=e,h="Left";break;case 39:c=f,h="Right";break;default:c=!1}c.length&&(a.debugging("collapsible: "+h+" arrow key used","interaction"),g.attr("tabindex","-1"),c.attr("tabindex",null).focus().trigger("arrow"))}),$(".js-collapsible").addClass("js-rendered")},a.tabcordion=b,a.collapsible=c,a.tabcordion.init()}(GUI);
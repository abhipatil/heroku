/**
 * @name		jQuery touchTouch plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2012/04/mobile-touch-gallery/
 * @license		MIT License
 */
(function(){var e=$('<div id="galleryOverlay">'),t=$('<div id="gallerySlider">'),n=$('<a id="prevArrow"></a>'),r=$('<a id="nextArrow"></a>'),i=false;$.fn.touchTouch=function(){function f(t){if(i){return false}e.show();setTimeout(function(){e.addClass("visible")},100);c(t);i=true}function l(){if(!i){return false}e.hide().removeClass("visible");i=false;$(".placeholder").empty();a=u}function c(e){t.css("left",-e*100+"%")}function h(e){setTimeout(function(){p(e)},1e3)}function p(e){if(e<0||e>=a.length){return false}d(a.eq(e).attr("href"),function(){s.eq(e).html(this)})}function d(e,t){var n=$("<img>").on("load",function(){t.call(n)});n.attr("src",e)}function v(){if(o+1<a.length){o++;c(o);h(o+1)}else{t.addClass("rightSpring");setTimeout(function(){t.removeClass("rightSpring")},500)}}function m(){if(o>0){o--;c(o);h(o-1)}else{t.addClass("leftSpring");setTimeout(function(){t.removeClass("leftSpring")},500)}}var s=$([]),o=0,u=this,a=u;e.hide().appendTo("body");t.appendTo(e);a.each(function(){s=s.add($('<div class="placeholder">'))});t.append(s).on("click",function(e){if(!$(e.target).is("img")){l()}});$("body").on("touchstart","#gallerySlider img",function(e){var n=e.originalEvent,r=n.changedTouches[0].pageX;t.on("touchmove",function(e){e.preventDefault();n=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];if(n.pageX-r>10){t.off("touchmove");m()}else if(n.pageX-r<-10){t.off("touchmove");v()}});return false}).on("touchend",function(){t.off("touchmove")});a.on("click",function(e){e.preventDefault();var t=$(this),n,r,i=t.parent().closest("[data-gallery]");if(t.attr("data-gallery")){n=t.attr("data-gallery");r="item"}else if(i.length){n=i.attr("data-gallery");r="ancestor"}if(n&&r=="item"){a=$("[data-gallery="+n+"]")}else if(n&&r=="ancestor"){a=a.filter(function(){return $(this).parent().closest("[data-gallery]").length})}o=a.index(this);f(o);p(o);h(o+1);h(o-1)});if(!("ontouchstart"in window)){e.append(n).append(r);n.click(function(e){e.preventDefault();m()});r.click(function(e){e.preventDefault();v()})}$(window).bind("keydown",function(e){if(e.keyCode==37){m()}else if(e.keyCode==39){v()}})}})(jQuery)
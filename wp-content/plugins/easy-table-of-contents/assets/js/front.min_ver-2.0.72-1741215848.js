jQuery((function(e){if("undefined"!=typeof ezTOC){function t(){if(0!==e(".ez-toc-widget-container.ez-toc-affix").length){var t=30;void 0!==ezTOC.scroll_offset&&(t=parseInt(ezTOC.scroll_offset)),e(ezTOC.affixSelector).stick_in_parent({inner_scrolling:!1,offset_top:t})}if(e.fn.shrinkTOCWidth=function(){e(this).css({width:"auto",display:"table"}),/MSIE 7\./.test(navigator.userAgent)&&e(this).css("width","")},void 0!==ezTOC.visibility_hide_by_default){var i=e(".ez-toc-toggle:not(.ez-toc-loaded),.ez-toc-widget-sticky-toggle:not(.ez-toc-loaded)"),o=void 0!==ezTOC.visibility_hide_by_device?ezTOC.visibility_hide_by_device:0,n=ezTOC.visibility_hide_by_default;e.each(i,(function(t,i){var c=e(this);e(c).addClass("ez-toc-loaded");var s=e(c).parents("#ez-toc-container,#ez-toc-widget-container,#ez-toc-widget-sticky-container").find("ul.ez-toc-list,ul.ez-toc-widget-sticky-list");e(s).hasClass("eztoc-toggle-hide-by-default")&&(n=1),"undefined"!=typeof Cookies&&(Cookies?(1==Cookies.get("ezTOC_hidetoc-"+t)?e(c).data("visible",!1):e(c).data("visible",!0),Cookies.remove("ezTOC_hidetoc-"+t)):(e(c).data("visible",!0),Cookies.remove("ezTOC_hidetoc-"+t))),n&&"0"!=o&&e(c).data("visible",!1),e(c).data("visible")||s.hide(),e(c).on("click",(function(i){i.preventDefault();const o=document.querySelector("#ez-toc-container");if(o)o.classList.toggle("toc_close");else{document.querySelector(".ez-toc-widget-container,.ez-toc-widget-sticky-container").classList.toggle("toc_close")}e(this).data("visible")?(e(this).data("visible",!1),"undefined"!=typeof Cookies&&Cookies&&(n?Cookies.set("ezTOC_hidetoc-"+t,null,{path:"/",sameSite:"Strict"}):Cookies.set("ezTOC_hidetoc-"+t,"1",{expires:30,path:"/",sameSite:"Strict"})),s.hide("fast")):(e(this).data("visible",!0),"undefined"!=typeof Cookies&&Cookies&&(n?Cookies.set("ezTOC_hidetoc-"+t,"1",{expires:30,path:"/",sameSite:"Strict"}):Cookies.set("ezTOC_hidetoc-"+t,null,{path:"/",sameSite:"Strict"})),s.show("fast"))}))}))}var c=e("span.ez-toc-section").toArray(),s=function(t){return t.reduce((function(t,i){return t[i.id]=function(t){return e('.ez-toc-widget-container .ez-toc-list a[href="#'+e(t).attr("id")+'"]')}(i),t}),{})}(c),a=e.map(s,(function(e,t){return e})),l=function(){var t=5;void 0!==ezTOC.smooth_scroll&&1===parseInt(ezTOC.smooth_scroll)&&(t=void 0!==ezTOC.scroll_offset?parseInt(ezTOC.scroll_offset):30);var i=e("#wpadminbar");i.length&&(t+=i.height());return t}();function r(){var t=function(t,i){var o=e(window).scrollTop()+t+1,n=i[0],c=o-e(n).offset().top;return i.forEach((function(t){var i=o-e(t).offset().top;i>0&&i<c&&(c=i,n=t)})),n}(l,c);if(t){var i=s[t.id];!function(e,t){t.forEach((function(t){e!==t&&t.parent().hasClass("active")&&t.parent().removeClass("active")}))}(i,a),function(t){var i=t.parent();i.hasClass("active")||i.addClass("active");!function(t){var i=function(t){var i=e(t),o=i.html();i.parent().append('<li id="ez-toc-height-test" class="active">'+o+"</li>");var n=e("#ez-toc-height-test"),c=n.height();return n.remove(),c-(i.children("ul").first().height()||0)}(t);!function(t){e(".ez-toc-widget-container ul.ez-toc-list li.active").css("height",t+"px")}(i)}(i)}(i)}}c.length>0&&e(".ez-toc-widget-container").length&&e(window).on("load resize scroll",r)}e("#ez-toc-container").length&&(e("#ez-toc-container .ez-toc-toggle label span").html()||e("#ez-toc-container .ez-toc-toggle label").html(ezTOC.fallbackIcon)),ezTOC.init=function(){t()},t(),void 0!==ezTOC.ajax_toggle&&1===parseInt(ezTOC.ajax_toggle)&&e(document).ajaxComplete((function(){t()}))}e(document).on("click","#ez-toc-open-sub-hd",(function(t){e(this).attr("id","ez-toc-open-sub-hd-active"),t.preventDefault()})),e(document).on("click","#ez-toc-open-sub-hd-active",(function(t){e(this).attr("id","ez-toc-open-sub-hd"),t.preventDefault()})),e("#ez-toc-more-links-enabler").click((function(){e(".ez-toc-more-link").show(),e("#ez-toc-more-links-enabler").hide(),e("#ez-toc-more-links-disabler").attr("style","display:inline-block")})),e("#ez-toc-more-links-disabler").click((function(){e(".ez-toc-more-link").hide(),e("#ez-toc-more-links-enabler").show(),e("#ez-toc-more-links-disabler").hide()})),1===parseInt(ezTOC.chamomile_theme_is_on)&&e("#ez-toc-container").find(".hamburger").remove()}));
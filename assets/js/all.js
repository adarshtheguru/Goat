$(document).ready(function(){for(var n,o=new Date,o=($(".copyrightYear").html(o.getFullYear()),$(window).height()),t=$(window).width(),s=$("header").outerHeight(),i=(isFloorplan=0,isBrochure=0,1024<t&&$(".banner_ht").css("min-height",o),t<768&&$(".section-first").css("margin-top",s-5),$(".goto-home").on("click",function(){$("html,body").animate({scrollTop:0},1e3)}),$(".scroll-next").click(function(){var o=$(this).closest("section").next().offset().top-50;$("html, body").animate({scrollTop:o},1e3)}),992<t&&$(".enq_click, .frmclose").click(function(){$(".form-container").is(":visible")?$(".form-container").slideUp():$(".form-container").slideToggle(),$(".form-container, .frmclose").toggleClass("show")}),$(".menu-icon-mobile").on("click",function(){$(".nav-links").slideToggle(),$(".menu-icon-mobile").toggleClass("active")}),t<=992&&($(".nav-links a").on("click",function(){$(".menu-icon-mobile").trigger("click")}),$(".mob_enq_click, .frmclose").on("click",function(){isBrochure=0,isFloorplan=0,$(".form-container").toggleClass("show")})),$(".nav-links a")),e=$(".nav-links a"),l=(n=t<=700?55:100,[]),r=0;r<i.length;r++){var a=e[r];$(a).hasClass("extLink")||$(a).attr("rel")&&(a=$(a).attr("rel"),l.push(a))}$(window).scroll(function(){var o=$(window).scrollTop(),s=$(window).height(),t=$(document).height();for(r=0;r<l.length;r++){var i=l[r],e=$("#"+i).offset().top,a=$("#"+i).outerHeight();e-n<=o&&o<e-n+a?$("a[rel='"+i+"']").hasClass("active")||$("a[rel='"+i+"']").addClass("active"):$("a[rel='"+i+"']").removeClass("active")}o+s!=t||$(".nav-links a:not(.extLink):last-child").hasClass("active")||(s=$(".active").attr("rel"),$("a[rel='"+s+"']").removeClass("active"),$(".nav-links a:not(.extLink):last-child").addClass("active"))}),$(".nav-links a").on("click",function(){var o,s;$(this).hasClass("extLink")||(o=$(this).attr("rel"),s=t<=700?45:96,$("html,body").animate({scrollTop:$("#"+o).offset().top-s},1e3))}),$(".bannerSlider").slick({slidesToShow:1,arrows:!1,dots:!0,autoplay:!0,appendDots:".bannerdots"}),$(".iconSlider").slick({slidesToShow:4,arrows:!1,dots:!0,appendDots:".icondots",responsive:[{breakpoint:640,settings:{slidesToShow:1}}]}),$(".iconSlider2").slick({slidesToShow:4,arrows:!1,dots:!0,appendDots:".icondots2",responsive:[{breakpoint:640,settings:{slidesToShow:1}}]}),$(".iconSlider3").slick({slidesToShow:4,arrows:!1,dots:!0,appendDots:".icondots3",responsive:[{breakpoint:640,settings:{slidesToShow:1}}]}),$(".specImgSlider").slick({slidesToShow:1,arrows:!1}),$(".gallerySlider").slick({slidesToShow:1,arrows:!0,prevArrow:".gallLeft",nextArrow:".gallRight"}),$(".testSlider").slick({slidesToShow:3,arrows:!1,dots:!0,autoplay:!0,appendDots:".testdots",responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:640,settings:{slidesToShow:1}}]}),t<768&&$(".infoWrapper").slick({slidesToShow:1,arrows:!1,dots:!0,appendDots:".infoDots"});var c=$(window);c.height();c.on("scroll",function(){var s=c.scrollTop(),t=1.02*c.height();$(".revealOnScroll:not(.animated)").each(function(){var o=$(this);o.offset().top<s+t&&(o.data("timeout")?window.setTimeout(function(){o.hasClass("path")?o.addClass(o.data("animation")):o.addClass("animated "+o.data("animation")),o.animate("","slow")},parseInt(o.data("timeout"),10)):o.addClass("animated "+o.data("animation")))})})}),$(window).scroll(function(){$(".lazy").each(function(){$(this).attr("data-src")&&("IMG"==this.tagName||"IFRAME"==this.tagName?$(this).attr("src",$(this).data("src")):$(this).css("background-image","url("+$(this).data("src")+")"),$(this).removeAttr("data-src"))}),50<=$(window).scrollTop()?$("header").addClass("active"):$("header").removeClass("active")});
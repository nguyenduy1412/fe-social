import '../assets/plugins/jquery.min.js'
import '../assets/plugins/bootstrap.bundle.min.js'
import '../assets/plugins/slick.js'
import '../assets/plugins/jquery.nice-select.min.js'
import '../assets/plugins/plyr.js'
import '../assets/plugins/apexcharts.js'
import '../assets/plugins/plugin.js'

$(function ($) {
    "use strict";
  
    jQuery(document).ready(function () {
  
      // preloader
      $(".preloader").delay(300).animate({
        "opacity": "0"
      }, 500, function () {
        $(".preloader").css("display", "none");
      });
      
      // Sticky Header
      var fixed_top = $(".header-section");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
          fixed_top.addClass("animated fadeInDown header-fixed");
        }
        else {
          fixed_top.removeClass("animated fadeInDown header-fixed");
        }
      });
  
      // Scroll Top
      var ScrollTop = $(".scrollToTop");
      var homeMenu = $(".navbar-nav.feed .home");
      var newsFeed = $(".navbar-nav.feed .feed");
      var navIcon = $(".navbar-nav.feed .nav-icon");
      $(window).on('scroll', function () {
        if ($(this).scrollTop() < 500) {
          ScrollTop.removeClass("active");
          homeMenu.addClass("active");
          newsFeed.removeClass("active");
        } else {
          ScrollTop.addClass("active");
          navIcon.removeClass("active");
          newsFeed.addClass("active");
        }
      });
      $('.scrollToTop').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 500);
        return false;
      });
  
      
  
      // Always Scroll to bottom
      $('.main-chat-box').scrollTop( $(document).height() );
  
    });
  
  });
$(document).ready(function () {

  'use strict';

  // For Navbar

  $('.navigation').on('click', 'ul li', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });


  //Typing

  var typed5 = new Typed('.text', {
    strings: ['Hesham<span class"dot">.</span>', 'Web Developer<span class"dot">.</span>'],
    typeSpeed: 60,
    backSpeed: 0,
    loop: true,
    cursorChar: '|',
  });

  document.querySelector('.text').innerHTML = typed5;

  // Navbar

  $(window).scroll(function() {
    if($(window).scrollTop() >= 300) {
      $('.navbar').addClass('mystyle');

      $('.navbar .navbar-brand em').css('color', '#fff');
      $('.navbar .navbar-brand').css('font-size', '24px');
      $('.navigation .navbar-nav .nav-item .nav-link ').css('font-size', '15px');
    } else {
      $('.navbar').removeClass('mystyle');

      $('.navbar .navbar-brand em').css('color', '#00b7c1');
      $('.navbar .navbar-brand').css('font-size', '32px');
      $('.navigation .navbar-nav .nav-item .nav-link ').css('font-size', '19px');
    }
  });

  // Smooth Scorll

  $('.navigation li a').click(function() {
    $('html, body').animate({
      scrollTop: $('#'+ $(this).data('value')).offset().top
    }, 1500);
  });

  // back to top

  var backTop = $('#back-top');
  $(window).scroll(function () {
    if($(this).scrollTop() >= 500) {
      backTop.fadeIn();
    } else {
      backTop.fadeOut();
    }
  });

  backTop.click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

});

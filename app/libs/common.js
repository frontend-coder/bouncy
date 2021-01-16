$(document).ready(() => {
  // 	$("body").niceScroll({
  // horizrailenabled:false
  // });
  // вверхнее красиво-вращающееся меню
  // 1 и 2 строка это анимация крестика
  // 3 строка - слайдер вниз меню
  // слайдер вниз меню отвечает за работу мобильного меню к переносу

  const hamMenu = document.querySelector('.ham');
  const topMenu = document.querySelector('.top_menu');
  function hamMenuF() {
    hamMenu.classList.toggle('active');
    topMenu.classList.toggle('active');
  }
  hamMenu.onclick = hamMenuF;

  $('.toggle-mnu').click(function () {
    $(this).toggleClass('on');
    $('.top-menu').slideToggle();
    return false;
  });
  $('body, .top-menu ul li a').click(() => {
    $('.hidden-mnu').hide('slow');
  });

  jQuery('img.footer_social_svg').each(function () {
    const $img = jQuery(this);
    const imgID = $img.attr('id');
    const imgClass = $img.attr('class');
    const imgURL = $img.attr('src');

    jQuery.get(
      imgURL,
      (data) => {
        // Get the SVG tag, ignore the rest
        let $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', `${imgClass} replaced-svg`);
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);
      },
      'xml',
    );
  });

  const checkStickyMenu = function () {
    if ($(window).scrollTop() > $('#header_bottom_buton').offset().top) {
      $('.top_line').addClass('top_line_active');
      $('.top_line_box').addClass('top_line_box_active');
    } else {
      $('.top_line').removeClass('top_line_active');
      $('.top_line_box').remove('top_line_box_active');
    }
  };
  $(window).on('scroll', () => {
    checkStickyMenu();
  });

  //    $(window).on("scroll", function() {
  //       checkStickyMenu('slow');
  // console.log("scroll " + "win scroll: " + $(window).scrollTop() + " secnav: " + parseInt($(".top_line_menu").offset().top));
  //   })
  //   checkStickyMenu();
  $(() => {
    $('#email_field').mask('+7(000)000-00-00', {
      placeholder: '+7(___)___-__-__',
      clearIfNotMatch: true,
    });
    $('#footer_phone').mask('+7(000)000-00-00', {
      placeholder: '+7(___)___-__-__',
      clearIfNotMatch: true,
    });
  });

  // начало
  // common js
  $('#tel').mask('+7(000)000-00-00', {
    selectOnFocus: true,
    placeholder: '+7(___)___-__-__',
    clearIfNotMatch: !0,
  });

  // /* чтобы в формах был индивидуальный заголовок */
  // $("a[href='#call-back']").click(function () {
  //   const dataForm = $(this).data('form');
  //   const dataYandex = $(this).data('yandex');
  //   const dataTitle = $(this).data('title');
  //   $('form.forms-call').attr('onsubmit', dataYandex);
  //   $('.form-callback [name=admin-data]').val(dataForm);
  //   $('.get__title').text(dataTitle);
  // });

  // castom code
});

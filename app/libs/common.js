$(document).ready(() => {
  // 	$("body").niceScroll({
  // horizrailenabled:false
  // });
  // вверхнее красиво-вращающееся меню
  // 1 и 2 строка это анимация крестика
  // 3 строка - слайдер вниз меню
  // слайдер вниз меню отвечает за работу мобильного меню к переносу
  $(".toggle-mnu").click(function () {
    $(this).toggleClass("on");
    $(".top-menu").slideToggle();
    return false;
  });
  $('body, .top-menu ul li a').click(() => {
    $('.hidden-mnu').hide("slow");
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
    if ($(window).scrollTop() > $("#header_bottom_buton").offset().top) {
      $(".top_line").addClass("top_line_active");
      $(".top_line_box").addClass("top_line_box_active");
    } else {
      $(".top_line").removeClass("top_line_active");
      $(".top_line_box").remove("top_line_box_active");
    }
  };
  $(window).on("scroll", () => {
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
  /* Page Scroll to id fn call */
  $('.header_bottom_buton, .top_menu ul li a').mPageScroll2id({
    layout: 'auto',
    offset: '.top_line',
    autoScrollSpeed: true,
    scrollSpeed: 1000,
    highlightSelector: '.top_menu ul li a',
  });

  /* demo functions */
  $("a[rel='next']").click(function (e) {
    e.preventDefault();
    const to = $(this).parent().parent("section").next()
      .attr("id");
    $.mPageScroll2id("scrollTo", to);
  });

  function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
    const progressElement = $(node);
    progressElement.each((value, item) => {
      $(item).find(nodeLine).animate({
        width: `${item.dataset.progressPercent}%`,
      }, animationLength);
      $(item).find(tooltip).show(animationLength);
    });
  }

  const tabLinks = document.querySelectorAll(".tabs a");
  const tabPanels = document.querySelectorAll(".tabs-panel");

  for (const el of tabLinks) {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(".tabs li.active").classList.remove("active");
      document.querySelector(".tabs-panel.active").classList.remove("active");

      const parentListItem = el.parentElement;
      parentListItem.classList.add("active");
      const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

      const panel = [...tabPanels].filter((el) => el.getAttribute("data-index") == index);
      panel[0].classList.add("active");
    });
  }

  const tabLinksTwo = document.querySelectorAll(".tabsTwo a");
  const tabPanelsTwo = document.querySelectorAll(".tabs-panelTwo");

  for (const eltwo of tabLinksTwo) {
    eltwo.addEventListener("click", (t) => {
      t.preventDefault();

      document.querySelector(".tabsTwo li.active").classList.remove("active");
      document.querySelector(".tabs-panelTwo.active").classList.remove("active");

      const parentListItemTwo = eltwo.parentElement;
      parentListItemTwo.classList.add("active");
      const indexTwo = [...parentListItemTwo.parentElement.children].indexOf(parentListItemTwo);

      const panelTwo = [...tabPanelsTwo].filter((eltwo) => eltwo.getAttribute("data-index") == indexTwo);
      panelTwo[0].classList.add("active");
    });
  }

  const groups = {};
  $('.galleryItem').each(function () {
    const id = parseInt($(this).attr('data-group'), 10);
    if (!groups[id]) {
      groups[id] = [];
    }
    groups[id].push(this);
  });
  $.each(groups, function () {
    $(this).magnificPopup({
      type: 'image',
      tClose: 'Закрыть (Esc)',
      removalDelay: 400,
      fixedBgPos: false,
      fixedContentPos: false,
      closeOnContentClick: true,
      closeBtnInside: false,
      gallery: {
        enabled: true,
      	tNext: 'Следующий слайд',
      	tPrev: 'Предыдущий слайд',
      	tCounter: '%curr% из %total%',
      },
    });
  });

  const groupsBig = {};
  $('.galleryBig').each(function () {
    const id = parseInt($(this).attr('data-group'), 10);
    if (!groupsBig[id]) {
      groupsBig[id] = [];
    }
    groupsBig[id].push(this);
  });
  $.each(groupsBig, function () {
    $(this).magnificPopup({
      type: 'image',
      tClose: 'Закрыть (Esc)',
      removalDelay: 400,
      fixedBgPos: false,
      fixedContentPos: false,
      closeOnContentClick: true,
      closeBtnInside: true,
      gallery: {
        enabled: true,
        tNext: 'Следующий слайд',
        tPrev: 'Предыдущий слайд',
        tCounter: '%curr% из %total%',
      },
    });
  });

  let animate = true;
  $(window).scroll(() => {
    if ($('#block_detals').offset().top <= $(window).scrollTop() + 350) {
      if (animate) {
        const meters = document.querySelectorAll('svg[data-value] .meter');
        meters.forEach((path) => {
          // Get the length of the path
          const length = path.getTotalLength();
          // console.log(length);
          // Just need to set this once manually on the .meter element and then can be commented out
          // path.style.strokeDashoffset = length;
          // path.style.strokeDasharray = length;
          // Get the value of the meter
          const value = parseInt(path.parentNode.getAttribute('data-value'));
          // Calculate the percentage of the total length
          const to = length * ((100 - value) / 100);
          // Trigger Layout in Safari hack https://jakearchibald.com/2013/animated-line-drawing-svg/
          path.getBoundingClientRect();
          // Set the Offset
          path.style.strokeDashoffset = Math.max(0, to);
          path.nextElementSibling.textContent = `${value}%`;
        });

        //     moveProgressBar('.progree_element', '.progree_line', '.progree_tooltip');
      }
      animate = false;
    }
  });

  $('#clients_slider').slick({
    dots: true,
    arrows: false,
    // autoplay:true,
    autoplaySpeed: 1500,
    infinite: true,
    slidesToShow: 1,
    // slidesToScroll:2,

  });

  $('#adwice_slider').slick({
    dots: true,
    arrows: false,
    // autoplay:true,
    autoplaySpeed: 1500,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    // slidesToScroll:2,
  });

  $('#posts_slider').slick({
    dots: true,
    arrows: false,
    // autoplay:true,
    autoplaySpeed: 1500,
    infinite: true,
    slidesToShow: 1,
    // adaptiveHeight: true,
    // slidesToScroll:2,
    lazyLoad: 'ondemand',
    // speed: 400,
    vertical: true,
    verticalSwiping: false,
    // fade: true,
    //  cssEase: 'linear',
  });

  const mixer = mixitup(".grid__wrapper_three", {
    animation: {
      animateResizeTargets: true,
      duration: 550,
      nudge: true,
      reverseOut: false,
      effects: "fade scale(0.01) translateZ(-100px)",
    },
  });

  // Ajax push mesege http://api.jquery.com/jquery.ajax/
  $("form").submit(function () { // Change
    const th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", // Change
      data: th.serialize(),
    }).done(() => {
      $(".forms-calldecor .success").addClass("active");
      setTimeout(() => {
        // Done Functions
        $(".forms-calldecor .success").removeClass("active");
        th.trigger("reset");
        $.magnificPopup.close();
      }, 3000);
    });
    return false;
  });
  // castom code
});

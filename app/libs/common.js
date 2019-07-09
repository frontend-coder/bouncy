$(document).ready(function () {
	// 	$("body").niceScroll({
	// horizrailenabled:false
	// });
	// вверхнее красиво-вращающееся меню
	// 1 и 2 строка это анимация крестика
	//3 строка - слайдер вниз меню
	//слайдер вниз меню отвечает за работу мобильного меню к переносу
	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".top-menu").slideToggle();
		return false;
	});
	$('body, .top-menu ul li a').click(function () {
		$('.hidden-mnu').hide("slow");
	});







 function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
 const progressElement = $(node);
 progressElement.each(function (value, item) {
  $(item).find(nodeLine).animate({
    width: item.dataset.progressPercent+'%'
  }, animationLength);
  $(item).find(tooltip).show(animationLength);
});
 }



//   $(window).scroll(function () {
//     let animate = true;
//     if($('.team_fon').offset().top <= $(window).scrollTop() + 350) {
//       if(animate) {
//         moveProgressBar('.progree_element', '.progree_line', '.progree_tooltip');
//       }
//       animate = false;
//     }
//   });


// конец кода



const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
  });
}


const tabLinksTwo = document.querySelectorAll(".tabsTwo a");
const tabPanelsTwo = document.querySelectorAll(".tabs-panelTwo");

for (let eltwo of tabLinksTwo) {
  eltwo.addEventListener("click", t => {
    t.preventDefault();

    document.querySelector(".tabsTwo li.active").classList.remove("active");
    document.querySelector(".tabs-panelTwo.active").classList.remove("active");

    const parentListItemTwo = eltwo.parentElement;
    parentListItemTwo.classList.add("active");
    const indexTwo = [...parentListItemTwo.parentElement.children].indexOf(parentListItemTwo);

    const panelTwo = [...tabPanelsTwo].filter(eltwo => eltwo.getAttribute("data-index") == indexTwo);
    panelTwo[0].classList.add("active");
  });
}
















let groups = {};
$('.galleryItem').each(function() {
  let id = parseInt($(this).attr('data-group'), 10);
  if(!groups[id]) {
    groups[id] = [];
 }
  groups[id].push( this );
});
$.each(groups, function() {
  $(this).magnificPopup({
      type: 'image',
      tClose: 'Закрыть (Esc)',
         removalDelay: 400,
        fixedBgPos:false,
fixedContentPos:false,
      closeOnContentClick: true,
      closeBtnInside: false,
      gallery: { enabled:true,
      	tNext:'Следующий слайд',
      	tPrev:'Предыдущий слайд',
      	tCounter: '%curr% из %total%',
    }
  })
});

let animate = true;
  $(window).scroll(function () {
    if($('#block_detals').offset().top <= $(window).scrollTop() + 350) {
      if(animate) {


const meters = document.querySelectorAll('svg[data-value] .meter');
meters.forEach((path) => {
  // Get the length of the path
  let length = path.getTotalLength();
  // console.log(length);
  // Just need to set this once manually on the .meter element and then can be commented out
  // path.style.strokeDashoffset = length;
  // path.style.strokeDasharray = length;
  // Get the value of the meter
  let value = parseInt(path.parentNode.getAttribute('data-value'));
  // Calculate the percentage of the total length
  let to = length * ((100 - value) / 100);
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
  arrows:false,
 // autoplay:true,
  autoplaySpeed:1500,
 infinite: true,
slidesToShow:1,
  //slidesToScroll:2,

});







    $('#adwice_slider').slick({
  dots: true,
  arrows:false,
 // autoplay:true,
  autoplaySpeed:1500,
 infinite: true,
slidesToShow:1,
  //slidesToScroll:2,

});

var mixer = mixitup(".grid-container", {
  animation: {
    animateResizeTargets: true,
    duration: 550,
    nudge: true,
    reverseOut: false,
    effects: "fade scale(0.01) translateZ(-100px)"
  }
});



	//Ajax push mesege http://api.jquery.com/jquery.ajax/
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function () {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
	//castom code









});
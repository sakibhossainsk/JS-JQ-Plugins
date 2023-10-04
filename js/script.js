//js 
//wow start
wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
})
wow.init();

    wow.init();
    document.getElementById('moar1').onclick = function() {
      var section = document.createElement('h1');
      section.className = 'wow slideInDown box bg-success wow_p';
      this.parentNode.insertBefore(section, this);
    };

    wow.init();
    document.getElementById('moar2').onclick = function() {
      var section = document.createElement('h1');
      section.className = 'wow slideInDown box bg-danger wow_p';
      this.parentNode.insertBefore(section, this);
    }; 

    wow.init();
    document.getElementById('moar3').onclick = function() {
      var section = document.createElement('h1');
      section.className = 'wow slideInDown box bg-success wow_p';
      this.parentNode.insertBefore(section, this);
    };

// Aos start
AOS.init({
    offset: 100,
    delay: 50,
    duration: 500,
    easing: 'linear'

});

// aos-2 start
AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

//scroll start
let $button = $.backToTop({
        backgroundColor: '#846990',
        container: $('.inner'),
        effect: 'spin-inverse',
        position: 'bottom right',
        scrollAnimation: 400,
        theme: 'fawesome'
    });
    $button.resize(50, 50);

//jq
$(document).ready(function(){

 //counter-up start
	$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//mixitup start
    var mixer = mixitup('#hello', {
        animation: {
            duration: 300
        }
    });
//lightbox start
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
//cruved text start

var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });

    $('.wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,



        responsive: [
            {
          breakpoint: 991,
          settings: {
            slidesToShow: 2, 
            slidesToScroll: 1,
            
        }
    },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
             
        }
    },
    {
        breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
    }
}
]

    });
 

}); 
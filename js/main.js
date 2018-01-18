$(document).ready(function() {
  var options = {
    strings: ['Pharma.', 'Novels.', 'Logistics'],
    typeSpeed: 30,
    loop: true,
  };

  var typed = new Typed('.typed', options);

  //slick
  $('.carousel').slick({
    slidesToScroll:1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  })


  //Intro Page

  var introTimeline = new TimelineMax();
  var sectionl1 = $('.section.l1');
  var introCaption = $('.section.l1 .caption');
  var introSubCaption = $('.section.l1 .subcaption');
  var menuIcon = $('.brand img');
  var logo = $('.brand p');
  var loader = $('.loader');

  //Section l2
  var staggerElementsl2 = $('.section.l2 .box .typography p');
  var videographyl2 = $('.videography');

  //Section l3
  var sectionl3 = $('.section.l3');
  var sectionl3caption =  $('.section.l3 .cta p')
  var sectionl3buttons = $('.section.l3 a.l-btn');
  var review = $('.section.l3 .reviews')


  

  $('#slider').fullpage({
    css3: true,
    scrollingSpeed: 700,
    fitToSectionDelay: 2500,
    onLeave: function(index, nextIndex, direction) {
      $('body video')[0].play();

      TweenMax.to(videographyl2, 0.4, { x: '100%', autoAlpha: 0 });

      if (nextIndex === 2) {
        TweenMax.staggerFrom(
          staggerElementsl2,
          0.8,
          { y: 50, ease: Expo.easeOut, delay: 0.5, autoAlpha: 0 },
          0.1,
        );
        TweenMax.fromTo(
          videographyl2,
          0.4,
          { x: '100%', autoAlpha: 0, delay: 0.8, ease: Expo.easeOut },
          { x: '0%', autoAlpha: 1, delay: 0.8, ease: Expo.easeOut },
        );
      } else if (nextIndex === 3) {
        TweenMax.fromTo(
          sectionl3,
          0.5,
          { backgroundColor: '#fff' },
          { backgroundColor: '#000', delay: 0.5 },
        );
        TweenMax.fromTo(sectionl3caption, 0.5, {y: 150, autoAlpha:0, delay:1},{y:0,  autoAlpha:1,ease: Expo.easeOut, delay:1})
        TweenMax.fromTo(sectionl3buttons, 0.5, {y: 120, autoAlpha:0},{y:0,  autoAlpha:1,ease: Expo.easeOut, delay:1})
        TweenMax.from(review, 0.5, {x: "100%", autoAlpha:0, delay:1.5, ease: Expo.easeOut})
        $('.brand p').addClass('white')
        
      }

      if (index === 3) {
        TweenMax.fromTo(
          sectionl3,
          0,
          { backgroundColor: '#000' },
          { backgroundColor: '#fff' },
        );
       
        $('.brand p').removeClass('white')
      }
    },
  });

  introTimeline
    .to(loader, 2, { width: '85%', ease: Expo.easeOut })
    .add('loaderScene')
    .from(
      introCaption,
      0.7,
      { y: 150, autoAlpha: 0, ease: Expo.easeOut },
      'loaderScene-=1.5',
    )
    .from(
      introSubCaption,
      0.7,
      { y: 20, autoAlpha: 0, ease: Expo.easeOut },
      'loaderScene-=1',
    )
    .fromTo(
      menuIcon,
      0.4,
      { x: -20, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, ease: Expo.easeOut },
      'loaderScene-=1.5',
    )
    .fromTo(
      logo,
      0.2,
      { x: -20, autoAlpha: 0 },
      { x: 20, autoAlpha: 1, ease: Power0.easeNone },
      'loaderScene-=1.3',
    )
    .to(loader, 0, { autoAlpha: 0 }, 'loaderScene-=0.8');
});

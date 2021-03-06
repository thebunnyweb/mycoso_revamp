$(document).ready(function () {



  $('.l-request').on('click', function(){
    $('.request-wrapper').toggleClass('reveal')
  })

  $('.close span').on('click', function(){
    $('.request-wrapper').removeClass('reveal')
  })



  
    var el = $('.request');
    
    el.validate({
      rules: {
        website:{
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        website: {
          required: 'Website is required'
        },
        email: {
          required: 'Email is required',
          email: 'Invalid Email'
        }
      },
      submitHandler: function(data){
        // http://hi.com

        
        var formdata = $(data).serialize();
        // formdata.append('llike', $('input[name="llike"]').val());
        // formdata.append('topic', $('input[name="topic"]').val());
        // formdata.append('industry', $('input[name="industry"]').val());
        // formdata.append('larticle', $('input[name="larticle"]').val());
        // formdata.append('sector', $('input[name="sector"]').val());
        // formdata.append('website', $('input[name="website"]').val());
        // formdata.append('email', $('input[name="email"]').val());
        
        $.ajax({
          url: 'http://mycosomedia.com/api/?requestadd=new',
          dataType: 'JSON',
          data: formdata,
          type: 'POST',
          success: function(result){
            if(result.length > 0 ){
              $('.request-wrapper').toggleClass('reveal');
              setTimeout(function(){
                $('.notifications').addClass('reveal')
                setTimeout(function(){
                  $('.notifications').removeClass('reveal')
                }, 2500)
              }, 400)
            }
          },
          error: function(error){
            console.log('Error', error);
          }
        });
        
       
      }
    })

  var options = {
    strings: ['Tech.', 'Travel.', 'Lifestyle.', 'Healthcare.', 'Ghostwriting.','Logistics.', 'Pharma.'],
    typeSpeed: 30,
    loop: true
  };
  var typed = new Typed('.typed', options);

  $('.carousel').slick({
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000
  });



  if ($(window).innerWidth() > 767) {
    var videStatus = 'stopped';


    $('.mask-above h2').fitText(0.2);


    var lineDrawing = anime({
      targets: '.pageloader .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      stroke: '#5DAFAD',
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: 'alternate',
      loop: false,
      complete: function () {
        $('.pageloader').fadeOut(300);
        introplay();
      }
    });



    //Intro Page

    var introTimeline = new TimelineMax();
    var sectionl1 = $('.section.l1');
    var introCaption = $('.section.l1 .caption');
    var introSubCaption = $('.section.l1 .subcaption');
    var menuIcon = $('.brand img');
    var logo = $('.brand p');
    var loader = $('.loader');
    var menu = $('.links ul li');
    var social = $('.social ul li');
    var whiteClasses = $('.brand p, .links, .social, .brand');

    //section l1

    var sectionl1 = $('.section.l1');

    //Section l2
    var staggerElementsl2 = $('.section.l2 .box .typography p');
    var videographyl2 = $('.bookposter');

    //Section l3
    var sectionl3 = $('.section.l3');
    var sectionl3caption = $('.section.l3 .cta p');
    var sectionl3buttons = $('.section.l3 a.l-btn');
    var review = $('.section.l3 .reviews');

    //section l4
    var inputcaption = $('.formcaption');
    var inputs = $('.section.l4 .form input, .section.l4 .form textarea');
    var inputAction = $('.section.l4 .form a');
    var contact_map = $('.contact_animation');
    var info = $('.info');

    var contactTimeLine = new TimelineMax();

    var windowWidth = $(window).innerWidth();

    if (windowWidth > 767) {
      fullpage();
      links();
    }

  
    function links() {
      $('.links ul li a').on('click', function (e) {
        e.preventDefault();
        $('.links ul li a').removeClass('active');
        var slideNumber = $(this).attr('data-slide');
        $.fn.fullpage.moveTo(parseInt(slideNumber), 0);
        $(this).addClass('active');
      });
    }

    function fullpage() {
      $('#slider').fullpage({
        css3: true,
        scrollingSpeed: 550,
        fitToSectionDelay: 2500,
        responsiveWidth: 767,
        onLeave: function (index, nextIndex, direction) {



          switch (nextIndex) {
            case 1:
              $('.section.l1').attr('direction', direction);
              break;
            case 2:
              $('.section.l2').attr('direction', direction);
              break;
            case 3:
              $('.section.l3').attr('direction', direction);
              break;
            case 4:
              $('.section.l4').attr('direction', direction);
              break;
            default:
              $('.section.l1').attr('direction', direction);
              break;
          }


          $('.links ul li a').removeClass('active');

          $('.links ul li a[data-slide="' + nextIndex + '"]').addClass(
            'active'
          );

          TweenMax.to(videographyl2, 0.4, { x: '100%', autoAlpha: 0 });
          TweenMax.to(contact_map, 0.4, { x: '100%', autoAlpha: 0 });
          TweenMax.to(sectionl1, 0, { background: 'none', ease: Expo.easeOut });

          if (nextIndex === 1) {
          } else if (nextIndex === 2) {

            // $('video')[0].play();
            TweenMax.staggerFrom(
              staggerElementsl2,
              0.8,
              { y: 50, ease: Expo.easeOut, delay: 0.5, autoAlpha: 0 },
              0.1
            );
            TweenMax.fromTo(
              videographyl2,
              0.4,
              { x: '100%', autoAlpha: 0, delay: 0.8, ease: Expo.easeOut },
              { x: '0%', autoAlpha: 1, delay: 0.8, ease: Expo.easeOut }
            );
          } else if (nextIndex === 3) {
            TweenMax.fromTo(
              sectionl3,
              0.5,
              { backgroundColor: '#fff' },
              { backgroundColor: '#57afad', delay: 0.5 }
            );
            TweenMax.fromTo(
              sectionl3caption,
              0.5,
              { y: 150, autoAlpha: 0, delay: 1 },
              { y: 0, autoAlpha: 1, ease: Expo.easeOut, delay: 1 }
            );
            TweenMax.fromTo(
              sectionl3buttons,
              0.5,
              { y: 120, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, ease: Expo.easeOut, delay: 1 }
            );
            TweenMax.from(review, 0.5, {
              x: '100%',
              autoAlpha: 0,
              delay: 1.5,
              ease: Expo.easeOut
            });
            whiteClasses.addClass('white');
          } else if (nextIndex === 4) {
            TweenMax.fromTo(
              contact_map,
              0.4,
              { x: '100%', autoAlpha: 0, delay: 0.8, ease: Expo.easeOut },
              { x: '0%', autoAlpha: 1, delay: 0.8, ease: Expo.easeOut }
            );
            contactTimeLine
              .fromTo(
                inputcaption,
                0.2,
                { y: 150, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, ease: Expo.easeNone }
              )
              .staggerFromTo(
                inputs,
                0.2,
                { x: -20, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, ease: Expo.easeNone },
                0.2
              )
              .add('stagger')
              .fromTo(
                inputAction,
                0.2,
                { x: -20, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, ease: Expo.easeNone },
                'stagger+=0.1'
              )
              .fromTo(
                info,
                0.2,
                { x: 20, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, ease: Expo.easeNone },
                'stagger+=0.1'
              );
          }

          if (index === 3) {
            TweenMax.fromTo(
              sectionl3,
              0,
              { backgroundColor: '#000' },
              { backgroundColor: '#fff' }
            );
            whiteClasses.removeClass('white');
          }
        }
      });
    }

    function introplay() {
      introTimeline
        .to(loader, 2, { width: '85%', ease: Expo.easeOut })
        .add('loaderScene')
        .from(
          introCaption,
          0.7,
          { y: 150, autoAlpha: 0, ease: Expo.easeOut },
          'loaderScene-=1.5'
        )
        .from(
          introSubCaption,
          0.7,
          { y: 20, autoAlpha: 0, ease: Expo.easeOut },
          'loaderScene-=1'
        )
        .fromTo(
          menuIcon,
          0.4,
          { x: -20, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: Expo.easeOut },
          'loaderScene-=1.5'
        )
        .staggerFromTo(
          menu,
          0.4,
          { x: -20, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: Expo.easeOut },
          0.2,
          'loaderScene-=0.8'
        )
        .fromTo(
          logo,
          0.2,
          { x: -20, autoAlpha: 0 },
          { x: 20, autoAlpha: 1, ease: Power0.easeNone },
          'loaderScene-=1.3'
        )
        .staggerFromTo(
          social,
          0.2,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: Expo.easeOut },
          0.05,
          'loaderScene-=0.2'
        )
        .to(loader, 0, { autoAlpha: 0 }, 'loaderScene-=0.8');
    }
  } else {
    var windowCurrentPosition = 0;
    $(window).scroll(function () {
      // if (windowCurrentPosition < $(window).scrollTop()) {
      //   $('header').addClass('hide');
      //   windowCurrentPosition = $(window).scrollTop();
      // } else {
      //   $('header').removeClass('hide');
      //   windowCurrentPosition = $(window).scrollTop();
      // }
     

    });
  }

  $('.overlay.contact .l-btn').on('click', function(){
    $('.overlay.contact').css('display', 'none');
    $('#contactForm')[0].reset();
  })

  $('#contactForm').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        number: true,
        maxlength: 10,
        minlength: 10
      },
      message: {
        maxlength: 500
      }
    },
    messages: {
      name: {
        required: 'Field is required.',
        minlength: 'Please enter atleast 2 Characters'
      },
      email: {
        required: 'Field is required.',
        email: 'Invalid Email'
      },
      phone: {
        number: 'Only digits are allowed.',
        maxlength: 'Only 10 digits are allowed.',
        minlength: 'Invalid Phone Number'
      },
      message: {
        maxlength: 'Reached Max Count.'
      }
    },
    submitHandler: function(data){
      var formdata = $(data).serialize();
      // var formData = new FormData($('#contactForm'));
      // formData.append('name', $('input[name="name"]').val());
      // formData.append('email', $('input[name="email"]').val());
      // formData.append('phone', $('input[name="phone"]').val());
      // formData.append('profession', $('input[name="profession"]:checked').val());
      // formData.append('message', $('#message').val());

      $.ajax({
        url: 'http://mycosomedia.com/api/?contactadd=new',
        dataType: 'JSON',
        data: formdata,
        type: 'POST', 
        success: function(result){
          if(result.length > 0 ){
            $('.overlay.contact').css('display', 'block');
          }
        },
        error: function(e){
          console.log('error', e)
        }
      });
      
    }
  });

});

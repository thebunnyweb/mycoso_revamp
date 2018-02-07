$(document).ready(function() {
  var formTimeline = new TimelineMax();
  var header = $('.form-intro');
  var svgs = $('.form-inner .form-intro .flex-center');
  var logo = $('.form-inner .form-intro .logo');
  var caption = $('.form-inner .form-intro p');
  var writersection = $('.writer-form');

  formTimeline
    .fromTo(
      logo,
      0.7,
      { x: -100, autoAlpha: 0, ease: Expo.easeNone },
      { x: 0, autoAlpha: 1, ease: Expo.easeNone }
    )
    .add('logomove')
    .fromTo(
      writersection,
      0.5,
      { y: 200, autoAlpha: 0, ease: Expo.easeNone },
      { y: 0, autoAlpha: 1, ease: Expo.easeNone },
      'logomove-=0.5 '
    );

  var arrowoffset = $('.form-inner .form-intro a').offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() > arrowoffset + 20) {
      $('.form-inner .form-intro a svg').addClass('float');
    } else {
      $('.form-inner .form-intro a svg').removeClass('float');
    }
  });

  $('#writerForm').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      sample: {
        required: true
      },
      fileupload: {
        required: true
      },
      experience: {
        required: true
      }
    },
    messages: {
      name: {
        required: 'Please enter your name.',
        minlength: 'Make you name a little bigger.'
      },
      email: {
        required: 'Please enter your email',
        email: 'Woohps thats not really an email'
      },
      sample: {
        required: 'Sharing is must'
      },
      fileupload: {
        required: 'Upload the document for review'
      },
      experience: {
        required: 'Select your experience'
      }
    }
  });
});

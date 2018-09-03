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

  $('.overlay .popup .close').on('click', function(){
    $('.overlay').css('display', 'none');
    $('#writerForm')[0].reset();
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
      },
      'area_of_expertise[]': {
        minlength: 2
      },
      'writing_style[]': {
        minlength: 2
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
      },
      'area_of_expertise[]': {
        minlength: 'Atleast two is to be selected'
      },
      'writing_style[]': {
        minlength: 'Atleast two is to be selected'
      }
    },
    submitHandler: function(form) {
       //var formdata = $(form).serialize();
       
      var formdata = new FormData($('#writerForm'));
      formdata.append('name', $('input[name="name"]').val());
      formdata.append('email', $('input[name="email"]').val());
      formdata.append('pen_name', $('input[name="penname"]').val());
      formdata.append('experience', $('input[name="experience"]').val());
      formdata.append('blog', $('input[name="blog"]').val());
      formdata.append('area_of_expertise[]', $('input[name="area_of_expertise[]"]').val());
      formdata.append('writing_style[]', $('input[name="writing_style[]"]').val());
      formdata.append('sample_of_work', $('input[name="sample_of_work"]').val());
      formdata.append('file', $('input[name="file"]')[0].files[0]);
        $.ajax({
          url: 'https://glauconitic-crosses.000webhostapp.com?writeradd=new',
          dataType: 'JSON',
          data: formdata,
          type: 'POST',
          processData: false, 
          contentType: false,
          success: function(result){
            if(result.length > 0 ){
              $('.overlay').css('display', 'block');
            }
          },
          error: function(error){
            console.log(error);
          }
        });
    }
  });


});

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

$('#other').on('change', function(){
  
  if($('#other').is(':checked')){
    $('input[name="other_category"]').css('display', 'block');
  }else{
    $('input[name="other_category"]').css('display', 'none');
  }
  
});

$('input[name="file"]').on('change', function() {
	if(this.value && this.vale !== ""){
		$('span.text-btn').html(this.value);
    }else{
		$('span.text-btn').html('File Upload');
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
      sample_of_work: {
        required: true
      },
      fileupload: {
        required: true
      },
      experience: {
        required: true
      },
      'area_of_expertise[]': {
        required: true,
        minlength: 3,
        maxlength: 6
      },
      'writing_style[]': {
        required: true,
        minlength: 1,
        maxlength: 3
      },
      other_category: {
        required: true
      }
    },
    messages: {
      name: {
        required: 'Please enter your name.',
        minlength: 'Make you name a little bigger.'
      },
      email: {
        required: 'Please enter your email.',
        email: 'Woohps thats not really an email.'
      },
      sample_of_work: {
        required: 'Sharing is must.'
      },
      fileupload: {
        required: 'Upload the document for review.'
      },
      experience: {
        required: 'Select your experience.'
      },
      'area_of_expertise[]': {
        required: 'Atleast three is to be selected.',
        minlength: 'Atleast three is to be selected.',
        maxlength: 'You can only select maximum of 6 categories.'
      },
      'writing_style[]': {
        required: 'Atleast one is to be selected.',
        minlength: 'Atleast one is to be selected.',
        maxlength: 'You can only select maximum of 3 categories.'
      },
      other_category: {
        required: 'Field is required.'
      }
    },
    submitHandler: function(form) { 

      var formdata = new FormData(form);
      
      formdata.append('name', $('input[name="name"]').val());
      formdata.append('email', $('input[name="email"]').val());
      formdata.append('pen_name', $('input[name="penname"]').val());
      formdata.append('experience', $('select[name="experience"]').val());
      formdata.append('blog', $('input[name="blog"]').val());
      formdata.append('sample_of_work', $('input[name="sample_of_work"]').val());
      formdata.append('file', $('input[name="file"]')[0].files[0]);
      formdata.append('fbprofile', $('input[name="fbprofile"]').val());
      formdata.append('fbpage', $('input[name="fbpage"]').val());
      formdata.append('twitter', $('input[name="twitter"]').val());
      formdata.append('instagram', $('input[name="instagram"]').val());
      formdata.append('pinterest', $('input[name="pinterest"]').val());
      formdata.append('google', $('input[name="google"]').val());
      formdata.append('other_link', $('input[name="other_link"]').val());
      
      var areaOfExpertise = $('input[name="area_of_expertise[]"]:checked').map(function(i, e) {return e.value}).toArray();
      var writingStyle = $('input[name="writing_style[]"]:checked').map(function(i, e) {return e.value}).toArray();

      


      if($('#other').is(':checked')){
        var otherindex = areaOfExpertise.indexOf("other");
        areaOfExpertise.splice(otherindex, 1);
        var otherData = $('input[name="other_category"]').val();
        areaOfExpertise.push(otherData); 
      }
      formdata.append('area_of_expertise[]', areaOfExpertise);
      formdata.append('writing_style[]', writingStyle);

      

        $.ajax({
          url: 'http://mycosomedia.com/api/?writeradd=new',
          data: formdata,
          processData: false,
          type: 'POST',
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

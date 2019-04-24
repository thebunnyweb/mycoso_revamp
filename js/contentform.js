$(document).ready(function () {

    var formTimeline = new TimelineMax();
    var header = $('.form-intro');
    var svgs = $('.form-inner .form-intro .flex-center');
    var logo = $('.form-inner .form-intro .logo');
    var caption = $('.form-inner .form-intro p');
    var contentSection = $('.content-form');

    formTimeline
        .fromTo(
            logo,
            .7,
            { x: -100, autoAlpha: 0, ease: Expo.easeNone },
            { x: 0, autoAlpha: 1, ease: Expo.easeNone }
        )
        .add('logomove')
        .fromTo(
            contentSection,
            0.5,
            { y: 200, autoAlpha: 0, ease: Expo.easeNone },
            { y: 0, autoAlpha: 1, ease: Expo.easeNone },
            'logomove-=0.5 '
        );

    var arrowoffset = $('.form-inner .form-intro a').offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > arrowoffset + 20) {
            $('.form-inner .form-intro a svg').addClass('float');
        } else {
            $('.form-inner .form-intro a svg').removeClass('float');
        }
    });


    $('.overlay .popup .close').on('click', function(){
        $('.overlay').css('display', 'none');
        $('#contentForm')[0].reset();
    });



    $('#contentForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            compname: {
                required: true,
                minlength: 2
            },
            expertise: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'Please enter name.',
                minLength: 'Minimum two letters.'
            },
            email: {
                required: 'Please enter email.',
                email: 'Invalid email.'
            },
            name: {
                compname: 'Please enter company name.',
                minLength: 'Minimum two letters.'
            },
            expertise: {
                required: 'Please selecte the expertise.'
            }
        },
        submitHandler: function (form) {
        
            var formData = new FormData($('#contentForm'));
            formData.append('name',$('input[name="name"]').val());
            formData.append('email',$('input[name="email"]').val());
            formData.append('compname',$('input[name="compname"]').val());
            formData.append('desgname',$('input[name="desgname"]').val());
            formData.append('website',$('input[name="website"]').val());
            formData.append('fbprofile',$('input[name="fbprofile"]').val());
            formData.append('fbpage',$('input[name="fbpage"]').val());

            formData.append('twitter',$('input[name="twitter"]').val());
            formData.append('instagram',$('input[name="instagram"]').val());
            formData.append('pinterest',$('input[name="pinterest"]').val());
            formData.append('google',$('input[name="google"]').val());
            
            formData.append('other',$('input[name="other"]').val());
            
            formData.append('industry',$('input[name="industry"]').val());
            formData.append('expertise',$('input[name="expertise"]:checked').val());
            

            $.ajax({
                url: 'http://mycosomedia.com/api/?contentadd=new',
                dataType: 'JSON',
                data: formData, 
                type: 'POST',
                processData: false, 
                contentType: false,
                success: function(result){
                    if(result.length > 0 ){
                        $('.overlay').css('display', 'block');
                    }
                },
                error: function(e){
                    console.log('error', e)
                }
            });

        }
    })

})
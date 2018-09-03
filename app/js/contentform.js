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
        
            let formData = $(form).serialize();
            $.ajax({
                url: 'http://localhost/mycoso_backend?contentadd=new',
                dataType: 'JSON',
                data: formData, 
                method: 'POST',
                processData: false, 
                contentType: false,
                success: function(result){
                    console.log(result);
                },
                error: function(e){
                    console.log('error', e)
                }
            });

        }
    })

})
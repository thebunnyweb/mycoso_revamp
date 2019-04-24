var apiModule = (function(){
    var writeData = [],
        contactData = [],
        contentData = [],
        requestData = [],
        contactel = $('.contact table tbody'),
        requestel = $('.request table tbody'),
        writerel = $('.writer table tbody'),
        contentel = $('.content table tbody');

    $.ajax({
        url: 'http://mycosomedia.com/api/?contactadd=get',
        method: 'GET',
        success: function(result){
            if(result.length > 0){
                $('.contact .info').css('display', 'none');
                result = JSON.parse(result)
                renderContact(result)
            }
        },
        error: function(){
            $('.contact .info').css('display', 'block');
        }
    });


    $.ajax({
        url: 'http://mycosomedia.com/api/?contentadd=get',
        method: 'GET',
        success: function(result){
            if(result.length > 0){
                $('.content .info').css('display', 'none');
                result = JSON.parse(result)
                renderContent(result)
            }
        },
        error: function(){
            $('.content .info').css('display', 'block');
        }
    });

    $.ajax({
        url: 'http://mycosomedia.com/api/?requestadd=get',
        method: 'GET',
        success: function(result){
            if(result.length > 0){
                $('.request .info').css('display', 'none');
                result = JSON.parse(result)
                renderRequest(result)
            }
        },
        error: function(){
            $('.request .info').css('display', 'block');
        }
    });

    $.ajax({
        url: 'http://mycosomedia.com/api/?writeradd=get',
        method: 'GET',
        success: function(result){
            if(result.length > 0){
                $('.writer .info').css('display', 'none');
                result = JSON.parse(result)
                renderWriter(result)
            }
        },
        error: function(){
            $('.writer .info').css('display', 'block');
        }
    });

    function renderContact(data){
        var template = ``
        data.forEach(function(item){
            template += `<tr>
            <td>${item['name']}</td>
            <td>${item['email']}</td>
            <td>${item['phone']}</td>
            <td>${item['profession']}</td>
            <td>${item['message']}</td>
            </tr>`
        });
        contactel.html(template)
    }

    function renderContent(data){
        var template = ``
        data.forEach(function(item){
            template += `<tr>
            <td>${item['compname']}</td>
            <td>${item['desgname']}</td>
            <td>${item['email']}</td>
            <td>${item['expertise']}</td>
            <td>${item['fbpage']}</td>
            <td>${item['fbprofile']}</td>
            <td>${item['google']}</td>
            <td>${item['industry']}</td>
            <td>${item['instagram']}</td>
            <td>${item['name']}</td>
            <td>${item['other']}</td>
            <td>${item['pinterest']}</td>
            <td>${item['twitter']}</td>
            <td>${item['website']}</td>
            
            </tr>`
        });
        contentel.html(template)
    }

    function renderRequest(data){
        var template = ``
        data.forEach(function(item){
            template += `<tr>
            <td>${item['email']}</td>
            <td>${item['industry']}</td>
            <td>${item['larticle']}</td>
            <td>${item['llike']}</td>
            <td>${item['sector']}</td>
            <td>${item['topic']}</td>
            <td>${item['website']}</td>
            </tr>`
        });
        requestel.html(template)
    }

    function renderWriter(data){
        var template = ``
        data.forEach(function(item){
            template += `<tr>
                <td>${item['area_of_expertise']}</td>
                <td>${item['blog']}</td>
                <td>${item['email']}</td>
                <td>${item['experience']}</td>
                <td>${item['fbpage']}</td>
                <td>${item['fbprofile']}</td>
                <td>${item['file']}</td>
                <td>${item['google']}</td>
                <td>${item['instagram']}</td>
                <td>${item['name']}</td>
                <td>${item['other_link']}</td>
                <td>${item['pen_name']}</td>
                <td>${item['pinterest']}</td>
                <td>${item['sample_of_work']}</td>
                <td>${item['twitter']}</td>
                <td>${item['writing_style']}</td>
            </tr>`
        });
        writerel.html(template)
    }





})

apiModule();
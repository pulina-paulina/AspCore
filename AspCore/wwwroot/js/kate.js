$(document).ready(function(){
    $('.sidebar a').click(function(e){
        e.preventDefault();
        let address = $(this).attr('href');

        $.ajax({
            url: address,
            type: 'get',
            data: '',
            beforesend: function(){
                $('.sidebar a.active').removeClass('active');
                $(this).addClass('active');
            },
            success: function(content){
                $('.content').html(content);
            },
            error: function(){
                $('.content').text('Ошибка');
            },
            complete: function(){}
        });
    });
});
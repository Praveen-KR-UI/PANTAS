$(document).ready(function(){
    

    $(window).scroll(function(){
        $(this).scrollTop() > 10 ? $('.go_to_top').fadeIn() :   $('.go_to_top').fadeOut(); 
    });
    $('.go_to_top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        });
    });
    $("a[title='linkedin']").attr("href", "https://in.linkedin.com/company/pantastechnologies");
     
});
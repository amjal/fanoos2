$(document).ready(function(){
    if($(".container-fluid").innerWidth()>750){
        $(".small-nav").css("display","none");
        $(".medium-nav").css("display","block");
    }
    else{
        $(".medium-nav").css("display","none");
        $(".small-nav").css("display","block");
    }
    $("#menu-button").click(function(){
        $("#menu-panel").slideToggle(500);
    })
    $(".img-port-image").mouseenter(function(){
        $(this).animate({opacity:'0.5'},300);
        $(this).parent().find("i").animate({opacity:'1'} , 300);
    })
    $(".img-port-image").mouseleave(function() {
        $(this).animate({opacity: '1'}, 300);
        $(this).parent().find("i").animate({opacity:'0'} , 200);
    })
    $(window).resize(function(){
        if($(".container-fluid").innerWidth()>750){
            $(".small-nav").css("display","none");
            $(".medium-nav").css("display","block");
        }
        else{
            $(".medium-nav").css("display","none");
            $(".small-nav").css("display","block");
        }
    })
})
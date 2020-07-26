$(document).ready(function(){
    $('.menu-btn').click(()=>{
        $('nav ul').slideToggle(200)
    })

    //scroll nav

    $(document).scroll(function(){
        if(window.pageYOffset >= 300){
            $("nav").css("background-color","rgb(4, 17, 62)")
        }else
            $("nav").css("background-color","transparent");
        }
    )

})



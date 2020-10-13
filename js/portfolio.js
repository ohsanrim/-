$(document).ready(function() {

  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3500);

});
$("document").ready(function(){

    var height=$(window).height(),
        count=0,
        wc=0,
        pos=0;

    var passup=false,
        passdown=false;

    var wwl=$(".wrap .web .web_wrap .mockup li").length-1;

    //BASIC OPTION
    passup=true;
    $(".wrap .web .web_wrap .txt li").eq(0).show();
    $(".wrap .web .web_wrap #link_guide li").eq(0).show();

    //PROGRESSBAR EVENT
    var bar_aside=new ProgressBar.Circle("#bar_aside",{
        strokeWidth: 4,
        duration: 1,
        color: "#754775",
        trailWidth: 4,
        trailColor: "#c4bdc5"
    })


    //RESIZE EVENT
    $(window).resize(function(){
        height=$(this).height();
        $("html, body").stop().animate({
            scrollTop: height * count
        },1000)
    })

  function scrollevent(pos){
    //ASIDE EVENT
    var current=(pos / (height * 4));
    bar_aside.animate(current);
    if(pos!=0){
        $("aside #bar_aside").addClass("op")
        $("aside .arrow").addClass("rotate")
    }else{
        $("aside #bar_aside").removeClass("op")
        $("aside .arrow").removeClass("rotate")
    }

    //NAV HIDE SHOW EVENT
    if(pos>=height){
        $("nav").fadeIn(500)
    }else{
        $("nav").fadeOut(500)
    }
  }
    //WHEEL EVENT
    var wheeltime=false;

    $(window).on("mousewheel DOMMousewheel",function(e){
      //pos값 제어
        var delta=e.originalEvent.wheelDelta;

        if(wheeltime==true){
            return;
        }
        setTimeout(function(){
            wheeltime=false;
        },1000)
        wheeltime=true;

        //COUNT ++ --
        if(delta<0){
            count++;
            if(count>4) count=4;
        }else{
            count--;
            if(count<0) count=0;
        }

        //COUNT SCROLL
        $("html, body").stop().animate({
            scrollTop: height * count
        },1000)

        //NAV
        $("nav ol li").removeClass("pos").eq(count-1).addClass("pos")
        //scrollEvent 실핸
        console.log("scrollevent"+count);
        pos=height * (count);
        scrollevent(pos);
    })

    //KEY EVENT
    var keytime=false;
    $(window).keydown(function(e){
        //13 : enter
        //27 : esc
        //37 : ←
        //38 : ↑
        //39 : →
        //40 : ↓
        //48~57 : left 0~9
        //96~105 : right 0~9

        if(keytime==true){
            return;
        }
        setTimeout(function(){
            keytime=false;
        },1000)
        keytime=true;

        //COUNT ++ --
        if(e.keyCode==40||e.keyCode==39){

            count++;
            if(count>4) count=4;
        }
        if(e.keyCode==38||e.keyCode==37){

            count--;
            if(count<0) count=0;
        }

        //wheel count 값에 따른 scrollTop 지정
        $("html, body").stop().animate({
            scrollTop: height * count
        },1000)

        //NAV
        $("nav ol li").removeClass("pos").eq(count-1).addClass("pos")

        //scrollEvent 실핸
        console.log(count);
        pos=height * (count);
        scrollevent(pos);

        //GUIDE CLOSE
        if(e.keyCode==27){
            close_guide();
        }
    })

    //TOUCH SWIPE EVENT
    $("body").swipe({
        swipe: function(event, direction){
            if(direction=="up"||direction=="left"){

                count++;
                if(count>4) count=4;
            }else if(direction=="down"||direction=="right"){

                count--;
                if(count<0) count=0;
            }



            //wheel count 값에 따른 scrollTop 지정
            $("html, body").stop().animate({
                scrollTop: height * count
            },1000)

            //scrollEvent 실핸
            console.log(count);
            pos=height * (count);
            scrollevent(pos);

            //NAV
            $("nav ol li").removeClass("pos").eq(count-1).addClass("pos")
        },
        excludedElements: $(".guide")

    });

    //NAV CLICK EVENT
    $("nav ol li").eq(0).addClass("pos")
    $("nav ol li").click(function(){
        count=$(this).index() + 1;
        $("html, body").stop().animate({
            scrollTop: height * count
        },0)
        pos=height * (count);
        scrollevent(pos);

        $("nav ol li").removeClass("pos").eq(count-1).addClass("pos")
        if(count==3||count==4){
            wc=wwl;
            $(".wrap .web .web_wrap .mockup li").addClass("select")
            $(".wrap .web .web_wrap .txt li").hide().eq(wwl).show()
        }else{
            wc=0;
            $(".wrap .web .web_wrap .mockup li").removeClass("select")
            $(".wrap .web .web_wrap .txt li").hide().eq(0).show()
        }
    })

    //GUIDE EVENT
    var $web_guide=$(".wrap .web .web_wrap .guide"),
        $design_guide=$(".wrap .design .guide"),
        $design_orig=$(".wrap .design .orig");
    function close_guide(){
        $(".guide, .orig").fadeOut(500)
        $(".guide li, .orig li").fadeOut(500)
        $("html, body").off("scroll touchmove mousewheel")
    }
    function view_guide(guide,num){
        $(guide).fadeIn(500).find("li").eq(num).fadeIn(500)
    }
    function prevent_scroll(){
        $("html, body").on("scroll touchmove mousewheel", function(event){
            event.preventDefault();
            event.stopPropagation();
            return false;
        })
    }
    $("#link_guide li").click(function(){
        var gidx=$(this).index();
        view_guide($web_guide,gidx);
        prevent_scroll();
    })
//    $("#design0").click(function(){
//        view_guide($design_guide,0);
//        prevent_scroll();
//    })
//    $("#design1").click(function(){
//        view_guide($design_guide,1);
//        prevent_scroll();
//    })
//    $("#design2").click(function(){
//        view_guide($design_guide,2);
//        prevent_scroll();
//    })
//    $("#orig0").click(function(){
//        view_guide($design_orig,0);
//        prevent_scroll();
//    })
//    $("#orig1").click(function(){
//        view_guide($design_orig,1);
//        prevent_scroll();
//    })
//    $("#orig2").click(function(){
//        view_guide($design_orig,2);
//        prevent_scroll();
//    })
    $(".close").click(function(){
        close_guide();
    })
    $(".guide, .orig").click(function(){
        close_guide();
    })
    $(".guide li, .orig li").click(function(e){
        return false;
    })
    function mouseScrollStop(){

    }
    $(document).ready(function() {
      $('body').on('scroll touchmove mousewheel', function(e) {
         e.preventDefault();
         e.stopPropagation();
         return false;
      });
      $('aside').hide();
      setTimeout(function() {
           $('body').off('scroll touchmove mousewheel');
           $(".loading_back").fadeOut();
           $('aside').show();
          /* $('div').removeClass('loading_back');*/
       }, 3000);
     });
     //

     //arrow click EVENT
     $('.arrow').click(function(){
       if(count>=1){
         count=0;
         $("html, body").stop().animate({
             scrollTop: height * 0
         },1000)
       } else {
         count=1;
         $("html, body").stop().animate({
             scrollTop: height * count
         },1000)
       }
       //scrollEvent 실핸

       pos=height * (count);
       scrollevent(pos);

     });
})

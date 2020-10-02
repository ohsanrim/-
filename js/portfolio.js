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
    var bar_htmlcss=new ProgressBar.SemiCircle("#bar_htmlcss",{
        strokeWidth: 4,
        easing: "easeInOut",
        duration: 1000,
        color: "#754775",
        trailWidth: 4,
        trailColor: "#c4bdc5",
        text: {
            value: "HTML/CSS",
            color: "#7d6f7c"
        }
    })
    var bar_jquery=new ProgressBar.SemiCircle("#bar_jquery",{
        strokeWidth: 4,
        easing: "easeInOut",
        duration: 1000,
        color: "#754775",
        trailWidth: 4,
        trailColor: "#c4bdc5",
        text: {
            value: "jQuery",
            color: "#7d6f7c"
        }
    })
    var bar_photoshop=new ProgressBar.SemiCircle("#bar_photoshop",{
        strokeWidth: 4,
        easing: "easeInOut",
        duration: 1000,
        color: "#754775",
        trailWidth: 4,
        trailColor: "#c4bdc5",
        text: {
            value: "Photoshop",
            color: "#7d6f7c"
        }
    })
    var bar_illustrator=new ProgressBar.SemiCircle("#bar_illustrator",{
        strokeWidth: 4,
        easing: "easeInOut",
        duration: 1000,
        color: "#754775",
        trailWidth: 4,
        trailColor: "#c4bdc5",
        text: {
            value: "Illustrator",
            color: "#7d6f7c"
        }
    })
    
    //RESIZE EVENT
    $(window).resize(function(){
        height=$(this).height();
        $("html, body").stop().animate({
            scrollTop: height * count
        },1000)
    })
    
    //SCROLL EVENT
    $("html, body").scroll(function(){
        pos=$(this).scrollTop();
        
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
        
        //SKILLS PROGRESSBAR PLAY
        if(pos>=height){
            bar_htmlcss.animate(0.8);
            bar_jquery.animate(0.65);
            bar_photoshop.animate(0.85);
            bar_illustrator.animate(0.6);
        }
    })
   
    //WHEEL EVENT
    var wheeltime=false;
    
    $(window).on("mousewheel DOMMousewheel",function(e){
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
            if(count==2){
                wc++;
                if(wc>wwl) wc=wwl;
                //WEB PLAY
                $(".wrap .web .web_wrap .mockup li").eq(wc).addClass("select")
                $(".wrap .web .web_wrap .mockup li").eq(wc+1).removeClass("select")
                $(".wrap .web .web_wrap .txt li").hide().eq(wc).show()
                $(".wrap .web .web_wrap #link_guide li").hide().eq(wc).show()
                //WC OPTION
                if(wc==0){
                    passup=true;
                }else{
                    passup=false;
                }
                if(wc==wwl){
                    setTimeout(function(){
                        passdown=true;
                    },1000)
                }else{
                    passdown=false;
                }
                if(passdown==false) return;
            }
            count++;
            if(count>4) count=4;
        }else{
            if(count==2){
                wc--;
                if(wc<0) wc=0;
                //WEB PLAY
                $(".wrap .web .web_wrap .mockup li").eq(wc).addClass("select")
                $(".wrap .web .web_wrap .mockup li").eq(wc+1).removeClass("select")
                $(".wrap .web .web_wrap .txt li").hide().eq(wc).show()
                $(".wrap .web .web_wrap #link_guide li").hide().eq(wc).show()
                //WC OPTION
                if(wc==0){
                    setTimeout(function(){
                        passup=true;
                    },1000)
                }else{
                    passup=false;
                }
                if(wc==wwl){
                    passdown=true;
                }else{
                    passdown=false;
                }
                if(passup==false) return;
            }
            count--;
            if(count<0) count=0;
        }
        
        //COUNT SCROLL 
        $("html, body").stop().animate({
            scrollTop: height * count
        },1000)
        
        //NAV
        $("nav ol li").removeClass("pos").eq(count-1).addClass("pos")
        
        console.log(count, wc, passup, passdown)
        
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
            if(count==2){
                wc++;
                if(wc>wwl) wc=wwl;
                //WEB PLAY
                $(".wrap .web .web_wrap .mockup li").eq(wc).addClass("select")
                $(".wrap .web .web_wrap .mockup li").eq(wc+1).removeClass("select")
                $(".wrap .web .web_wrap .txt li").hide().eq(wc).show()
                $(".wrap .web .web_wrap #link_guide li").hide().eq(wc).show()
                //WC OPTION
                if(wc==0){
                    passup=true;
                }else{
                    passup=false;
                }
                if(wc==wwl){
                    setTimeout(function(){
                        passdown=true;
                    },1000)
                }else{
                    passdown=false;
                }
                if(passdown==false) return;
            }
            count++;
            if(count>4) count=4;
        }
        if(e.keyCode==38||e.keyCode==37){
            if(count==2){
                wc--;
                if(wc<0) wc=0;
                //WEB PLAY
                $(".wrap .web .web_wrap .mockup li").eq(wc).addClass("select")
                $(".wrap .web .web_wrap .mockup li").eq(wc+1).removeClass("select")
                $(".wrap .web .web_wrap .txt li").hide().eq(wc).show()
                $(".wrap .web .web_wrap #link_guide li").hide().eq(wc).show()
                //WC OPTION
                if(wc==0){
                    setTimeout(function(){
                        passup=true;
                    },1000)
                }else{
                    passup=false;
                }
                if(wc==wwl){
                    passdown=true;
                }else{
                    passdown=false;
                }
                if(passup==false) return;
            }
            count--;
            if(count<0) count=0;
        }
        
        //wheel count 값에 따른 scrollTop 지정
        $("html, body").stop().animate({
            scrollTop: height * count
        },1000)
       
        //NAV
        $("nav ol li").removeClass("pos").eq(count-1).addClass("pos")
        
        //GUIDE CLOSE
        if(e.keyCode==27){
            close_guide();
        }
    })
    
    //TOUCH SWIPE EVENT
    $("body").swipe({
        swipe: function(event, direction){
            if(direction=="up"||direction=="left"){
                if(count==2){
                    wc++;
                    if(wc>wwl) wc=wwl;
                    //WEB PLAY
                    $(".wrap .web .web_wrap .mockup li").eq(wc).addClass("select")
                    $(".wrap .web .web_wrap .mockup li").eq(wc+1).removeClass("select")
                    $(".wrap .web .web_wrap .txt li").hide().eq(wc).show()
                    $(".wrap .web .web_wrap #link_guide li").hide().eq(wc).show()
                    //WC OPTION
                    if(wc==0){
                        passup=true;
                    }else{
                        passup=false;
                    }
                    if(wc==wwl){
                        setTimeout(function(){
                            passdown=true;
                        },1000)
                    }else{
                        passdown=false;
                    }
                    if(passdown==false) return;
                }
                count++;
                if(count>4) count=4;
            }else if(direction=="down"||direction=="right"){
                if(count==2){
                    wc--;
                    if(wc<0) wc=0;
                    //WEB PLAY
                    $(".wrap .web .web_wrap .mockup li").eq(wc).addClass("select")
                    $(".wrap .web .web_wrap .mockup li").eq(wc+1).removeClass("select")
                    $(".wrap .web .web_wrap .txt li").hide().eq(wc).show()
                    $(".wrap .web .web_wrap #link_guide li").hide().eq(wc).show()
                    //WC OPTION
                    if(wc==0){
                        setTimeout(function(){
                            passup=true;
                        },1000)
                    }else{
                        passup=false;
                    }
                    if(wc==wwl){
                        passdown=true;
                    }else{
                        passdown=false;
                    }
                    if(passup==false) return;
                }
                count--;
                if(count<0) count=0;
            }
            
            //wheel count 값에 따른 scrollTop 지정
            $("html, body").stop().animate({
                scrollTop: height * count
            },1000)
            
            //NAV
            $("nav ol li").removeClass("pos").eq(count-1).addClass("pos")
        },
        excludedElements: $(".guide")
    });
    
    //ASIDE CLICK EVENT
    $("aside").click(function(){
        wc=0;
        $(".wrap .web .web_wrap .mockup li").removeClass("select")
        $(".wrap .web .web_wrap .txt li").hide().eq(0).show()
        if(pos==0){
            $("html, body").stop().animate({
                scrollTop: height
            },1000)
            count=1;
        }else{
            $("html, body").stop().animate({
                scrollTop: 0
            },0);
            count=0;
        }
    })
    
    //NAV CLICK EVENT
    $("nav ol li").eq(0).addClass("pos")
    $("nav ol li").click(function(){
        count=$(this).index() + 1;
        $("html, body").stop().animate({
            scrollTop: height * count
        },0)
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
    
})
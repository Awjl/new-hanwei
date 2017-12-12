$(function () {
    $('#dowebok').fullpage({
        // controlArrows: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        menu: '#menu',
        afterLoad: function (anchorLink, index) {
            if (index == 1) {

            } else if (index == 2) {
                $(".title").animate({top: "120px", opacity: "1" },500);
                $(".text").animate({ top: "190px", opacity: "1" }, 500);
                $(".section2_list").delay(500).animate({ opacity: "1" },1500);
                $(".list_1").delay(500).animate({ top: "0px", left: "0px", opacity: "1" }, 500);
                $(".list_2").delay(1000).animate({ top: "5px", left: "420px", opacity: "1" }, 500);
                $(".list_3").delay(1500).animate({ top: "0px", left: "840px", opacity: "1" }, 500);
                $(".list_4").delay(2000).animate({ top: "280px", left: "0px", opacity: "1" }, 500);
                $(".list_5").delay(2500).animate({ top: "280px", left: "420px", opacity: "1" }, 500);
                $(".list_6").delay(3000).animate({ top: "280px", left: "840px", opacity: "1" }, 500);
            } else if (index == 3) {
                $(".head").animate({ top: "120px", opacity: "1" }, 1000);
            } else if (index == 4) {
                $(".head").animate({ top: "120px", opacity: "1" }, 1000);
                $(".section4").animate({ backgroundSize: "100%" }, 1000);
                $(".app").delay(500).animate({ opacity: "1", fontSize: "30px" }, 1500);
                $(".btn").delay(1500).animate({ bottom: "100px", opacity: "1" }, 1500);
            } else if (index == 5) {
                $(".head").animate({ top: "120px", opacity: "1" }, 1000);
                $(".btn").delay(1500).animate({ bottom: "100px", opacity: "1" }, 1500);
                $(".wechat_title").delay(500).animate({ top: "250px", opacity: "1" }, 1000);
                $(".wechat_left").delay(1000).animate({ left: "140px", opacity: "1" }, 1000);
                $(".wechat_right").delay(1000).animate({ right: "140px", opacity: "1" }, 1000);
            } else if (index == 6) {
                $(".head").animate({ top: "120px", opacity: "1" }, 1000);
                $(".new").delay(1000).animate({ top: "250px", opacity: "1" }, 1000);
                $(".new_btn").delay(2000).animate({ bottom: "20px", opacity: "1" }, 1000);

            } else if (index == 7) {
                $(".head").animate({ top: "120px", opacity: "1" }, 1000);
                $(".map").delay(1000).animate({ opacity: "1" }, 2000);
                $(".contact").delay(1500).animate({ top: "700px", opacity: "1" }, 2000);
                $(".footer").delay(2000).animate({ bottom: "0px", opacity: "1" }, 2000);
            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 1) {

            } else if (index == 2) {
                $(".title").animate({top: "80px", opacity: "0" },0);
                $(".text").animate({ top: "150px", opacity: "0" }, 0);
                $(".section2_list").animate({ opacity: "0" },0);
                $(".list_1").animate({ top: "0px", left: "-50px", opacity: "0" }, 0);
                $(".list_2").animate({ top: "5px", left: "370px", opacity: "0" }, 0);
                $(".list_3").animate({ top: "0px", left: "790px", opacity: "0" }, 0);
                $(".list_4").animate({ top: "280px", left: "-50px", opacity: "0" }, 0);
                $(".list_5").animate({ top: "280px", left: "370px", opacity: "0" }, 0);
                $(".list_6").animate({ top: "280px", left: "790px", opacity: "0" }, 0);
            } else if (index == 3) {
                $(".head").animate({ top: "100px", opacity: "0" }, 0);

            } else if (index == 4) {
                $(".head").animate({ top: "100px", opacity: "0" }, 0);
                $(".section4").animate({ backgroundSize: "200%" }, 0);
                $(".app").animate({ opacity: "0", fontSize: "50px" }, 0);
                $(".btn").animate({ bottom: "50px", opacity: "0" }, 0);
            } else if (index == 5) {
                $(".head").animate({ top: "100px", opacity: "0" }, 0);
                $(".btn").animate({ bottom: "50px", opacity: "0" }, 0);
                $(".wechat_title").animate({ top: "200px", opacity: "0" }, 0);
                $(".wechat_left").animate({ left: "100px", opacity: "0" }, 0);
                $(".wechat_right").animate({ right: "100px", opacity: "0" }, 0);

            } else if (index == 6) {
                $(".head").animate({ top: "100px", opacity: "0" }, 0);
                $(".new").animate({ top: "200px", opacity: "0" }, 0);
                $(".new_btn").animate({ bottom: "0px", opacity: "0" }, 0);

            } else if (index == 7) {
                $(".head").animate({ top: "100px", opacity: "0" }, 0);
                $(".map").animate({ opacity: "0" }, 0);
                $(".contact").animate({ top: "650px", opacity: "0" }, 0);

            }
        }
    });
    setInterval(function () {
        $.fn.fullpage.moveSlideRight();
    }, 3000);
    (function scrollLeft() {
        var speed = 20;
        var tab = document.getElementById('demoin');
        var tab1 = document.getElementById('demo1');
        var tab2 = document.getElementById('demo2');
        function Marquee() {
            if (tab2.offsetWidth - tab.scrollLeft <= 0) {
                tab.scrollLeft = 0;
            } else {
                tab.scrollLeft++;
            }
        }
        var timer = setInterval(Marquee, speed);
        tab.onmouseover = function () {
            clearInterval(timer);
        };
        tab.onmouseout = function () {
            timer = setInterval(Marquee, speed);
        }
    })();
});
//右侧悬浮
$(".qq").hover(function () {
    $("#qq").css({ "opacity": "1", "top": "600px" })
}, function () {
    $("#qq").css({ "opacity": "0", "top": "580px" })
})
$(".wx").hover(function () {
    $("#wx").css({ "opacity": "1", "top": "630px" })
}, function () {
    $("#wx").css({ "opacity": "0", "top": "580px" })
})
$(".rengong").hover(function () {
    $("#rengong").css({ "opacity": "1", "top": "750px" })
}, function () {
    $("#rengong").css({ "opacity": "0", "top": "730px" })
})
// 图片切换
var _index = 0;
function tab() {
    var $_front = $("#demo1 li").eq(_index).find("img").attr("src");
    var $_after = $(".template_active_img").find("img").attr("src");
    $(".template_active_img").find("img").attr("src", $_front);
    $("#demo1 li").eq(_index).find("img").attr("src", $_after);
    _index++;
    if (_index >= $("#demo1 li").length) {
        _index = 0;
    }
}

var tab_time = setInterval(function () {
    tab();
}, 2000);
$(".active_left").click(function () {
    clearInterval(tab_time);
    _index = _index + 1;
    if (_index >= $("#demo1 li").length) {
        _index = 0;
    }
    var $_front = $("#demo1 li").eq(_index).find("img").attr("src");
    var $_after = $(".template_active_img").find("img").attr("src");
    $(".template_active_img").find("img").attr("src", $_front);
    $("#demo1 li").eq(_index).find("img").attr("src", $_after);
    tab_time = setInterval(function () {
        tab();
    }, 2000);
})
$(".active_right").click(function () {
    clearInterval(tab_time);
    _index = _index - 1;
    if (_index <0) {
        _index = $("#demo1 li").length;
    }
    var $_front = $("#demo1 li").eq(_index).find("img").attr("src");
    var $_after = $(".template_active_img").find("img").attr("src");
    $(".template_active_img").find("img").attr("src", $_front);
    $("#demo1 li").eq(_index).find("img").attr("src", $_after);
    tab_time = setInterval(function () {
        tab();
    }, 2000);
})

var _ind=0;
function list(){
    $(".title div").eq(_ind).addClass("on").siblings().removeClass("on");
    $(".text p").eq(_ind).addClass("on").siblings().removeClass("on");
    $(".section2_list li").eq(_ind).addClass("onlist").siblings().removeClass("onlist");
    _ind++;
    if(_ind>=3){
        _ind=0;
    }
}
var list_time = setInterval(function () {
    list();
}, 3000);

$(".section2_list li").click(function(){
    clearInterval(list_time);
    _ind=$(this).index();
    $(".title div").eq(_ind).addClass("on").siblings().removeClass("on");
    $(".text p").eq(_ind).addClass("on").siblings().removeClass("on");
    $(".section2_list li").eq(_ind).addClass("onlist").siblings().removeClass("onlist");
    list_time = setInterval(function () {
        list();
    }, 3000);
})
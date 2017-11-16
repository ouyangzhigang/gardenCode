$(document).ready(function () {
    /* 使用fastclick优化移动端的click事件 */
    FastClick.attach(document.body);

    //初始化按钮颜色
    $('.colorButton').each(function () {
        var color = $(this).attr('data-color');
        $(this).css({'background-color':color})
    });






    //swiper
    var mySwiper = new Swiper ('.swiper-container', {
        direction : 'vertical',
        onlyExternal : true,
        effect:'fade',
        speed:1000,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        },
        onTransitionStart:function(){
        },
        onTransitionEnd:function(swiper){
            var index = swiper.activeIndex;
        }
    });

    //page1
    $(".page1_step4").on('click', function () {
       mySwiper.slideNext(); 
    });

    //page2
    $(".page2_submit").on('click', function () {
        mySwiper.slideNext();
    });


    //page3
    $('.gotoIndex').on('click', function () {
        mySwiper.slideTo( 0,1000 );
    });
    $('.page3_next').on('click', function () {
        mySwiper.slideNext();
    });


    //page4
    $('.page4_step3').on('click', function () {
        mySwiper.slideTo( 1,1000,false );
    });
    $('.page4_step4').on('click', function () {
        alert('分享');
    });
    $('.page4_step5').on('click', function () {
        mySwiper.slideNext();
    });




});
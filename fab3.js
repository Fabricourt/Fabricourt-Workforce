
(function($){
  $(window).load(function(){

    $("#content-1").mCustomScrollbar({
      axis:"yx", //set both axis scrollbars
      advanced:{autoExpandHorizontalScroll:true}, //auto-expand content to accommodate floated elements
      // change mouse-wheel axis on-the-fly 
      callbacks:{
        onOverflowY:function(){
          var opt=$(this).data("mCS").opt;
          if(opt.mouseWheel.axis!=="y") opt.mouseWheel.axis="y";
        },
        onOverflowX:function(){
          var opt=$(this).data("mCS").opt;
          if(opt.mouseWheel.axis!=="x") opt.mouseWheel.axis="x";
        },
      }
    });

  });
})(jQuery);

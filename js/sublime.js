$(document).ready(function(){ 



setTimeout(function(){ 
  var script = document.createElement('script');
  script.src = "js/jquery-linedtextarea.js";
  document.getElementsByTagName('head')[0].appendChild(script);}, 1500);


$('.mainTextArea').clone().removeClass('lined mainTextArea').addClass('right-summary').appendTo('.right-sidebar');

$('.right-summary').prepend('<div id="mini-viewport"></div>');


$(document).ready(function()
{
//    $('#content-clipper').tinyscrollbar();


//$("code:contains('content')").each(function () {
//    $(this).html($(this).html().replace("content", "<span style='color:red !important;'>content</span>"));
//});



var $hotPinkList = [


 
 "html",
 "head",
 "title",
 "body",



];



for (i=0;i<$hotPinkList.length; i++){ 

$("code").html(function(_, html) {//:contains("+$hotPinkList[i]+"')").html(function(_, html) {
var rep = $hotPinkList[i]; 
var regex = new RegExp(rep, 'g');
   return html.replace(regex, '<span style="color:#f92772;">'+$hotPinkList[i]+'</span>');


});
console.log($hotPinkList[i]+' : : yxyxy')









}

//var rep3 = '$$';
//var regex3 = new RegExp(rep3, 'g');

$('code').html($('code').html().replace(/3noClr/g, ''));
$('code').html($('code').html().replace(/"(.*?)"/g, function(){
  return 'xxx'
}));



//results = astring.match(/"[\d\w\s]*"/g);













/*$('code').html(function(_, html) {
  var rep2="$$";
  var regex2 = new RegExp(rep2, 'g');

   return html.replace(regex2, 'monaaaay!')
 });

/*$("code:contains('head')").html(function(_, html) {
   return html.replace(/(head)/g, '<span style="color:#f92772;">head</span>');
});
$("code:contains('html')").html(function(_, html) {
   return html.replace(/(html)/g, '<span style="color:#f92772;">html</span>');
});
  


$("code:contains('title')").html(function(_, html) {
   return html.replace(/(title)/g, '<span style="color:#f92772;">title</span>');
});

*/

$('.arrow-right').siblings('a').hover(

  function(){

      $(this).siblings('.arrow-right').addClass('arrow-hover');

  },

  function(){

      $(this).siblings('.arrow-right').removeClass('arrow-hover');

  }

);




});
   







// Tomedit tomedit current placer placemarker

$('.close-tab').click(function(){
var $thisAlt = $(this).parent('li').attr('alt');




if ($('.tab-body:not(.tb-hidden)').attr('alt') === $thisAlt) {


if($('ul.tabs li:visible').length > 1){
  $('ul.tabs li').removeClass('active');
var $second = $('ul.tabs li:visible').first().next();//.addClass('active');
$second.addClass('fuxxor active ui-tabs-active'); //.show();
 

var $ulTabVisible =  $('ul.tabs li:visible').first().next().attr('alt');

$('.tab-body:not(.tb-hidden)').addClass('tb-hidden');
$('.'+$ulTabVisible).removeClass('tb-hidden');
}
else{
  $('.tab-body:not(.tb-hidden)').addClass('tb-hidden');
}


}






  $(this).parent('li').animate({top:'100px'}, 'fast',function(){
    $(this).css('display','none');
    if ($('ul.tabs').width() < 870){
  //alert('scoopler scewporij ');




  var $thnx = (870 / $('ul.tabs li:visible').length) - 45 ;
//var $thnx = $

//alert($thnx);

  if ($thnx > 129){
    $thnx = 129;
  }



  $('ul.tabs li').css({'width':'50px','min-width': $thnx+'px'});



}




  });



});








$(window).load(function(){
          /*  $("#content-clipper").mCustomScrollbar({
              scrollInertia:120

            }); */



if ($('ul.tabs').width() > 870){


var $xyz = (870 / $('ul.tabs li:visible').length) - 45 ;
//var $thnx = $

//alert($xyz);


  $('ul.tabs li').css({'width':'50px','min-width': $xyz+'px'})


}

$( 'ul.tabs' ).bind("resize", function(){
    // Change the width of the div
  //  alert('skrippler! LKJ ')
});






$('#folders li a').click(function(){
var $thisAlt =  $(this).attr('alt');
//alert($thisAlt);


$('.tab-body').each(function(){
  $(this).addClass('tb-hidden');
  if($(this).attr('alt')==='index'){
   // alert('scoopasdf asdf')
  }
  if($(this).attr('alt')===$thisAlt){
    $(this).removeClass('tb-hidden');

  }

});


  $('ul.tabs li').each(function(){
    if($(this).attr('alt') === $thisAlt){
            $('ul.tabs li').removeClass('active');
             $(this).css('display','block').addClass('active');
       if($('ul.tabs').width() > 870){



  var $thnx = (870 / $('ul.tabs li:visible').length) - 45 ;
//var $thnx = $

//alert($thnx);

  if ($thnx > 129){
    $thnx = 129;
  }



          $('ul.tabs li').css({'width':'50px','min-width': $thnx+'px'});

        }

      $(this).animate({top:'0px'},'fast');



    }

  })


var $linedTextHeight = $('.linedtextarea').height() +10;
$('#content-area').css('height',$linedTextHeight+'px');

$('#content-clipper').mCustomScrollbar('update');


})













$('.lined').each(function(){
    this.contentEditable = true;
});



 // Target all classed with ".lined"
  $(".lined").linedtextarea(
    { }
  );





            $("#content-clipper").mCustomScrollbar({
               scrollInertia:120,
    callbacks:{
        whileScrolling:function(){
            myCustomFn(this);
        }
    }
});




function myCustomFn(el){
    var msg="Content inside the element with id '"+el.attr("id")+"' has scrolled "+mcs.topPct+"%";
  console.log(mcs.topPct);



var $rs= $('.right-summary').height();
var $percentValue = ($rs - 654) / 100;
var $rsTop = $percentValue * mcs.topPct;
 $('#mini-viewport').css('top',$rsTop+'px');






}








//xyz




//console.log(
  //parseInt($('.mCSB_dragger').css('top'), 10) )

  //$('.mCSB_dragger').css('top'))













        });



/*
width: 800px !important;
position: absolute;
float: right;
right: -280px;
top: -361px;
color: white; 



 
var $thisScrollTop =     $('mCSB_dragger').css('top'); 
  console.log(
   //   $('#content-clipper').scrollTop()
     //$thisScrollTop
'asdfasdf asdf'
     ); 


//console.log(api.getPercentScrolledY());




$('#mini-viewport').css('top',$thisScrollTop+'px');






*/



//alert($('#content-clipper')[0].scrollHeight)






 $('.parent').click(function() { 
  $(this).siblings('.sub-nav').slideToggle('fast');//toggleClass('visible');

 });

 $('#folders a').click(function(){
  $('#folders a').removeClass('selected-file');
   // alert('asfasdf asf ');
  

 if($(this).siblings('ul').length === 0) { $(this).addClass('selected-file');//.css('background','cyan');}
 }
 else{
  $(this).siblings('.arrow-right').toggleClass('active-arrow');

 }

 })



  //  $(this).find('.sub-nav:first').toggleClass('visible');//children('.sub-nav').first().toggleClass('visible');// .find('> .sub-nav').first().toggleClass('visible');

//    .closest('.sub-nav').toggleClass('visible');


//        var $thisSubNav = $(this).children('ul.sub-nav')[0];
  //      console.log($thisSubNav)
    //    $thisSubNav.accClass('activeFun')
   // });
/*

$('.parent').click(function (e) {
    $('.parent').not(this).find('ul').slideUp(200);
    $(this).find('ul').slideToggle(200);
    e.stopPropagation();
});

*/










  // Target a single one
 // $("#mytextarea").linedtextarea();




//$("textarea").jqte();



var tabs = $('.tabs > li');

tabs.on("click", function(){
  tabs.removeClass('active');
  $(this).addClass('active');



 var thisTab = $(this).children('a').attr('href');
    console.log(thisTab);

var $length =  $('.tabs li').length;
var $tabs = $('.tabs li');
var $tabsHref = $('.tabs li').children('a').attr('href');
var $tabsChildA = $tabs.children('a');
   for (var i=0;i < $length ;i++){

     	console.log($tabsHref[i]);
 //    	if ($(this).attr('href') == xxyyxx {}

     }



//.setTimeout(function(){ 
  //$.getScript("jquery-linedtextarea.js");alert('asdf asdf');}, 1500);


//$('.tabs li a').each(function() {

//	$(this).removeClass('active')
    //var i = $(this).index() + 1;
    //$(this).text("List item " + i);

  //  $(this)
//});



 /*   var thisTab = $(this).children('a').attr("href");
alert(thisTab);
    if (thisTab === "#tab-1") {
       alert('I am empty href value');
  }*/








});


var tabs1 = $( ".tab-container" ).tabs();
    tabs1.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs1.tabs( "refresh" );
      }







    });
  

});



    
  





$(function()

{



  $('body').keydown(function(e){
   //if(e.keyCode == 8){
       // user has pressed backspace
     //  array.pop();
  // }
   if(e.keyCode == 32){
       // user has pressed space
      // array.push('');
    console.log('dassa spicy meebal')

   }
});

  //var $jspElement = $('#content-clipper');
  //$jspElement.tinyscrollbar();//.jScrollPane({
       //contentWidth: '0px'
   // });



  


//var api = $('.jspDrag').data('jsp');




   
});



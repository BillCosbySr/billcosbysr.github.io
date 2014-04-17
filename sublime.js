

$(document).ready(function(){ 



var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
else if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
else if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
else if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

console.log('Your OS is: '+OSName);
//$( "#allem, #top-bar" ).draggable();


$('.lined').each(function(){
    this.contentEditable = true;
});



 // Target all classed with ".lined"
  $(".lined").linedtextarea(
    {selectedLine: 1}
  );

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



$('')


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



    
  





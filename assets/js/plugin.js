$(document).ready(function(){
var body = $("con");
var top = body.scrollTop() // Get position of the body

if(top!=0)
{
  body.animate({scrollTop:0}, '500');
};

});
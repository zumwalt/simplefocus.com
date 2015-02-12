$(function(){
	$("#demo-control").slider({
		max:100,min:40,step:.1,value:100,slide:function(e,t){
			$("#demo-wrap").css("width",t.value+"%");
		}
	})
});
$(".demo-article").bind("mousewheel DOMMouseScroll",function(e){
	var t=null;
	e.type=="mousewheel"?t=e.originalEvent.wheelDelta*-1:e.type=="DOMMouseScroll"&&(t=40*e.originalEvent.detail);
	if(t){
		e.preventDefault();
		$(this).scrollTop(t+$(this).scrollTop())
	}
});
var $root=$("html, body");$("a").click(function(){
	$root.animate({scrollTop:$($.attr(this,"href")).offset().top+20},500);
	return!1});
$("#demo-wrap").flowtype({fontRatio:36});
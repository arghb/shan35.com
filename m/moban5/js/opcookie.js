function daohang(){
	var daohang = $("#daohang");
	var ShowNewNav = $("#ShowNewNav");
	var WrapAutoHeight = $("#WrapAutoHeight").height();
	daohang.click(function(){
		var val = $("#daohang").attr("val");
		if (val == 0){
			ShowNewNav = $("#ShowNewNav").show(200);
			var val = $("#daohang").attr("val",1);
			var ShowNewNav = $("#ShowNewNav").height();
			$("#WrapAutoHeight").height(ShowNewNav);
		}else{
			ShowNewNav = $("#ShowNewNav").hide(200);
			var val = $("#daohang").attr("val",0);
			$("#WrapAutoHeight").height("auto");
      $("#ShowNewNav").removeAttr('style');
		}
	});
}
function TagLists(id){
	/**
	 *瀵艰埅tag鍜屽唴椤祎ag棰滆壊鎺у埗
	 */
	var doc=document;
	var c=doc.getElementById(id);
	var d=c.getElementsByTagName("li");
	for (var i=0;d.length>i;i++){
		var rand ="tit"+Math.floor(1+Math.random()*20);
		d[i].className=rand;
	}
	var a=doc.getElementsByClassName("TagBox")[0];
	if (a !=null){
		var b=a.getElementsByTagName("a");
		for (var i=0;b.length>i;i++){
			var rand = "tit"+Math.floor(1+Math.random()*4);
			b[i].className=rand;
		}
	}
}
function Pages(){
	var doc=document;
	var a=doc.getElementById("Pages");
	var b=a.getElementsByTagName("li");
	var c=doc.getElementById("thisclass").getAttribute("thisclass");
	var d=doc.getElementById("pageinfo").getAttribute("pageinfo");
	var e=doc.createElement("li");
	e.className="AppEndLi";
	e.innerHTML="<span>"+c+"</span><font color='#999'> / "+d+"</font>";
	a.insertBefore(e,b[0]);
}
function show_Pic(){
	/**
	 *鐑棬缇庡コ鍥剧墖杞挱
	 */
	var doc=document;
	var a=doc.getElementsByClassName("Hot_pic")[0];
	var b=a.getElementsByClassName("libox");
	for (var i=0;i<b.length;i++){
		var c=b[i].getElementsByTagName("a");
		var rand=Math.floor(0+Math.random()*2);
		for (var ii=0;ii<c.length;ii++){
			c[ii].style.display="none";
		}
		c[rand].style.display="block";
	}
}
function showDesc(id,lh){
	var doc=document;
	var a=doc.getElementById(id);
	var b=a.getElementsByTagName("p")[0];
	var c=doc.createElement("div");
	c.className="arc-txt-arrow";
	var d=b.offsetHeight;
	if(d>lh*3){
		a.style.height=lh*4+"px";
		a.style.paddingBottom="16px";
		a.appendChild(c);
		
	}
	c.onclick=function(){
		if (c.className.indexOf("arc-txt-arrow")>-1&&c !=null){
			c.className="arc_txt_up";
			a.style.height="auto";
		}else{
			c.className="arc-txt-arrow";
			a.style.height=lh*4+"px";
		}
	}

}
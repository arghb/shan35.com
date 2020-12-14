function uaredirect(f){try{if(document.getElementById("bdmark")!=null){return}var b=false;if(arguments[1]){var e=window.location.host;var a=window.location.href;if(isSubdomain(arguments[1],e)==1){f=f+"/#m/"+a;b=true}else{if(isSubdomain(arguments[1],e)==2){f=f+"/#m/"+a;b=true}else{f=a;b=false}}}else{b=true}if(b){var c=window.location.hash;if(!c.match("fromapp")){if((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))){location.replace(f)}}}}catch(d){}}function isSubdomain(c,d){this.getdomain=function(f){var e=f.indexOf("://");if(e>0){var h=f.substr(e+3)}else{var h=f}var g=/^www\./;if(g.test(h)){h=h.substr(4)}return h};if(c==d){return 1}else{var c=this.getdomain(c);var b=this.getdomain(d);if(c==b){return 1}else{c=c.replace(".","\\.");var a=new RegExp("\\."+c+"$");if(b.match(a)){return 2}else{return 0}}}};
//tab鍒囨崲
$(function(){
	Tabs(".rtb li",".rtb_con .tagList","showt","mouseover");	
	digest();
});
function Tabs(tabs,container,active,event){
        $(tabs).bind(event,function(){
        var oIndex = $(tabs).index(this);
        $(this).addClass(active).siblings(tabs).removeClass(active);
        $(container).eq(oIndex).show().siblings(container).hide();
    })
};
function syzxb960x90(){}

function digest(){}


function nrybqxm960x90(){}
function nrybqsm960x90(){}
function nrydl300x120(){}

document.writeln("    <script type=\'text/javascript\'>");
document.writeln("      $(\'.showso\').on(\'click\',function(){");
document.writeln("        scroll(0,0);");
document.writeln("        $(\'#seindex\').slideToggle(300);");
document.writeln("      });");
document.writeln("	  //对应的pc端链接");
document.writeln("	function get_pc_url(){");
document.writeln("		var m_url = window.location.href;");
document.writeln("		var pc_url = m_url.replace(\'m.meituba.com\',\'www.meituba.com\');");
document.writeln("		pc_url = pc_url+\'?fromapp\';");
document.writeln("		$(\'#pc_url\').attr(\'href\',pc_url);");
document.writeln("	}");
document.writeln("	get_pc_url();");
document.writeln("    </script>");
document.writeln("");
document.writeln("");
document.writeln("	<script type=\'text/javascript\'>");
document.writeln("	  $(function(){");
document.writeln("		//字体大小的自适应，加上class=autosize即可");
document.writeln("		function e() {");
document.writeln("		  var e = document.documentElement.clientWidth;");
document.writeln("		  var font_size = e * .04 + \'px\';");
document.writeln("		  var font_size_small = e * .03 + \'px\';");
document.writeln("		  var font_size_big = e * .05 + \'px\';");
document.writeln("		  //var padding = e * .01 ;");
document.writeln("		  //if(padding>10){padding = 10}");
document.writeln("		  $(\'.autosize\').css(\'font-size\',font_size);");
document.writeln("		  $(\'.autosize2\').css(\'font-size\',font_size_small);");
document.writeln("		  $(\'.autosize3\').css(\'font-size\',font_size_big);");
document.writeln("		  //$(\'.swiper-slide img\').css(\'padding\',padding);");
document.writeln("		}");
document.writeln("		e();");
document.writeln("		$(window).on(\'orientationchange, resize\',");
document.writeln("		function() {");
document.writeln("		  e();");
document.writeln("		})");
document.writeln("		//关闭下载栏");
document.writeln("		$(\'#closedown\').click(function(){");
document.writeln("		  $(\'.downline\').css(\'display\',\'none\');");
document.writeln("		})");
document.writeln("	  })");
document.writeln("	  //导航开关");
document.writeln("	  function navdisplay(){");
document.writeln("		$(\'.nav\').css(\'display\',\'block\');");
document.writeln("		$(\'.navbtn\').attr(\'onclick\',\'navclose();\');");
document.writeln("		$(\'.navbtn\').attr(\'class\',\'closenavbtn\');");
document.writeln("	  }");
document.writeln("	  function navclose(){");
document.writeln("		$(\'.nav\').css(\'display\',\'none\');");
document.writeln("		$(\'.closenavbtn\').attr(\'onclick\',\'navdisplay();\');");
document.writeln("		$(\'.closenavbtn\').attr(\'class\',\'navbtn\');");
document.writeln("	  }");
document.writeln("	</script>");
$(function(){$(".actionPopup").on("click",function(){var a=$(this).attr("href"),b=$(window).width(),c=$(this).data("popwidth"),d=$(this).data("popheight"),g=parseInt($(window).width())+80,f=parseInt($(window).height())+100;c&&d?(g=c,f=d):(g/=2,f/=2);window.open(a,"title","location=no,menubar=no, status=yes, scrollbars=yes, resizable=yes, toolbar=no, width="+g+", height="+f+", left="+(b/2-g/2));return!1});var a=!1;$(window).on("beforeunload",function(){if(!elementClicked&&a)return"\u884c\u3063\u305f\u5909\u66f4\u304c\u4fdd\u5b58\u3055\u308c\u306a\u3044\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"});
for(var c=[],b=0;b<$(".check_inputs select").length;b++)c.push($(".check_inputs select").eq(b).val());$("input, select, textarea").on("keyup change",function(){var b=0,d=[],e;for(e=0;e<$(".check_inputs input[type='text']").length;e++)b+=$(".check_inputs input[type='text']").eq(e).val().length;for(e=0;e<$(".check_inputs textarea").length;e++)b+=$(".check_inputs textarea").eq(e).val().length;for(e=0;e<$(".check_inputs select").length;e++)d.push($(".check_inputs select").eq(e).val());e=c.toString();
d=d.toString();a=0<b||e!==d?!0:!1});$(document).on("click","a:not(.check_alinks), button:not(.check_buttons), input[type=submit]:not(.check_submits)",function(){elementClicked=!0;setTimeout(function(){elementClicked=!1},100)});var d=!1;$(".limit_dual_submit").on("click",function(){if(d)return!1;d=!0;setTimeout(function(){d=!1},2E3)});d=!1;$(".limit_septa_submit").on("click",function(){if(d)return!1;d=!0;setTimeout(function(){d=!1},7E3)});var j=!1;$(".limit_eternal_submit").on("click",function(){if(j)return!1;
j=!0});$(".input_submit").on("click",function(){var a=$(this),b,c;$('<div class="dialogbox"><style>.overlay{position: fixed;top:0;left:0;width: 100%;height: 100%;background:rgba(0,0,0,0.5);z-index:100;}.dialog{position: fixed;top:25%;left:50%;margin: 0 auto;margin-left:-200px;padding: 20px;width: 400px;background:#fff;border: 1px solid #ddd;z-index:101;}.btn_ok{margin:0 10px;padding: 10px;width:25%;background:#0ff;line-height: 1em;}.btn_cancel{margin:0 auto;padding: 10px;width:25%;background:#ddd;line-height: 1em;}</style><div class="overlay"></div><div class="dialog txt_l"><p class="mt15">password\u3092\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002</p><p class="mt15 mb15">\u203b\u534a\u89d2\u82f1\u6570\u5b57\u306e\u307f</p><input type="password" name="password" value="" /><p class="txt_r mt15"><button class="btn_ok" type="button">OK</button><button class="btn_cancel" type="button">\u30ad\u30e3\u30f3\u30bb\u30eb</button></p></div></div>').appendTo($("body"));
b=$('.dialog input[type="password"]');b.focus();$(".dialog .btn_ok").on("click",function(){c=$('.dialog input[type="password"]').val();if(/[^A-Za-z0-9_#$%&@'()*+,-./]+/g.test(c))return alert("\u534a\u89d2\u82f1\u6570\u5b57\u306e\u307f\u3092\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002"),b.focus(),!1;if(c)$("<input />").attr({type:"hidden",name:"password",value:c}).addClass("add_input").appendTo(a.parents("form")),$("<input />").attr({type:"hidden",name:a.attr("name"),value:a.val()}).addClass("add_input").appendTo(a.parents("form")),
a.parents("form").submit(),a.parents("form").children(".add_input").remove(),$("div.dialogbox").remove();else return alert("\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002"),b.focus(),!1});$(".dialog .btn_cancel,.overlay").on("click",function(){$("div.dialogbox").remove();return!1});return!1});$(".button_pagetop a,.scrolltop-btn").on("click",function(){$("body,html").animate({scrollTop:0},500);return!1});$(".change_uppercase").focusout(function(){var a=$(this).val(),a=a.replace(/[\uff21-\uff3a\uff41-\uff5a\uff08\uff09\uff0c\uff0f\u2010]/g,
function(a){return String.fromCharCode(a.charCodeAt(0)-65248)}),a=a.toUpperCase();$(this).val(a)});$("[class*='js_changeYear'], [class*='js_changeMonth']").change(function(){var a=$(this).attr("class").match(/js_changeYear[0-9]+|js_changeMonth[0-9]+/g)[0];SettingDay(a)});var f=b=void 0,h=void 0,b="undefined"!==typeof b?b:80,f="undefined"!==typeof f?f:40,h="undefined"!==typeof h?h:120;$.datepicker.regional.ja={showOn:"button",buttonImage:path("/css/images/calender.png"),buttonText:"\u30ab\u30ec\u30f3\u30c0\u30fc\u304b\u3089\u9078\u629e",
buttonImageOnly:!0,showButtonPanel:!1,gotoCurrent:!0,changeMonth:!0,changeYear:!0,yearRange:"c-"+b+":c+"+f,minDate:"-"+h+"Y",closeText:"\u9589\u3058\u308b",prevText:"&#x3c;\u524d\u6708",nextText:"\u6b21\u6708&#x3e;",currentText:"\u4eca\u65e5",monthNames:"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),monthNamesShort:"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),dayNames:"\u65e5\u66dc\u65e5 \u6708\u66dc\u65e5 \u706b\u66dc\u65e5 \u6c34\u66dc\u65e5 \u6728\u66dc\u65e5 \u91d1\u66dc\u65e5 \u571f\u66dc\u65e5".split(" "),
dayNamesShort:"\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),dayNamesMin:"\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),weekHeader:"\u9031",dateFormat:"yy/mm/dd",firstDay:0,isRTL:!1,showMonthAfterYear:!0,duration:"fast",yearSuffix:"\u5e74"};$.datepicker.setDefaults($.datepicker.regional.ja);$(".datepicker").datepicker();$(".wdatepicker").datepicker({wareki:!0});jQuery(".calendarstart, .calendarend").datepicker({showAnim:"drop",changeMonth:!0,numberOfMonths:1,showCurrentAtPos:0,wareki:!0,
beforeShow:function(){var a=$(this);if(a.val())return!0;var b=a.data("index"),c=a.hasClass("calendarstart")?$("#datepickerTo"+b):$("#datepickerFrom"+b);return c.val()?(a.datepicker("setDate",c.val()),!0):1>b?!0:(a.datepicker("setDate",$("#datepickerTo"+b).val()),void 0)}});$(".error_transition").on("click",function(){errorTransition()});$(".closewindow").on("click",function(){closeWindow()});$(".movefinished").on("click",function(){window.location.href=path("/finished")});$(".remoteLogout").on("click",
function(){$("body").append('<form method="post" action="'+path("/remoteaccess/logout")+'" id="logoutPost" style="display: none;" />');$("#logoutPost").submit();$("#logoutPost").remove()});$(".toggle_b").on("click",function(){var a=$(this);toggleButton(a)});$('input[type="text"]').on("keypress",function(a){if(13==a.which||13==a.keyCode)return!1});$(".backok").length||(history.pushState(null,null,null),$(window).on("popstate",function(){history.pushState(null,null,null);alert("\u30d6\u30e9\u30a6\u30b6\u306e\u623b\u308b\u30dc\u30bf\u30f3\u306f\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3002")}))});
var elementClicked=!1;function errorTransition(a){a="undefined"!==typeof a?a:path(common_errorPath);sessionStorage.setItem("URL",a);elementClicked=!0;window.location.href=a;return this}function path(a){return common_contextPath+a}function closeWindow(){/Chrome/i.test(navigator.userAgent)?window.close():window.open("about:blank","_self").close()}function toggleButton(a){a.parent("div").next(".toggle").stop().toggle();a.toggleClass("open")}
function confirmdialog(a,c){confirm(c)||(a.preventDefault(),a.stopImmediatePropagation())}function SettingDay(a){a=a.slice(-2);var c;c=$(".js_changeYear"+a).val();var b=$(".js_changeMonth"+a).val();c=(new Date(c,b,0)).getDate();for(var b="",d=1;d<=c;d++)d=("0"+d).slice(-2),$(".js_changeDay"+a).val(),b+='<option value="'+d+'">'+d+"</option>\n";$(".js_changeDay"+a).html(b)}
function convert_wareki(a,c){var b;return!1==c?a:1988<a?(b=a-1988,1==b?a+"(\u662d\u548c64/\u5e73\u6210\u5143\u5e74)":a+"(\u5e73\u6210"+b+")"):1925<a?(b=a-1925,1==b?a+"(\u5927\u6b6315/\u662d\u548c\u5143\u5e74)":a+"(\u662d\u548c"+b+")"):1911<a?(b=a-1911,1==b&&(b="\u5143\u5e74"),a+"(\u5927\u6b63"+b+")"):1867<a?(b=a-1867,1==b&&(b="\u5143\u5e74"),a+"(\u660e\u6cbb"+b+")"):a}
function dateFormatterYMD(a){var c=/^[0-9]{8}$/,b=/^[0-9]{4}\/[0-9]{1,2}\/[0-9]{1,2}$/;null==a||""===a||(a=dateConversionToEn(a),a=strReplace(a,"-","/"),a.match(b)?a=a.split("/")[0]+"/"+zero_padding(a.split("/")[1],2)+"/"+zero_padding(a.split("/")[2],2):a.match(c)&&a.match(/^[0-9]{8}$/)&&(a=a.substr(0,4)+"/"+a.substr(4,2)+"/"+a.substr(6,2)));return a}
function dateFormatterYM(a){var c=/^[0-9]{6}$/,b=/^[0-9]{4}\/[0-9]{1,2}$/;null==a||""===a||(a=dateConversionToEn(a),a=strReplace(a,"-","/"),a.match(b)?a=a.split("/")[0]+"/"+zero_padding(a.split("/")[1],2):a.match(c)&&a.match(/^[0-9]{6}$/)&&(a=a.substr(0,4)+"/"+a.substr(4,2)));return a}function strReplace(a,c,b){return a.replace(RegExp(c,"g"),b)}function dateConversionToEn(a){return a.replace(/[\uff10-\uff19\uff0f\uff0d]/g,function(a){return String.fromCharCode(a.charCodeAt(0)-65248)})}
function zero_padding(a,c){var b;for(b=String(a);b.length<c;)b="0"+b;return b}
var ajaxUtil={HTTP_METHOD_GET:"GET",HTTP_METHOD_POST:"POST",DATA_TYPE_JSON:"json",SUCCESS:0,ERROR:1,getAsync:function(a,c){return ajaxUtil.doAjax(a,null,ajaxUtil.HTTP_METHOD_GET,c)},getDataAsync:function(a,c,b){return ajaxUtil.doAjax(a,c,ajaxUtil.HTTP_METHOD_GET,b)},postAsync:function(a,c,b){return ajaxUtil.doAjax(a,c,ajaxUtil.HTTP_METHOD_POST,b)},doAjax:function(a,c,b,d){null==d&&(d=!0);return $.ajax({async:d,url:a,data:c,dataType:ajaxUtil.DATA_TYPE_JSON,type:b})}};

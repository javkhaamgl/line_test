$(function(){function e(a,b){0===Object.keys(g).length?(a.removeClass("inputerror"),a.parent().find(".checkedArea").hide()):g[b]?(a.addClass("inputerror"),a.parent().find(".checkedArea").show()):(a.removeClass("inputerror"),a.parent().find(".checkedArea").hide())}function d(a,b){g[a]?-1===$.inArray(b,g[a])&&g[a].push(b):g[a]=Array(b)}function c(a,b){g[a]&&(0<=(i=$.inArray(b,g[a]))&&g[a].splice(i,1),0==g[a].length&&delete g[a])}function h(a,b,c){""==a&&(a=new Date,a=a.getFullYear()+"/"+("0"+(a.getMonth()+
1)).slice(-2)+"/"+("0"+a.getDate()).slice(-2));a=new Date(a);b=new Date(b);switch(c){case 1:return a>b?!0:!1;case 2:return a>=b?!0:!1;case 3:return a.getTime()==b.getTime()?!0:!1;case 4:return a<=b?!0:!1;case 5:return a<b?!0:!1;default:return!1}}function j(a,b,c){""==c&&(c="01");var d=new Date(a,b-1,c);return d.getFullYear()==a&&d.getMonth()==b-1&&d.getDate()==c?!1:!0}var g={};$(".datepicker, .wdatepicker, .calendarstart, .calendarend").change(function(){$(this).focusout()});$('[rule~="notblank"]').focusout(function(){var a=
$(this).val();if(null==a||""===a){if(a=$("#ui-datepicker-div").css("display"),!$(this).not(".datepicker, .wdatepicker, .calendarstart, .calendarend")||null==a||"none"==a)d(this.name,"notblank"),$(this).parent().children(".checkedArea").children(".notblank").show(),e($(this),this.name,"notblank")}else c(this.name,"notblank"),$(this).parent().children(".checkedArea").children(".notblank").hide(),e($(this),this.name,"notblank")});$('[rule*="minsize"]').focusout({},function(){var a=$(this).val(),b=0;
$(this).attr("rule").match(/minsize\[([0-9,]+)\]/)&&(b=RegExp.$1.split(",")[0]);null==a||""===a?(c(this.name,"minsize"),$(this).parent().children(".checkedArea").children(".minsize").hide()):b>a.length?(d(this.name,"minsize"),$(this).parent().children(".checkedArea").children(".minsize").show()):(c(this.name,"minsize"),$(this).parent().children(".checkedArea").children(".minsize").hide());e($(this),this.name,"minsize")});$('[rule*="digits"]').focusout({},function(){var a=$(this).val(),b="",f="",g=
0,h=0;a.match(/^[0-9]*\.[0-9]*$/)?(b=a.split(".")[0],f=a.split(".")[1]):a.match(/^[0-9]+$/)&&(b=a);$(this).attr("rule").match(/digits\[([0-9,]+)\]/)&&(h=RegExp.$1,g=h.split(",")[0],h=h.split(",")[1]);null==a||""===a?(c(this.name,"digits"),$(this).parent().children(".checkedArea").children(".digits").hide()):""===b&&""===f||void 0==b&&void 0==f?(d(this.name,"digits"),$(this).parent().children(".checkedArea").children(".digits").show()):g<b.length||h<f.length?(d(this.name,"digits"),$(this).parent().children(".checkedArea").children(".digits").show()):
(c(this.name,"digits"),$(this).parent().children(".checkedArea").children(".digits").hide());e($(this),this.name,"digits")});$('[rule~="ennumber"]').focusout(function(){var a=$(this).val(),b=/^[0-9]*$/;null==a||""===a?(c(this.name,"ennumber"),$(this).parent().children(".checkedArea").children(".ennumber").hide()):a.match(b)?(c(this.name,"ennumber"),$(this).parent().children(".checkedArea").children(".ennumber").hide()):(d(this.name,"ennumber"),$(this).parent().children(".checkedArea").children(".ennumber").show());
e($(this),this.name,"ennumber")});$('[rule~="enalphanumeric"]').focusout(function(){var a=$(this).val(),b=/^[0-9a-zA-Z]*$/;null==a||""===a?(c(this.name,"enalphanumeric"),$(this).parent().children(".checkedArea").children(".enalphanumeric").hide()):a.match(b)?(c(this.name,"enalphanumeric"),$(this).parent().children(".checkedArea").children(".enalphanumeric").hide()):(d(this.name,"enalphanumeric"),$(this).parent().children(".checkedArea").children(".enalphanumeric").show());e($(this),this.name,"enalphanumeric")});
$('[rule~="em"]').focusout(function(){var a=$(this).val(),b=/^[^ -~\uff61-\uff9f]*$/;null==a||""===a?(c(this.name,"em"),$(this).parent().children(".checkedArea").children(".em").hide()):a.match(b)?(c(this.name,"em"),$(this).parent().children(".checkedArea").children(".em").hide()):(d(this.name,"em"),$(this).parent().children(".checkedArea").children(".em").show());e($(this),this.name,"em")});$('[rule~="countrynamekana"]').focusout(function(){var a=$(this).val(),b=/^[\u3041-\u309f\u30fb\u30fc]*$/;
null==a||""===a?(c(this.name,"countrynamekana"),$(this).parent().children(".checkedArea").children(".countrynamekana").hide()):a.match(b)?(c(this.name,"countrynamekana"),$(this).parent().children(".checkedArea").children(".countrynamekana").hide()):(d(this.name,"countrynamekana"),$(this).parent().children(".checkedArea").children(".countrynamekana").show());e($(this),this.name,"countrynamekana")});$('[rule~="zip"]').focusout(function(){var a=$(this).val(),b=/^[0-9]{3}-[0-9]{4}$/;null==a||""===a?(c(this.name,
"zip"),$(this).parent().children(".checkedArea").children(".zip").hide()):a.match(b)?(c(this.name,"zip"),$(this).parent().children(".checkedArea").children(".zip").hide()):(d(this.name,"zip"),$(this).parent().children(".checkedArea").children(".zip").show());e($(this),this.name,"zip")});$('[rule~="tel"]').focusout(function(){var a=$(this).val(),b=/^[0-9\+\(\)-]*$/;null==a||""===a?(c(this.name,"tel"),$(this).parent().children(".checkedArea").children(".tel").hide()):a.match(b)&&30>=a.length?(c(this.name,
"tel"),$(this).parent().children(".checkedArea").children(".tel").hide()):(d(this.name,"tel"),$(this).parent().children(".checkedArea").children(".tel").show());e($(this),this.name,"tel")});$('[rule~="teladdednationtel"]').focusout(function(){var a=$(this).val(),b=/^[0-9\+\(\)-]*$/;null==a||""===a?(c(this.name,"teladdednationtel"),$(this).parent().children(".checkedArea").children(".teladdednationtel").hide()):a.match(b)&&24>=a.length?(c(this.name,"teladdednationtel"),$(this).parent().children(".checkedArea").children(".teladdednationtel").hide()):
(d(this.name,"teladdednationtel"),$(this).parent().children(".checkedArea").children(".teladdednationtel").show());e($(this),this.name,"teladdednationtel")});$('[rule~="fax"]').focusout(function(){var a=$(this).val(),b=/^[0-9\+\(\)-]*$/;null==a||""===a?(c(this.name,"fax"),$(this).parent().children(".checkedArea").children(".fax").hide()):a.match(b)&&30>=a.length?(c(this.name,"fax"),$(this).parent().children(".checkedArea").children(".fax").hide()):(d(this.name,"fax"),$(this).parent().children(".checkedArea").children(".fax").show());
e($(this),this.name,"fax")});$('[rule~="faxaddednationtel"]').focusout(function(){var a=$(this).val(),b=/^[0-9\+\(\)-]*$/;null==a||""===a?(c(this.name,"faxaddednationtel"),$(this).parent().children(".checkedArea").children(".faxaddednationtel").hide()):a.match(b)&&24>=a.length?(c(this.name,"faxaddednationtel"),$(this).parent().children(".checkedArea").children(".faxaddednationtel").hide()):(d(this.name,"faxaddednationtel"),$(this).parent().children(".checkedArea").children(".faxaddednationtel").show());
e($(this),this.name,"faxaddednationtel")});$('[rule~="passportnumber"]').focusout(function(){var a=$(this).val(),b=/^[a-zA-Z]{2}[0-9]{7}$/;null==a||""===a?(c(this.name,"passportnumber"),$(this).parent().children(".checkedArea").children(".passportnumber").hide()):a.match(b)?(c(this.name,"passportnumber"),$(this).parent().children(".checkedArea").children(".passportnumber").hide()):(d(this.name,"passportnumber"),$(this).parent().children(".checkedArea").children(".passportnumber").show());e($(this),
this.name,"passportnumber")});$('[rule~="date"]').focusout(function(){var a=$(this).val(),b=!1,a=dateFormatterYMD(a);null==a||""===a||j(a.split("/")[0],a.split("/")[1],a.split("/")[2])&&(b=!0);b?(d(this.name,"date"),$(this).parent().children(".checkedArea").children(".date").show()):(c(this.name,"date"),$(this).parent().children(".checkedArea").children(".date").hide(),$(this).val(a));e($(this),this.name,"date")});$('[rule~="pastday"]').focusout(function(){var a=$(this).val(),b=!1,a=dateFormatterYMD(a);
null==a||""===a||(j(a.split("/")[0],a.split("/")[1],a.split("/")[2])?b=!0:h("",a,1)||(b=!0));b?(d(this.name,"pastday"),$(this).parent().children(".checkedArea").children(".pastday").show()):(c(this.name,"pastday"),$(this).parent().children(".checkedArea").children(".pastday").hide(),$(this).val(a));e($(this),this.name,"pastday")});$('[rule~="password"]').focusout(function(){var a=$(this).val(),b=RegExp("^((?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\\+\\*/=\\.,:;`@!#\\$%\\?\\|~\\^\\(\\)\\[\\]\\{\\}_-]))[a-zA-Z0-9\\+\\*/=\\.,:;`@!#\\$%\\?\\|~\\^\\(\\)\\[\\]\\{\\}_-]{8,30}$");
null==a||""===a?(c(this.name,"password"),$(this).parent().children(".checkedArea").children(".password").hide()):a.match(b)?(c(this.name,"password"),$(this).parent().children(".checkedArea").children(".password").hide()):(d(this.name,"password"),$(this).parent().children(".checkedArea").children(".password").show());e($(this),this.name,"password")});$('[rule~="mailaddress"]').focusout(function(){var a=$(this).val(),b=/^[-+.\w]+@[-a-zA-Z0-9]+(\.[-a-zA-Z0-9]+)*\.[a-zA-Z]{2,15}$/;null==a||""===a?(c(this.name,
"mailaddress"),$(this).parent().children(".checkedArea").children(".mailaddress").hide()):a.match(b)&&254>=a.length?(c(this.name,"mailaddress"),$(this).parent().children(".checkedArea").children(".mailaddress").hide()):(d(this.name,"mailaddress"),$(this).parent().children(".checkedArea").children(".mailaddress").show());e($(this),this.name,"mailaddress")});$('[rule~="ipv4"]').focusout(function(){var a=$(this).val(),b=/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/,f=!0;if(null==a||""===a)f=!0;
else if(a.match(b)&&40>=a.length){var a=a.split("."),g;for(g in a)if(0>a[g]||255<a[g]){f=!1;break}}else f=!1;f?(c(this.name,"ipv4"),$(this).parent().children(".checkedArea").children(".ipv4").hide()):(d(this.name,"ipv4"),$(this).parent().children(".checkedArea").children(".ipv4").show());e($(this),this.name,"ipv4")});$('[rule~="url"]').focusout(function(){var a=$(this).val(),b=/^http(s)?:\/\/[!-~]*$/;null==a||""===a?(c(this.name,"url"),$(this).parent().children(".checkedArea").children(".url").hide()):
a.match(b)&&256>=a.length?(c(this.name,"url"),$(this).parent().children(".checkedArea").children(".url").hide()):(d(this.name,"url"),$(this).parent().children(".checkedArea").children(".url").show());e($(this),this.name,"url")});$('[rule~="filepath"]').focusout(function(){var a=$(this).val(),b=/^[ -~]*$/,f=/(\.\.\/|\/|\.\.\\)/;null==a||""===a?(c(this.name,"filepath"),$(this).parent().children(".checkedArea").children(".filepath").hide()):a.match(b)&&1024>=a.length?a.match(f)?(d(this.name,"filepath"),
$(this).parent().children(".checkedArea").children(".filepath").show()):(c(this.name,"filepath"),$(this).parent().children(".checkedArea").children(".filepath").hide()):(d(this.name,"filepath"),$(this).parent().children(".checkedArea").children(".filepath").show());e($(this),this.name,"filepath")});$('[rule~="filename"]').focusout(function(){var a=$(this).val(),b=/^[a-zA-Z0-9_\s.]*$/,f=/(\.\.\/|\/|\.\.\\)/;null==a||""===a?(c(this.name,"filename"),$(this).parent().children(".checkedArea").children(".filename").hide()):
a.match(b)?a.match(f)?(d(this.name,"filename"),$(this).parent().children(".checkedArea").children(".filename").show()):(c(this.name,"filename"),$(this).parent().children(".checkedArea").children(".filename").hide()):(d(this.name,"filename"),$(this).parent().children(".checkedArea").children(".filename").show());e($(this),this.name,"filename")});$('[rule~="birthday"]').focusout(function(){var a=$(this).val(),b=!1,a=dateFormatterYMD(a);if(!(null==a||""===a))if(j(a.split("/")[0],a.split("/")[1],a.split("/")[2]))b=
!0;else if(!h("",a,2)||!h("1900/01/01",a,4))b=!0;b?(d(this.name,"birthday"),$(this).parent().children(".checkedArea").children(".birthday").show()):(c(this.name,"birthday"),$(this).parent().children(".checkedArea").children(".birthday").hide(),$(this).val(a));e($(this),this.name,"birthday")});$('[rule~="enalphanumericsymbolsp"]').focusout(function(){var a=$(this).val(),b=/^[ -~]*$/;null==a||""===a?(c(this.name,"enalphanumericsymbolsp"),$(this).parent().children(".checkedArea").children(".enalphanumericsymbolsp").hide()):
a.match(b)?(c(this.name,"enalphanumericsymbolsp"),$(this).parent().children(".checkedArea").children(".enalphanumericsymbolsp").hide()):(d(this.name,"enalphanumericsymbolsp"),$(this).parent().children(".checkedArea").children(".enalphanumericsymbolsp").show());e($(this),this.name,"enalphanumericsymbolsp")});$('[rule~="bygone"]').focusout(function(){var a=$(this).val(),b=!1,a=dateFormatterYM(a);null==a||""===a||(j(a.split("/")[0],a.split("/")[1],"")?b=!0:h("",a+"/01",2)||(b=!0));b?(d(this.name,"bygone"),
$(this).parent().children(".checkedArea").children(".bygone").show()):(c(this.name,"bygone"),$(this).parent().children(".checkedArea").children(".bygone").hide(),$(this).val(a));e($(this),this.name,"bygone")});$('[rule~="pastdayincltoday"]').focusout(function(){var a=$(this).val(),b=!1,a=dateFormatterYMD(a);null==a||""===a||(j(a.split("/")[0],a.split("/")[1],a.split("/")[2])?b=!0:h("",a,2)||(b=!0));b?(d(this.name,"pastdayincltoday"),$(this).parent().children(".checkedArea").children(".pastdayincltoday").show()):
(c(this.name,"pastdayincltoday"),$(this).parent().children(".checkedArea").children(".pastdayincltoday").hide(),$(this).val(a));e($(this),this.name,"pastdayincltoday")});$('[rule~="year"]').focusout(function(){var a=$(this).val(),b=/^[0-9]{4}$/;null==a||""===a?(c(this.name,"year"),$(this).parent().children(".checkedArea").children(".year").hide()):a.match(b)&&1900<=Number(a)&&2100>=Number(a)?(c(this.name,"year"),$(this).parent().children(".checkedArea").children(".year").hide()):(d(this.name,"year"),
$(this).parent().children(".checkedArea").children(".year").show());e($(this),this.name,"year")});$("[rule*='max']").focusout(function(){var a=$(this).val(),b=0;$(this).attr("rule").match(/max\[([0-9,]+)\]/)&&(b=RegExp.$1.split(",")[0]);null==a||""===a?(c(this.name,"max"),$(this).parent().children(".checkedArea").children(".max").hide()):Number(b)<Number(a)?(d(this.name,"max"),$(this).parent().children(".checkedArea").children(".max").show()):(c(this.name,"max"),$(this).parent().children(".checkedArea").children(".max").hide());
e($(this),this.name,"max")});$("[rule*='minimum']").focusout(function(){var a=$(this).val(),b=0;$(this).attr("rule").match(/minimum\[([0-9,]+)\]/)&&(b=RegExp.$1.split(",")[0]);null==a||""===a?(c(this.name,"minimum"),$(this).parent().children(".checkedArea").children(".minimum").hide()):Number(b)>Number(a)?(d(this.name,"minimum"),$(this).parent().children(".checkedArea").children(".minimum").show()):(c(this.name,"minimum"),$(this).parent().children(".checkedArea").children(".minimum").hide());e($(this),
this.name,"minimum")});$('[rule*="range"]').focusout(function(){var a=$(this).val(),b=0,f=0;$(this).attr("rule").match(/range\[([0-9,]+)\]/)&&(f=RegExp.$1,b=f.split(",")[0],f=f.split(",")[1]);null==a||""===a?(c(this.name,"range"),$(this).parent().children(".checkedArea").children(".range").hide()):Number(a)<Number(b)||Number(f)<Number(a)?(d(this.name,"range"),$(this).parent().children(".checkedArea").children(".range").show()):(c(this.name,"range"),$(this).parent().children(".checkedArea").children(".range").hide());
e($(this),this.name,"range")});$('[rule~="enalphaupper"]').focusout(function(){var a=$(this).val(),b=/^[A-Z]*$/;null==a||""===a?(c(this.name,"enalphaupper"),$(this).parent().children(".checkedArea").children(".enalphaupper").hide()):a.match(b)?(c(this.name,"enalphaupper"),$(this).parent().children(".checkedArea").children(".enalphaupper").hide()):(d(this.name,"enalphaupper"),$(this).parent().children(".checkedArea").children(".enalphaupper").show());e($(this),this.name,"enalphaupper")});$('[rule~="enalphauppersp"]').focusout(function(){var a=
$(this).val(),b=/^[A-Z ]*$/;null==a||""===a?(c(this.name,"enalphauppersp"),$(this).parent().children(".checkedArea").children(".enalphauppersp").hide()):a.match(b)?(c(this.name,"enalphauppersp"),$(this).parent().children(".checkedArea").children(".enalphauppersp").hide()):(d(this.name,"enalphauppersp"),$(this).parent().children(".checkedArea").children(".enalphauppersp").show());e($(this),this.name,"enalphauppersp")});$('[rule~="passwordtabireg"]').focusout(function(){var a=$(this).val(),b=/^((?=.*[0-9])(?=.*[a-zA-Z]))[a-zA-Z0-9\+\*/=\.,:;`@!#\$%\?\|~\^\(\)\[\]\{\}_-]{8,30}$/;
null==a||""===a?(c(this.name,"passwordtabireg"),$(this).parent().children(".checkedArea").children(".passwordtabireg").hide()):a.match(b)?(c(this.name,"passwordtabireg"),$(this).parent().children(".checkedArea").children(".passwordtabireg").hide()):(d(this.name,"passwordtabireg"),$(this).parent().children(".checkedArea").children(".passwordtabireg").show());e($(this),this.name,"passwordtabireg")});$('[rule~="zairomaseimei"]').focusout(function(){var a=$(this).val(),b=/^[A-Z (),'/-]*$/;null==a||""===
a?(c(this.name,"zairomaseimei"),$(this).parent().children(".checkedArea").children(".zairomaseimei").hide()):a.match(b)?(c(this.name,"zairomaseimei"),$(this).parent().children(".checkedArea").children(".zairomaseimei").hide()):(d(this.name,"zairomaseimei"),$(this).parent().children(".checkedArea").children(".zairomaseimei").show());e($(this),this.name,"zairomaseimei")})});

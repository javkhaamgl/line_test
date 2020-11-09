$(function() {
  scrollToLink();
  initResizeHeaderEvent();

  $(window).on('resize', function(){
    var headerX = $('#header').innerHeight();
    $("#wrapper").css({
      'padding-top':headerX,
    });

    if($(this).width() < 750){
      $("#wrapper").css({
        'padding-top':'',
      });
    }
    //SP時メニュー展開状態からPCへ切り替え時の処理
    var duration = 100;
    if($(this).width() > 751 && $("#dropdownMenu").is(':visible')){
      $('#dropdownMenu').slideUp(duration);
      $('#menuIcon').fadeIn(duration);
      $('#closeMenuIcon').fadeOut(duration);
      isMenuOpened = false;
    }
  });

  var isMenuOpened = false;
  $('#menuBtn').click(function () {
    var duration = 100;
    if (isMenuOpened) {
      $('#dropdownMenu').slideUp(duration);
      $('#menuIcon').fadeIn(duration);
      $('#closeMenuIcon').fadeOut(duration);
      isMenuOpened = false;
    } else {
      $('#dropdownMenu').slideDown(duration);
      $('#menuIcon').fadeOut(duration);
      $('#closeMenuIcon').fadeIn(duration);
      isMenuOpened = true;
    }
  });

  $('#pageTop').click(function() {
    $("html, body").animate({scrollTop:0}, 300, 'swing');
  });

  //カレンダー表示datepicker
  $.datepicker.regional['ja'] = {
    showOn: "button",
    buttonImage: "./css/images/calender.png",
    buttonText: "カレンダーから選択",
    buttonImageOnly: !0,
    showButtonPanel: false,// ボタンパネルを表示
    gotoCurrent: true,// ボタンパネルに当日日付のボタン表示
    changeMonth: !0,// 月選択をプルダウン化
    changeYear: !0,// 年選択をプルダウン化
    yearRange:"c-20:c+10",//プルダウンの年表示の期間を設定
    minDate: "-100Y",
    closeText: "閉じる",
    prevText: "&#x3c;前",
    nextText: "次&#x3e;",
    currentText: "今日",
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
    dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
    dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
    weekHeader: "週",
    dateFormat: "yy/mm/dd",
    //firstDay: 0,
    isRTL: !1,
    showMonthAfterYear: !0,
    duration: "fast",
    yearSuffix: "年"
  };

  $.datepicker.setDefaults($.datepicker.regional['ja']);

  $(".datepicker").datepicker();

  initFormParts();

  var urlHash = location.hash;
  if(urlHash) {
    var headerX = $('#header').innerHeight();
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
      var target = $(urlHash);
      var position = target.offset().top - headerX;
      $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
  }
});

$(window).on("load",function(){
  var headerX = $('#header').innerHeight();
  $("#wrapper").css({
    'padding-top':headerX,
  });
});

function scrollToLink() {
  $('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    if (href != "#" && href != "") {
      var headerHeight = $('#header').height();
      var target = $(href);
      var position = target.offset().top-headerHeight;
      $("html, body").animate({scrollTop:position}, 300, 'swing');
      return false;
    }
  });
}

function initResizeHeaderEvent() {
  var header = $('#header');
  var headerInner = $('#header > .headerInner');

  var initialValues = function() {
    if ($('#menuBtn').is(':visible')) { return null; }
    var resizedHeaderHeight = $('#header').innerHeight();
    return {
      headerHeight          : header.innerHeight(),
      resizedHeaderHeight   : resizedHeaderHeight,
      headerInnerPaddingTop :  (resizedHeaderHeight - headerInner.height())*0.5,
      defaultinnerPaddingTop: headerInner.css('padding-top'),
      duration              : 120,
      smallHeaderMode       : false
    }
  }
  var values = initialValues();

  var resizeHeaderFn = function() {
    if ($('#menuBtn').is(':visible')) { return; }
    if (values == null) { values = initialValues(); }
    var scroll = $(document).scrollTop();
    if (scroll > values.headerHeight * 2) {
      if (!values.smallHeaderMode) {
        setTimeout(function() {
          //header.stop().animate({height:$('.headerInner').innerHeight()}, values.duration);
          headerInner.stop().animate({paddingTop:values.headerInnerPaddingTop}, values.duration);
        }, 50);
        values.smallHeaderMode = true;

        var headerX = $('#header').innerHeight();
        $("#wrapper").css({
          'padding-top':headerX,
        });
      }
    } else {
      if (values.smallHeaderMode) {
        setTimeout(function() {
          //header.stop().animate({height:$('.headerInner').innerHeight()}, values.duration);
          headerInner.stop().animate({paddingTop:values.defaultinnerPaddingTop}, values.duration);
        }, 50);
        values.smallHeaderMode = false;

        var headerX = $('#header').innerHeight();
        $("#wrapper").css({
          'padding-top':headerX,
        });
      }
    }
  };
  $(window).scroll(resizeHeaderFn);
  $(window).on('resize', resizeHeaderFn);
}

function initFormParts() {
  /* radio button */
  $('.radio input').change(function() {
    var name = $(this).attr('name');
    $('input[name="'+name+'"]').parents('label').removeClass('active');
    $(this).closest('label').addClass('active');
  });
  $('.checkbox input').change(function() {
    var label = $(this).closest('label');
    if ($(this).is(':checked')) {
      label.addClass('active');
    } else {
      label.removeClass('active');
    }
  });
}
/**
 * TOPページ.
 * 緊急お知らせ・通常お知らせ
 * json読み込み
 */
function newsjson(){
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://www.ezairyu.mofa.go.jp/html/news.json"
  })
  .then(
    function (data) {
      var target_id = $("#set_point");
      if(target_id.length){
        for(var i in data){
          var h = data[i].innertag1
            + data[i].titlename
            + data[i].maintext
            + data[i].innertag2 ;
          target_id.prepend(h);
        }
      }else{
        console.log("target_none");
      }
    },
    function () {
      console.log("json_error");
    }
  );
}
function noticejson(){
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://www.ezairyu.mofa.go.jp/html/notice_tabireg.json"
  })
  .then(
    function (data) {
      var target_id = $("#set_point");
      if(target_id.length){
        var k = "";
        for(var j in data){
          k +=  data[j].titlename + data[j].noticetext;
        }
        target_id.append("<div class='contentsInner'>" + k + "</div>");
      }else{
        console.log("target_notice_none");
      }
    },
    function () {
      console.log("json_notice_error");
    }
  );
}
function agreejson(){
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "static/tabireg/json/agree_tabireg.json"
  })
  .then(
    function (data) {

      
      var target_contents = $("#h2 + .contents > .contents_area > .inner");
      if(target_contents.length){
        var l = "";
        for(var m in data){
          l +=  data[m].innertag1 + data[m].titlehead + data[m].maintext + data[m].innertag2;
        }
        target_contents.append(l);
      }else{
        console.log("target_agree_none");
      }
    },
    function () {
      console.log("json_agree_error");
    }
  );
}

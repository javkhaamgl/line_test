/* ------------------------------------------------------------ */
/* 入力制限を行うjsファイル. */
/* ------------------------------------------------------------ */
;(function($){
$(function () {

    $("[with]").off(".inputlimit")

    /* ローマ字姓名_旅行者情報. */
    $("[with='seimei']")
        .off(".inputlimit.seimei")
        /*
        .on("keydown.inputlimit.seimei", function(e){
            let k = e.keyCode;
            let str = String.fromCharCode(k);
            if(!(str.match(/[a-zA-Z\(\),'\/\-]/) || e.shiftKey || (37 <= k && k <= 40) || k === 8 || k === 46)){
                return false;
            }
        })
        */
        .on("blur.inputlimit.seimei", function(){
            var inputVal = $(this).val();
            inputVal = inputVal.toUpperCase().replace(/[Ａ-Ｚａ-ｚ，’\／\－\（\）]/g, function(s) {
                return String.fromCharCode(s.charCodeAt(0) - 65248);
            }).replace(/[　]/g," ").replace(/[^a-zA-Z\(\)/,'\/\-\s]/g,"");

            $(this).val(inputVal);
            $(this).trigger('focusout');
            //$(this).val($(this).val().replace(/[^a-zA-Z\(\),'\/\-]/g,""));
        })

    /* ローマ字姓名_同行者情報 */
    $("[with='doukou']")
        .off(".inputlimit.doukou")
        /*
        .on("keydown.inputlimit.seimei", function(e){
            let k = e.keyCode;
            let str = String.fromCharCode(k);
            if(!(str.match(/[a-zA-Z\(\),'\/\-]/) || e.shiftKey || (37 <= k && k <= 40) || k === 8 || k === 46)){
                return false;
            }
        })
        */
        .on("blur.inputlimit.doukou", function(){
            var inputVal = $(this).val();
            inputVal = inputVal.toUpperCase().replace(/[Ａ-Ｚａ-ｚ，’\／\－\（\）]/g, function(s) {
                return String.fromCharCode(s.charCodeAt(0) - 65248);
            }).replace(/[　]/g," ").replace(/[^a-zA-Z\(\)/,'\/\-\s]/g,"");

            $(this).val(inputVal);
            $(this).trigger('focusout');
//            $(this).val($(this).val().replace(/[^a-zA-Z\(\),'\/\-\s]/g,""));
        })

    /* 旅券番号 */
    $("[with='pass']")
        .off(".inputlimit.pass")
        /*
        .on("keydown.inputlimit.pass", function(e){
            let k = e.keyCode;
            let str = String.fromCharCode(k);
            if(!(str.match(/[a-zA-Z\(\),'\/\-]/) || e.shiftKey || (37 <= k && k <= 40) || k === 8 || k === 46)){
                return false;
            }
        })
        */
        .on("blur.inputlimit.pass", function(){
            var inputVal = $(this).val();
            inputVal = inputVal.toUpperCase().replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
                return String.fromCharCode(s.charCodeAt(0) - 65248);
            }).replace(/[^0-9a-zA-Z]/g,"");

            $(this).val(inputVal);
            $(this).trigger('focusout');

//            $(this).val($(this).val().replace(/[^0-9a-zA-Z]/g,""));
        })

    /* メールアドレス */
    $("[with='mail']")
        .off(".inputlimit.mail")
        /*
        .on("keydown.inputlimit.mail", function(e){
            let k = e.keyCode;
            let str = String.fromCharCode(k);
            if(!(str.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/) || (37 <= k && k <= 40) || k === 8 || k === 46)){
                return false;
            }
        })
        */
        .on("blur.inputlimit.mail", function(){
            var inputVal = $(this).val();
            inputVal = inputVal.toLowerCase().replace(/[Ａ-Ｚａ-ｚ０-９\＠\．\＿\％\＋\－]/g, function(s) {
                return String.fromCharCode(s.charCodeAt(0) - 65248);
            }).replace(/[^a-z0-9\@\.\_\%\+\-]/g,"");

            $(this).val(inputVal);
            $(this).trigger('focusout');
//            $(this).val($(this).val().replace(/[^a-z0-9\@\.\_\%\+\-]/g,""));
        })


    /* 電話番号 */
    $("[with='tel']")
        .off(".inputlimit.tel")
        /*
        .on("keydown.inputlimit.tel", function(e){
            let k = e.keyCode;
            let str = String.fromCharCode(k);
            if(!(str.match(/[0-9\(\)\+\-]/) || e.shiftKey || (37 <= k && k <= 40) || k === 8 || k === 46)){
                return false;
            }
        })
        */
        .on("blur.inputlimit.tel", function(){
            var inputVal = $(this).val();
            inputVal = inputVal.replace(/[０-９\＋\－\（\）]/g, function(s) {
                return String.fromCharCode(s.charCodeAt(0) - 65248);
            }).replace(/[^0-9\(\)\+\-]/g,"");

            $(this).val(inputVal);
            $(this).trigger('focusout');
//            $(this).val($(this).val().replace(/[^0-9\(\)\+\-]/g,""));
        })

    /* ツアー参加者数 */
    $("[with='num']")
        .off(".inputlimit.num")
        /*
        .on("keydown.inputlimit.num", function(e){
            let k = e.keyCode;
            let str = String.fromCharCode(k);
            if(!(str.match(/[0-9\(\)\+\-]/) || e.shiftKey || (37 <= k && k <= 40) || k === 8 || k === 46)){
                return false;
            }
        })
        */
        .on("blur.inputlimit.num", function(){
            var inputVal = $(this).val();
            inputVal = inputVal.replace(/[０-９\＋\－\（\）]/g, function(s) {
                return String.fromCharCode(s.charCodeAt(0) - 65248);
            }).replace(/[^0-9\(\)\+\-]/g,"");

            $(this).val(inputVal);
            $(this).trigger('focusout');

//            $(this).val($(this).val().replace(/[^0-9]/g,""));
        })

});
})(jQuery);

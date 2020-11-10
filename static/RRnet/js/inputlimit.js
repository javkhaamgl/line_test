/* ------------------------------------------------------------ */
/* 蜈･蜉帛宛髯舌ｒ陦後≧js繝輔ぃ繧､繝ｫ. */
/* ------------------------------------------------------------ */
;
(function($) {
        $(function() {

                $("[with]").off(".inputlimit")

                /* 繝ｭ繝ｼ繝槫ｭ怜ｧ灘錐 */
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
                    .on("blur.inputlimit.seimei", function() {
                            var inputVal = $(this).val();
                            inputVal = inputVal.toUpperCase().replace(/[�｡-�ｺ��-�夲ｼ娯兔�十�構��\�云/g, function(s) {
                                return String.fromCharCode(s.charCodeAt(0) - 65248);
                            }).replace(/[縲]/g, " ").replace(/[^a-zA-Z\(\)/,'\/\-\s]/g, "");

                        $(this).val(inputVal); $(this).trigger('focusout');
                    })

            /* 譌�虻逡ｪ蜿ｷ */
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
            .on("blur.inputlimit.pass", function() {

                    var inputVal = $(this).val();
                    inputVal = inputVal.toUpperCase().replace(/[�｡-�ｺ��-�夲ｼ�-�兢/g, function(s) {
                        return String.fromCharCode(s.charCodeAt(0) - 65248);
                    }).replace(/[^0-9a-zA-Z]/g, "");

                $(this).val(inputVal); $(this).trigger('focusout');
            })

        /* 繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ */
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
            .on("blur.inputlimit.mail", function() {
                    var inputVal = $(this).val();
                    inputVal = inputVal.toLowerCase().replace(/[�｡-�ｺ��-�夲ｼ�-�兔��\�蚕�ｿ\��\�欺�江/g, function(s) {
                        return String.fromCharCode(s.charCodeAt(0) - 65248);
                    }).replace(/[^a-z0-9\@\.\_\%\+\-]/g, "");

                $(this).val(inputVal); $(this).trigger('focusout');
            })

    /* 髮ｻ隧ｱ逡ｪ蜿ｷ */
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
    .on("blur.inputlimit.tel", function() {
            var inputVal = $(this).val();
            inputVal = inputVal.replace(/[��-�兔�欺�構��\�云/g, function(s) {
                return String.fromCharCode(s.charCodeAt(0) - 65248);
            }).replace(/[^0-9\(\)\+\-]/g, "");

        $(this).val(inputVal); $(this).trigger('focusout');
    })

/* 繝�い繝ｼ蜿ょ刈閠�焚 */
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
    .on("blur.inputlimit.num", function() {
            var inputVal = $(this).val();
            inputVal = inputVal.replace(/[��-�兢/g, function(s) {
                return String.fromCharCode(s.charCodeAt(0) - 65248);
            }).replace(/[^0-9]/g, "");

        $(this).val(inputVal); $(this).trigger('focusout');
    })

});
})(jQuery);
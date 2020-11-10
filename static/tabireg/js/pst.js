'use strict';

/** デザインチーム提供のjs始め レビュー、統合後コメント削除 */
// Create new HTML5 elements ===================================================
// -----------------------------------------------------------------------------
// This script should load before any others. We want the new elements to be
// parsed before pretty much anything happens.
// Plus, IE does not behave otherwise. The cost of being progressive...
// -----------------------------------------------------------------------------
document.createElement("article");
document.createElement("aside");
document.createElement("audio");
document.createElement("canvas");
document.createElement("command");
document.createElement("datalist");
document.createElement("details");
document.createElement("embed");
document.createElement("figcaption");
document.createElement("figure");
document.createElement("footer");
document.createElement("header");
document.createElement("hgroup");
document.createElement("keygen");
document.createElement("mark");
document.createElement("meter");
document.createElement("nav");
document.createElement("output");
document.createElement("progress");
document.createElement("rp");
document.createElement("rt");
document.createElement("ruby");
document.createElement("section");
document.createElement("source");
document.createElement("summary");
document.createElement("time");
document.createElement("video");

$(function() {
    scrollToLink();
    initResizeHeaderEvent();

    $(window).on('resize', function() {
        var headerX = $('#header').innerHeight();
        $("#wrapper").css({
            'padding-top' : headerX,
        });

        if ($(this).width() < 750) {
            $("#wrapper").css({
                'padding-top' : '',
            });
        }
        // SP時メニュー展開状態からPCへ切り替え時の処理
        var duration = 100;
        if ($(this).width() > 751 && $("#dropdownMenu").is(':visible')) {
            $('#dropdownMenu').slideUp(duration);
            $('#menuIcon').fadeIn(duration);
            $('#closeMenuIcon').fadeOut(duration);
            isMenuOpened = false;
        }
    });

    var isMenuOpened = false;
    $('#menuBtn').click(function() {
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
        $("html, body").animate({
            scrollTop : 0
        }, 300, 'swing');
    });

    // カレンダー表示datepicker
    $.datepicker.regional['ja'] = {
            showOn : "button",
            buttonImage : "./css/images/calender.png",
            buttonText : "カレンダーから選択",
            buttonImageOnly : !0,
            showButtonPanel : false,// ボタンパネルを表示
            gotoCurrent : true,// ボタンパネルに当日日付のボタン表示
            changeMonth : !0,// 月選択をプルダウン化
            changeYear : !0,// 年選択をプルダウン化
            yearRange : "c-20:c+10",// プルダウンの年表示の期間を設定
            minDate : "-100Y",
            closeText : "閉じる",
            prevText : "&#x3c;前",
            nextText : "次&#x3e;",
            currentText : "今日",
            monthNames : [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
            monthNamesShort : [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
            dayNames : [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ],
            dayNamesShort : [ "日", "月", "火", "水", "木", "金", "土" ],
            dayNamesMin : [ "日", "月", "火", "水", "木", "金", "土" ],
            weekHeader : "週",
            dateFormat : "yy/mm/dd",
            // firstDay: 0,
            isRTL : !1,
            showMonthAfterYear : !0,
            duration : "fast",
            yearSuffix : "年"
    };

    $.datepicker.setDefaults($.datepicker.regional['ja']);

    $(".datepicker").datepicker();

    initFormParts();
});

$(window).on("load", function() {
    var headerX = $('#header').innerHeight();
    $("#wrapper").css({
        'padding-top' : headerX,
    });
});

function scrollToLink() {
    $('a[href^="#"]').click(function() {
        var href = $(this).attr("href");
        if (href != "#" && href != "") {
            var headerHeight = $('#header').height();
            var target = $(href);
            var position = target.offset().top - headerHeight;
            $("html, body").animate({
                scrollTop : position
            }, 300, 'swing');
            return false;
        }
    });
}

function initResizeHeaderEvent() {
    var header = $('#header');
    var headerInner = $('#header > .headerInner');

    var initialValues = function() {
        if ($('#menuBtn').is(':visible')) {
            return null;
        }
        var resizedHeaderHeight = $('#header').innerHeight();
        return {
                headerHeight : header.innerHeight(),
                resizedHeaderHeight : resizedHeaderHeight,
                headerInnerPaddingTop : (resizedHeaderHeight - headerInner.height()) * 0.5,
                defaultinnerPaddingTop : headerInner.css('padding-top'),
                duration : 120,
                smallHeaderMode : false
        }
    }
    var values = initialValues();

    var resizeHeaderFn = function() {
        if ($('#menuBtn').is(':visible')) {
            return;
        }
        if (values == null) {
            values = initialValues();
        }
        var scroll = $(document).scrollTop();
        if (scroll > values.headerHeight * 2) {
            if (!values.smallHeaderMode) {
                setTimeout(function() {
                    // header.stop().animate({height:$('.headerInner').innerHeight()}, values.duration);
                    headerInner.stop().animate({
                        paddingTop : values.headerInnerPaddingTop
                    }, values.duration);
                }, 50);
                values.smallHeaderMode = true;

                var headerX = $('#header').innerHeight();
                $("#wrapper").css({
                    'padding-top' : headerX,
                });
            }
        } else {
            if (values.smallHeaderMode) {
                setTimeout(function() {
                    // header.stop().animate({height:$('.headerInner').innerHeight()}, values.duration);
                    headerInner.stop().animate({
                        paddingTop : values.defaultinnerPaddingTop
                    }, values.duration);
                }, 50);
                values.smallHeaderMode = false;

                var headerX = $('#header').innerHeight();
                $("#wrapper").css({
                    'padding-top' : headerX,
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
        $('input[name="' + name + '"]').parents('label').removeClass('active');
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

/** デザインチーム提供のjs終わり統合後コメント削除 */

/** 簡易登録js始め 統一後コメント削除 */

var chiikiJp_Asia = 'アジア';
var chiikiJp_Oceania = '大洋州';
var chiikiJp_America = '北米';
var chiikiJp_latinAmerica = '中南米';
var chiikiJp_Europe = 'ヨーロッパ';
var chiikiJp_Mideast = '中東';
var chiikiJp_Africa = 'アフリカ';
var asia = 'asia';
var oceania = 'oceania';
var n_america = 'n_america';
var latinamerica = 'latinamerica';
var europe = 'europe';
var mideast = 'mideast';
var africa = 'africa';

// 追加メールアドレスカウント用
var addMailCount = 1;

/**
 * たびレジ共通処理.
 * <P>
 * たびレジ内で共通で使用する処理。
 * </P>
 *
 */
var Tabireg = (function($) {
    var TRIM = /^\s+|\s+$/g;
    return {

            /**
             * キャッシュ(SessionStorage)から値を取得する.
             * <P>
             * キャッシュが存在しない、またはサポートされていない場合はnullを返す。
             * </P>
             *
             * @param {string}
             *            key キャッシュのキー値
             * @returns {string} キャッシュされている文字列
             *
             */
            getCache : function(key) {
                if (!sessionStorage) {
                    return null;
                }
                return sessionStorage.getItem(key);
            },

            /**
             * キャッシュ(SessionStorage)に値を設定する.
             * <P>
             * サポートされていない場合は何もしない。
             * </P>
             *
             * @param {string}
             *            key キャッシュのキー値
             * @param {string}
             *            item キャッシュするオブジェクト
             *
             */
            setCache : function(key, item) {
                if (!sessionStorage) {
                    return;
                }
                if ((typeof item) !== "string") {
                    sessionStorage.setItem(key, JSON.stringify(item));
                } else {
                    sessionStorage.setItem(key, item);
                }
            },

            /**
             * 簡易登録 国リストを取得する.
             * <P>
             * 国リストを取得し、コールバックを実行する。<BR>
             * キャッシュ(sessionStorage)にある場合はキャッシュから取得する。
             * </P>
             *
             * @parma {function} handler 成功時の処理, args = [国リスト]
             * @parma {function} errorHandler エラー時の処理, args = [エラー情報]
             *
             */
            getNations : function(handler, errorHandler) {
                // sessionStorageにキャッシュされている場合はキャッシュから返す
                var nations = Tabireg.getCache("nations");
                if (nations) {
                    handler(JSON.parse(nations));
                    return;
                }
                $.getJSON(path("/static/html/simpleNation.json")).done(function(nations) {
                    Tabireg.setCache("nations", nations);
                    handler(nations);
                }).fail(function(errorData) {
                    if (errorHandler) {
                        errorHandler(errorData);
                    }
                });
            },

            /**
             * 簡易登録 全て選択(全エリアの全国)チェックボックスを生成する.
             * <P>
             * 全て選択(全エリアの全国)チェックボックスdivタグ文字列を生成する。
             * </P>
             *
             * @returns {string} divタグ文字列
             *
             */
            createCheckAllAreaDiv : function() {
                return "<div class='all-area-check'>"
                                + "<input type='checkbox' id='all-area' name='all-area'  class='allArea' value='on'>"
                                + "<label class='allArea-item' for='all-area'>世界の国・地域をすべて選択<span class='check ml20'>"
                                + "</span></label></div>";
            },

            /**
             * 簡易登録 地域タグ文字列を生成する.
             * <P>
             * 各地域のdtタグ文字列を生成する。
             * </P>
             *
             * @param {string}
             *            area 属性値
             * @param {string}
             *            chiikiJp 地域文字列
             * @returns {string} dtタグ文字列
             *
             */
            createDt : function(area, chiikiJp) {
                var dtHtml;
                if (area == asia) {
                    dtHtml = "<dt class='checkbox area_" + area
                                    + " accordion-head icon-arrow accordion-open icon-arrow-02-t' rel='" + area
                                    + "' id='" + area + "-label'>" + chiikiJp + "</dt>";
                } else {
                    dtHtml = "</div><dt class='checkbox area_" + area
                                    + " accordion-head icon-arrow icon-arrow-02-b' rel='" + area + "' id='" + area
                                    + "-label'>" + chiikiJp + "</dt>";
                }
                return dtHtml;
            },

            /**
             * 簡易登録 全て選択(任意エリア内の全国)チェックボックスを生成する.
             * <P>
             * 全て選択(任意エリア内の全国)チェックボックスDivタグ文字列を生成する。
             * </P>
             *
             * @param {string}
             *            area name属性値
             * @param {string}
             *            chiikiJp checkboxのラベル
             * @returns {string} divタグ文字列
             *
             */
            createCheckAllDiv : function(area, chiikiJp) {
                return "<div class='all-check'><input type='checkbox' id='" + area + "' name='" + area
                                + "' value='' class='all'><label for='" + area + "' class='area-label' >" + chiikiJp
                                + "の国・地域をすべて選択</label></div>";
            },

            /**
             * 簡易登録 テーブル整理用divタグを生成する.
             * <P>
             * 地域間のテーブル整理用divタグを生成する。
             * </P>
             *
             * @returns {string} divタグ文字列
             *
             */
            creatCelearfixDiv : function() {
                return "<div class='clearfix mb15'></div>";
            },

            /**
             * 簡易登録 国・地域タグ文字列を生成する.
             * <P>
             * 国・地域一覧のタグ文字列を生成する。
             * </P>
             *
             * @param {string}
             *            area class属性値
             * @param {string}
             *            nationCode value属性値
             * @param {string}
             *            nationJp checkboxのラベル
             * @param {object}
             *            selectNations 選択済み国(地域)コード
             * @returns {string} divタグ文字列
             *
             */
            createDiv : function(area, nationCode, nationJp, selectNations) {
                var strCount = nationJp.length;
                if (selectNations != null) {
                    for (var i = 0; i < selectNations.length; i++) {
                        if (nationCode == selectNations[i]) {

                            if (strCount >= 13) {
                                return "<div class='area_item'><input type='checkbox' name='deliveryCountries' id='"
                                                + nationCode + "' value='" + nationCode + "' class='" + area
                                                + "'  checked='checked'>" + "<label class='country-item active' for='"
                                                + nationCode + "'>" + nationJp
                                                + "<span class='check ml20'></span></label></div>";
                            }
                            return "<div class='area_item'><input type='checkbox' name='deliveryCountries' id='"
                                            + nationCode + "' value='" + nationCode + "' class='" + area
                                            + "' checked='checked'>"
                                            + "<label class='country-item small-item  active' for='" + nationCode
                                            + "'>" + nationJp + "<span class='check ml20'></span></label></div>";
                        }
                    }
                }
                if (strCount >= 13) {
                    return "<div class='area_item'><input type='checkbox' name='deliveryCountries' id='" + nationCode
                                    + "' value='" + nationCode + "' class='" + area
                                    + "'><label class='country-item' for='" + nationCode + "'>" + nationJp
                                    + "<span class='check ml20'></span></label></div>";

                }
                return "<div class='area_item'><input type='checkbox' name='deliveryCountries' id='" + nationCode
                                + "' value='" + nationCode + "' class='" + area
                                + "'><label class='country-item small-item' for='" + nationCode + "'>" + nationJp
                                + "<span class='check ml20'></span></label></div>";
            },
    };
})(jQuery);

/**
 * たびレジ簡易登録 登録/変更/削除画面 初期表示処理。
 *
 * @param {object}
 *            labels 各パラメータ
 * @param {object}
 *            functions 各パラメータ
 * @param {object}
 *            selectNations 選択済み国(地域)コード
 */
Tabireg.initSimpleRegist = function(selectNations) {

    // 画面表示時、追加メールアドレスグループの表示を制御する
    addMailCount = 0;
    var addMailAddressList = [];
    // メール1～10の入力情報をチェック
    for (var i = 1; i <= 10; i++) {
        // 入力情報がある場合
        if ($('#txtAddMailAddress' + i).val() != "") {
            // 追加メールアドレス表示カウントを追加
            addMailCount++;
            // 配列に入力情報を格納
            addMailAddressList.push($('#txtAddMailAddress' + i).val());
            // 入力欄の文字列をクリア
            $('#txtAddMailAddress' + i).val("")
        }
        $('#addMailAddressBox' + i).css("display", "none");
    }

    // 追加メールアドレスの入力情報を詰めなおす
    for (var i = 1; i <= addMailCount; i++) {
        // メール1から順に配列内の入力情報を設定
        $('#txtAddMailAddress' + i).val(addMailAddressList[i - 1]);
        // 追加メールアドレスを表示する
        $('#addMailAddressBox' + i).css("display", "inline");
    }
    // 入力情報が0件の場合
    if (addMailCount == 0) {
        // メール1のみ表示
        $('#addMailAddressBox1').css("display", "inline");
    } else if (addMailCount >= 10) {
        $("#mailAdd").css("display", "none");
    }

    /**
     * 簡易登録 地域の文字列判定を行う.
     * <P>
     * 地域の文字列を判定し、ローマ字を返す。
     * </P>
     *
     * @param {String}
     *            chiikiJp 地域(日本語名)
     * @returns {String} 地域文字列(ローマ字)
     *
     */
    var judgeArea = function(chiikiJp) {
        var returnArea;
        switch (chiikiJp) {
            case chiikiJp_Asia:
                returnArea = asia;
                break;
            case chiikiJp_Oceania:
                returnArea = oceania;
                break;
            case chiikiJp_America:
                returnArea = n_america;
                break;
            case chiikiJp_latinAmerica:
                returnArea = latinamerica;
                break;
            case chiikiJp_Europe:
                returnArea = europe;
                break;
            case chiikiJp_Mideast:
                returnArea = mideast;
                break;
            case chiikiJp_Africa:
                returnArea = africa;
                break;
        }
        return returnArea;
    }

    /**
     * 簡易登録 国、地域チェックボックスリスト生成.
     * <P>
     * 国、地域チェックボックスリストを生成する。
     * </P>
     *
     * @param {String}
     *            nations 国コード
     * @returns {String} html文字列
     *
     */
    var createNationCheckBoxes = function(nations) {
        var html = "";
        // 変更画面表示時以外の場合のみキャッシュを取得
        if (selectNations === null) {
            html = Tabireg.getCache("simpleNationsHtml");
            if (html) {
                return html;
            }
        }
        html += Tabireg.createCheckAllAreaDiv();
        // 国または地域リストHTML作成
        for ( var chiikiJp in nations) {
            var area = judgeArea(chiikiJp);
            html += Tabireg.creatCelearfixDiv();
            html += Tabireg.createDt(area, chiikiJp);
            html += "<dd>";
            // 実装
            html += Tabireg.createCheckAllDiv(area, chiikiJp);
            html += Tabireg.creatCelearfixDiv();
            $(nations[chiikiJp]).each(function() {
                html += Tabireg.createDiv(area, this.nationCode, this.nationJp, selectNations);
            });
            html += "</dd>";
        }
        html = html.replace('null', '');
        // 変更画面表示時以外の場合のみキャッシュする
        if (selectNations === null) {
            Tabireg.setCache("simpleNationsHtml", html);
        }
        return html;
    };

    /**
     * 簡易登録 国、地域チェックボックスリスト生成処理呼び出し.
     * <P>
     * 国、地域チェックボックスリストを生成処理の呼び出しを行う。
     * </P>
     *
     * @param {String}
     *            nations 国コード
     *
     */
    Tabireg.getNations(function(nations) {
        // キャッシュされていたらキャッシュから取得。
        var simpleNationsHtml = createNationCheckBoxes(nations);
        $('dl').html(simpleNationsHtml);
        $('dl').after("<script>Tabireg.initCountryList();</script>");
    });

    /**
     * 簡易登録 クリアボタン押下時イベント.
     * <P>
     * クリアボタン押下時、画面項目をすべてクリアする。
     * </P>
     *
     */
    $('#btnClear').on('click', function() {
        // メールアドレス
        $("input[id='mailAddress']").val("");
        $("input[id='mailAddress']").prev('div').css("display", "");
        $("input[id='mailAddress']").focus();
        $("input[id='mailAddress']").blur();

        // 追加メールアドレス
        for (var i = 1; i <= 10; i++) {
            if (i == 1) {
                // 入力情報とエラーメッセージをクリア
                $('#txtAddMailAddress' + i).val("");
                $('#txtAddMailAddress' + i).focus();
                $('#txtAddMailAddress' + i).blur();

            } else {
                $('#addMailAddressBox' + i).css("display", "none");
                $('#txtAddMailAddress' + i).val("");
                $('#txtAddMailAddress' + i).focus();
                $('#txtAddMailAddress' + i).blur();

            }
        }
        // 追加ボタン
        $('#mailAdd').css("display", "inline");
        addMailCount = 1; // 追加メールアドレス表示件数

        // ラジオボタン
        $('.radio input').prop('checked', false);
        $('.radio input').parents('label').removeClass('active');

        // チェックボタン
        $("input[type='checkbox']").prop('checked', false);
        $("input[type='checkbox']").parents('label').removeClass('active');

        // 配信期限 年
        $('#deliveryEndYear').val("");
        $('#deliveryEndYear').prev('div').css("display", "");
        $('#deliveryEndYear').focus();
        $('#deliveryEndYear').blur();

        // 配信期限 月
        $('#deliveryEndMonth').val("01");
        // 配信期限 日
        $('#deliveryEndDay').val("01");

        // 配信国
        $("input[class='country-item']").prev('input').prop('checked', false);
        $("input[class='allAea']").prop('checked', false);
        $("input[class='allAea']").parents('label').removeClass('active');
        $("input[class='all']").prop('checked', false);
        $("input[class='all']").parents('label').removeClass('active');
    });

    /**
     * 簡易登録 追加メールアドレス追加ボタン押下時イベント.
     * <P>
     * 追加メールアドレス追加押下時、追加メールアドレスを1グループ追加する。
     * </P>
     *
     */
    $("#mailAdd").on("click", function() {

        addMailCount = 0;
        // 表示している追加メールアドレスの数をカウントする
        for (var i = 1; i <= 10; i++) {
            if ($('#addMailAddressBox' + i).css('display') != 'none') {
                addMailCount++;
            }
        }

        addMailCount++;
        $("#addMailAddressBox" + addMailCount).css("display", "inline");

        if (addMailCount >= 10) {
            $("#mailAdd").css("display", "none");
        }
    });

};

/**
 * たびレジ簡易登録 登録/変更画面の国リスト初期化処理.
 * <P>
 * たびレジ簡易登録 登録/変更画面の国リスト初期化処理を行う。
 * </P>
 *
 */
Tabireg.initCountryList = function() {

    /**
     * 簡易登録 チェックボックス 世界の国・地域を全て選択.
     * <P>
     * チェックボックス 世界の国・地域を全て選択を押下時、<BR>
     * 地域を全て選択と国・地域一覧のチェック状態を変更する。
     * </P>
     *
     */
    $('.allArea').on('click', function() {
        $('.area_item input').prop('checked', this.checked);
        $('.all-check input').prop('checked', this.checked);
    });

    /**
     * 簡易登録 チェックボックス ○○の国・地域を全て選択.
     * <P>
     * チェックボックス ○○の国・地域を全て選択を押下時、<BR>
     * 各地域の国・地域一覧のチェック状態を変更する。
     * </P>
     *
     */
    $('.all').on('click', function() {
        var areaCheck = $(this).prop("name");
        $('input[class=' + areaCheck + ']').prop('checked', this.checked);
        if ($(this).prop('checked') == false && $('.all-area-check input').prop('checked') == true) {
            $('.all-area-check input').prop('checked', false);
        }
    });

    /**
     * 簡易登録 チェックボックス 国・地域選択.
     * <P>
     * チェックボックス 国・地域選択を押下時、<BR>
     * 世界の国・地域を全て選択と○○の国・地域を全て選択のチェック状態を変更する。
     * </P>
     *
     */
    $('.area_item input').on('click', function() {
        var areaCheck = $(this).prop("class");

        if ($(this).prop('checked') == false && $('.all-area-check input').prop('checked') == true) {
            $('.all-area-check input').prop('checked', false);
        }

        if ($(this).prop('checked') == false && $('.all-check input[id=' + areaCheck + ']').prop('checked') == true) {
            $('.all-check input[id=' + areaCheck + ']').prop('checked', false);
        }
    });

    /**
     * 簡易登録 国・地域一覧背景色 レスポンシブ対応.
     * <P>
     * レスポンシブ対応 国名リストの行ごとに背景色を変更。
     * </P>
     *
     */
    function areaItemBG() {
        $('dl.accordion-container dd').each(function() {
            $(this).find(".area_item").each(function(index) {
                if (Math.floor(index / 3) % 2 == 0) {
                    $(this).addClass("bg_3col");
                };
                if (Math.floor(index / 2) % 2 == 0) {
                    $(this).addClass("bg_2col");
                };
            });
        });
    };

    // 地域内にある国の数を変数に代入
    var numMideast = $('input.mideast').length;
    var numAsia = $('input.asia').length;
    var numOceania = $('input.oceania').length;
    var numEurope = $('input.europe').length;
    var numAfrica = $('input.africa').length;
    var numN_america = $('input.n_america').length;
    var numLatinamerica = $('input.latinamerica').length;

    /**
     * 簡易登録 国・地域一覧 行調整.
     * <P>
     * 行の色を追加するために空のdivを追加する関数。<BR>
     * inputに地域ごとのclass名をつけて、地域内の国の数を数え、変数に代入。<BR>
     * PC版の場合は国の数を3で割って、余り1なら空のdivを2つ追加 余り1なら空div1つ追加。<BR>
     * スマホ版は、2で割って余り1なら空div1つ追加。<BR>
     * divに背景用のクラスを追加する関数を実行。<BR>
     * この関数を、ページ読込時とウィンドウサイズのリサイズ時に実行。
     * </P>
     *
     * @param {Number}
     *            num 地域ごとの国・地域数
     * @param {String}
     *            areaName 地域名
     * @param {Number}
     *            w 画面横幅
     * @param {Number}
     *            x スマホ用横幅
     *
     */
    function areaItemAdd(num, areaName, w, x) {
        $(function() {

            if (w >= x) {// widthが768以上(PC用)
                if ((num % 3) == 1) {// 3で割って余り1なら、div2つ追加
                    $('input.' + areaName)
                                    .parent('label')
                                    .parent('div.area_item')
                                    .filter(':last')
                                    .after(
                                                    '<div class="area_item country_blank"></div><div class="area_item country_blank"></div>');
                    areaItemBG();// 追加したdivに背景色用のクラスを追加
                } else if ((num % 3) == 2) {// 3で割って余り2なら、div1つ追加
                    $('input.' + areaName).parent('label').parent('div.area_item').filter(':last').after(
                                    '<div class="area_item country_blank"></div>');
                    areaItemBG();// 追加したdivに背景色用のクラスを追加
                }
            } else {// widthが768以下(スマホ用)
                if ((num % 2) == 1) {// 2で割って余り1なら、divを1つ追加
                    $('input.' + areaName).parent('label').parent('div.area_item').filter(':last').after(
                                    '<div class="area_item country_blank"></div>');
                    areaItemBG();
                }
            }
        });
    }

    /**
     * 簡易登録 国・地域チェックボックスマス調整関数呼び出し.
     * <P>
     * 国・地域チェックボックスマス調整関数呼び出しを行う。＜BR> 国名のマスの数を調整する関数 地域が増えた場合はここに追加。
     * </P>
     *
     */
    function areaItemAdds() {
        areaItemAdd(numMideast, 'mideast', w, x);
        areaItemAdd(numAsia, 'asia', w, x);
        areaItemAdd(numOceania, 'oceania', w, x);
        areaItemAdd(numEurope, 'europe', w, x);
        areaItemAdd(numAfrica, 'africa', w, x);
        areaItemAdd(numN_america, 'n_america', w, x);
        areaItemAdd(numLatinamerica, 'latinamerica', w, x);
    }

    /**
     * 簡易登録 アコーディオン.
     * <P>
     * 開閉連動型アコーディオンの関数。
     * </P>
     *
     */
    function accordion() {
        $('.accordion-container').find('dd').hide().addClass("accordion-hide");
        $('.accordion-container').find('dt').addClass('icon-arrow-02-b');

        $('.accordion-head').click(function() {
            $(this).siblings('dt').removeClass('icon-arrow-02-t').addClass('icon-arrow-02-b');
            if ($(this).next('dd').hasClass('accordion-hide')) {
                $(this).next('dd').slideDown(700).removeClass('accordion-hide').show();
                $(this).addClass("icon-arrow-02-t").removeClass("icon-arrow-02-b");
            } else {
                $(this).next('dd').slideUp(700).addClass('accordion-hide');
                $(this).removeClass("icon-arrow-02-t").addClass("icon-arrow-02-b");
            }
            $(this).next('dd').siblings('dd').addClass('accordion-hide').hide();
        });
    };

    /**
     * 簡易登録 アコーディオン.
     * <P>
     * 開閉連動型アコーディオンをオフにする関数。
     * </P>
     *
     */
    function accordionOff() {
        $('.accordion-container').find('dd').removeClass("accordion-hide");// アコーディオンを無効化するため、クラスを削除
        $('.accordion-container').find('dt').removeClass("accordion-hide").removeClass("icon-arrow-02-t").removeClass(
                        "icon-arrow-02-b")
        $('dd').show(); // ddを全てdisplay:blockに
        $('.accordion-head').off(); // .accordion-headのイベントをすべてオフ
    };

    /* 画面幅が768以下の場合アコーディオン関数を実行 */
    var w = $(window).width();// 画面横幅を取得
    var x = 768 - 17; // アコーディオン関数を実行する画面横幅から、スクロールバーの幅を17pxと仮定して引く
    var timer = false;
    if (w <= x) { // 画面横幅が768以下の場合アコーディオンにする
        accordion();// 関数化したアコーディオンを実行
        areaItemAdds();// 国名のマスの数を調整する関数
    } else {
        areaItemAdds();// 国名のマスの数を調整する関数
    }

    /* 画面の横幅をリサイズした場合の、アコーディオンON/OFF */
    var timer = false;
    var winWidth = $(window).width();// 横幅を変数に入れる
    var winWidth_resized;// リサイズ後の横幅を入れる変数

    /**
     * 簡易登録 リサイズイベント.
     * <P>
     * 国・地域一覧調整用にリサイズイベントに処理をバインドする。
     * </P>
     *
     */
    $(window).on(
                    "resize",
                    function() {
                        // リサイズ後の放置時間が指定ミリ秒以下なら何もしない(リサイズ中に何度も処理が行われるのを防ぐ)
                        if (timer !== false) {
                            clearTimeout(timer);
                        }
                        // 放置時間が指定ミリ秒以上なので処理を実行
                        timer = setTimeout(function() {
                            winWidth_resized = $(window).width();// リサイズ後のウインドウの幅を取得
                            if ((winWidth != winWidth_resized && winWidth >= x)
                                            && (winWidth != winWidth_resized && winWidth_resized <= x)) {// 1.ウィンドウの元の幅が768以上で、リサイズ後が768以下になったら、アコーディオン開始
                                accordion();// 関数化したアコーディオンを実行
                                $('div.country_blank').remove(); // リサイズされるたび、余白用divをすべて削除
                                areaItemAdd(numMideast, 'mideast', winWidth_resized, x);
                                areaItemAdd(numAsia, 'asia', winWidth_resized, x);
                                areaItemAdd(numOceania, 'oceania', winWidth_resized, x);
                                areaItemAdd(numEurope, 'europe', winWidth_resized, x);
                                areaItemAdd(numAfrica, 'africa', winWidth_resized, x);
                                areaItemAdd(numN_america, 'n_america', winWidth_resized, x);
                                areaItemAdd(numLatinamerica, 'latinamerica', winWidth_resized, x);
                            } else if ((winWidth != winWidth_resized && winWidth <= x)
                                            && (winWidth != winWidth_resized && winWidth_resized >= x)) {// 2.ウィンドウの元の幅が768以下で、リサイズ後が768以上だったら、アコーディオン解除
                                accordionOff();// 関数化したアコーディオン解除
                                $('div.country_blank').remove(); // リサイズされるたび、余白用divをすべて削除
                                areaItemAdd(numMideast, 'mideast', winWidth_resized, x);
                                areaItemAdd(numAsia, 'asia', winWidth_resized, x);
                                areaItemAdd(numOceania, 'oceania', winWidth_resized, x);
                                areaItemAdd(numEurope, 'europe', winWidth_resized, x);
                                areaItemAdd(numAfrica, 'africa', winWidth_resized, x);
                                areaItemAdd(numN_america, 'n_america', winWidth_resized, x);
                                areaItemAdd(numLatinamerica, 'latinamerica', winWidth_resized, x);
                            }
                            winWidth = $(window).width();// 次回以降使えるようにリサイズ後の幅をウインドウ幅に設定する
                        }, 400);
                    });

};

/**
 * 簡易登録 追加メールアドレスグループの削除処理を行う.
 * <P>
 * 削除ボタン押下時にテキストエリア、削除ボタンを削除する。
 * </P>
 *
 * @param {Number}
 *            count 追加メールアドレスの表示数
 *
 */
function delMailAddress(count) {

    addMailCount = 0;
    // 表示している追加メールアドレスの数をカウントする
    for (var i = 1; i <= 10; i++) {
        if ($('#addMailAddressBox' + i).css('display') != 'none') {
            addMailCount++;
        }
    }

    // 追加メールアドレスの入力値を調整
    for (var i = count; i < addMailCount; i++) {
        var index = i + 1;
        var address = $('#txtAddMailAddress' + index).val();
        $('#txtAddMailAddress' + i).val(address);
    }

    // 入力情報とエラーメッセージをクリア
    if ($('#txtAddMailAddress' + addMailCount).val() != "") {
        $('#txtAddMailAddress' + addMailCount).val("");
        $('#txtAddMailAddress' + addMailCount).focus();
        $('#txtAddMailAddress' + addMailCount).blur();
    }
    $('#txtAddMailAddress' + count).focus();
    $('#txtAddMailAddress' + count).blur();

    // 表示中の最後の追加メールアドレスグループを非表示にする
    $("#addMailAddressBox" + addMailCount).css("display", "none");

    addMailCount--;
    $("#mailAdd").css("display", "inline");
};

/**
 * 簡易登録 配信期限の非活性処理を行う.
 * <P>
 * 配信期限を非設定にした際、配信期限年月日を非活性にする。
 * </P>
 *
 */
function disBtn() {
    $('#deliveryEndYear, #deliveryEndMonth, #deliveryEndDay').prop("disabled", true);
    $('#deliveryEndYear').prev('div').css("display", "none");
};

/**
 * 簡易登録 配信期限の活性処理を行う.
 * <P>
 * 配信期限を設定にした際、配信期限年月日を活性にする。
 * </P>
 *
 */
function openBtn() {
    $('#deliveryEndYear, #deliveryEndMonth, #deliveryEndDay').prop("disabled", false);
};

/** 簡易登録js終わり 統一後コメント削除 */

/** 旅行情報js * */

Tabireg.travel = function() {

    /**
     * 携帯電話 「携行しない／未定」チェック.
     * <P>
     * チェックボックス「携行しない／未定」押下時に、携帯電話情報入力欄の活性/非活性を変更する。
     * </P>
     *
     */
    $('#mobileNoCarry').on('click', function() {

        // チェックを外した場合
        if ($(this).prop('checked') == false) {
            $('#nationTel1, #nationTel2, #nationTel3').prop("disabled", false);
            $('#mobileTel1, #mobileTel2, #mobileTel3').prop("disabled", false);
            $('#smsFlag span, #smsFlag2 span, #smsFlag3 span').removeClass('checkDisabled');

            // チェックした場合
        } else {
            $('#nationTel1, #nationTel2, #nationTel3').val('');
            $('#mobileTel1, #mobileTel2, #mobileTel3').val("");
            $('#smsFlag input, #smsFlag2 input, smsFlag3 input').prop('checked', false);
            $('#smsFlag input, #smsFlag2 input, #smsFlag3 input').parent('label').removeClass('active');
            $('#smsFlag span, #smsFlag2 span, #smsFlag3 span').addClass('checkDisabled');
            $('#smsFlag, #smsFlag2, #smsFlag3').addClass('notActive');
            $('#nationTel1, #nationTel2, #nationTel3').prop("disabled", true);
            $('#mobileTel1, #mobileTel2, #mobileTel3').prop("disabled", true);
            $('#smsFlag input, #smsFlag2 input, #smsFlag3 input').prop("disabled", true);
            $('#mobileTel1').prev('div').css("display", "none");
            $('#mobileTel2').prev('div').css("display", "none");
            $('#mobileTel3').prev('div').css("display", "none");
        }
    });

    /**
     * SMSフラグ1の活性/非活性化.
     * <P>
     * 携帯電話1のフォーカスを外した時、SMSフラグ1を活性/非活性を変更する。
     * </P>
     *
     */
    $('#mobileTel1').change(function() {

        var str = $(this).val();

        // 携帯電話1に文字が入力されている場合
        if (str.length >= 1) {
            $('#smsFlag input').prop('disabled', false);
            $('#smsFlag span').removeClass('checkDisabled');
            $('#smsFlag').removeClass('notActive');

            // 携帯電話1が未入力の場合
        } else {
            $('#smsFlag input').prop('checked', false);
            $('#smsFlag input').parent('label').removeClass('active');
            $('#smsFlag input').prop('disabled', true);
            $('#smsFlag span').addClass('checkDisabled');
            $('#smsFlag').addClass('notActive');
        }
    });

    /**
     * SMSフラグ2の活性/非活性化.
     * <P>
     * 携帯電話2のフォーカスを外した時、SMSフラグ2を活性/非活性を変更する。
     * </P>
     *
     */
    $('#mobileTel2').change(function() {

        var str = $(this).val();

        // 携帯電話2に文字が入力されている場合
        if (str.length >= 1) {
            $('#smsFlag2 input').prop('disabled', false);
            $('#smsFlag2 span').removeClass('checkDisabled');
            $('#smsFlag2').removeClass('notActive');

            // 携帯電話2が未入力の場合
        } else {
            $('#smsFlag2 input').prop('checked', false);
            $('#smsFlag2 input').parent('label').removeClass('active');
            $('#smsFlag2 input').prop('disabled', true);
            $('#smsFlag2 span').addClass('checkDisabled');
            $('#smsFlag2').addClass('notActive');
        }
    });

    /**
     * SMSフラグ3の活性/非活性化.
     * <P>
     * 携帯電話3のフォーカスを外した時、SMSフラグ3を活性/非活性を変更する。
     * </P>
     *
     */
    $('#mobileTel3').change(function() {

        var str = $(this).val();

        // 携帯電話3に文字が入力されている場合
        if (str.length >= 1) {
            $('#smsFlag3 input').prop('disabled', false);
            $('#smsFlag3 span').removeClass('checkDisabled');
            $('#smsFlag3').removeClass('notActive');

            // 携帯電話3が未入力の場合
        } else {
            $('#smsFlag3 input').prop('checked', false);
            $('#smsFlag3 input').parent('label').removeClass('active');
            $('#smsFlag3 input').prop('disabled', true);
            $('#smsFlag3 span').addClass('checkDisabled');
            $('#smsFlag3').addClass('notActive');
        }
    });

    /**
     * ラジオボタン ツアー会社利用.
     * <P>
     * ラジオボタン ツアー会社「利用しない」押下時に、<BR>
     * テキストボックス「会社名」を非活性化する。
     * </P>
     *
     */
    $('#notUseTravelType').on('click', function() {
        $('#travelAgent').val('');
        $('#travelAgent').prop("disabled", true);
    });

    /**
     * ラジオボタン ツアー会社利用.
     * <P>
     * ラジオボタン ツアー会社「利用する」押下時に、<BR>
     * テキストボックス「会社名」を活性化する。
     * </P>
     *
     */
    $('#useTravelType').on('click', function() {
        $('#travelAgent').prop("disabled", false);
    });

    /**
     * 旅行予定 インフォメーションの表示/非表示.
     * <P>
     * インフォメーションの文言の表示/非表示を切り替える。
     * </P>
     *
     */
    $('.informationOnOff').on('click', function() {
        var count = $(this).attr("id");
        count = count.slice(17);

        if ($('#informetion' + count).css('display') != 'none') {
            $('#informetion' + count).css("display", "none");
        } else {
            $('#informetion' + count).css("display", "");
        }
    });

    $('.infoOnOffButton').on('click', function() {
        var count = $(this).attr("id");
        count = count.slice(15);

        if ($('#infoOnOff' + count).css('display') != 'none') {
            $('#infoOnOff' + count).css("display", "none");
        } else {
            $('#infoOnOff' + count).css("display", "");
        }
    });

    /**
     * 同行者 携帯番号「携行しない／未定」チェック.
     * <P>
     * チェックボックス「携行しない／未定」押下時に、携帯電話情報入力欄の活性/非活性を変更する。
     * </P>
     *
     */
    $('.memberNoCarryOnOff').on('click', function() {
        var count = $(this).attr("id");
        count = count.slice(13);

        // チェックを外した場合
        if ($(this).prop('checked') == false) {
            $('#memberNationTel' + count).prop("disabled", false);
            $('#memberTel' + count).prop("disabled", false);

            // チェックした場合
        } else {
            $('#memberNationTel' + count).val('');
            $('#memberNationTel' + count).prop("disabled", true);
            $('#memberTel' + count).val("");
            $('#memberTel' + count).prop("disabled", true);
            $('#memberTel' + count).prev('div').css("display", "none");
        }
    });

    /**
     * 同行者 メールアドレス「登録しない」チェック.
     * <P>
     * チェックボックス「～登録しない」押下時に、メールアドレス入力欄の活性/非活性を変更する。
     * </P>
     *
     */
    $('.memberNoReceiveOnOff').on('click', function() {
        var count = $(this).attr("id");
        count = count.slice(15);

        // チェックを外した場合
        if ($(this).prop('checked') == false) {
            $('#memberMailAddress' + count).prop("disabled", false);

            // チェックした場合
        } else {
            $('#memberMailAddress' + count).val("");
            $('#memberMailAddress' + count).prop("disabled", true);
            $('#memberMailAddress' + count).prev('div').css("display", "none");
        }
    });

}
function blurName($name) {
}

function blurSei($sei) {
}

function blurMei($mei) {
}

function blurMemberName($memberName) {
}

/**
 * たびレジ入力画面 ローマ字rule設定
 */
    $(document).on('focusout', "#romaSei", function() {
        checkOrrNetRomaSeiMei(this);
    });

    $(document).on('focusout', "#romaMei", function() {
        checkOrrNetRomaSeiMei(this);
    });

    $(document).on('focusout', "#memberName1", function() {
        checkOrrNetRomaSeiMei(this);
    });

    $(document).on('focusout', "#memberName2", function() {
        checkOrrNetRomaSeiMei(this);
    });

    $(document).on('focusout', "#memberName3", function() {
        checkOrrNetRomaSeiMei(this);
    });

    $(document).on('focusout', "#memberName4", function() {
        checkOrrNetRomaSeiMei(this);
    });

    $(document).on('focusout', "#memberName5", function() {
        checkOrrNetRomaSeiMei(this);
    });

    $(document).on('focusout', "#memberName6", function() {
        checkOrrNetRomaSeiMei(this);
    });

    $(document).on('focusout', "#memberName7", function() {
        checkOrrNetRomaSeiMei(this);
    });

    $(document).on('focusout', "#memberName8", function() {
        checkOrrNetRomaSeiMei(this);
    });

    $(document).on('focusout', "#memberName9", function() {
        checkOrrNetRomaSeiMei(this);
    });

    $(document).on('focusout', "#memberName10", function() {
        checkOrrNetRomaSeiMei(this);
    });

    /**
     * ローマ字設定ルール.
     * 英大文字 (),'/-\s
     */
    function checkOrrNetRomaSeiMei(target) {
        var val = $(target).val();
        if ( val !== null ){
            val = val.trim().toUpperCase();
            $(target).val(val);
        }
        var ruleName = "orrnetromaseimei";
        var reg = new RegExp("^[A-Z \(\),'/\-]*$");

        // 未入力
        if (val == null || val === '') {
        // 条件一致
        } else if (val.match(reg)) {
            $(target).parent().find('.orrnetromaseimei').hide();
            $(target).removeClass('inputerror');
        // 条件不一致
        } else {
            $(target).parent().find('.orrnetromaseimei').show();
            $(target).addClass('inputerror');
        }
     }
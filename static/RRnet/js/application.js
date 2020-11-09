$(function() {
    scrollToLink();
    initResizeHeaderEvent();

    $(window).on('resize', function() {
        var headerX = $('#header').innerHeight();
        $("#wrapper").css({
            'padding-top': headerX,
        });

        if ($(this).width() < 750) {
            $("#wrapper").css({
                'padding-top': '',
            });
        }
        //SP譎ゅΓ繝九Η繝ｼ螻暮幕迥ｶ諷九°繧臼C縺ｸ蛻�ｊ譖ｿ縺域凾縺ｮ蜃ｦ逅�
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
        $("html, body").animate({ scrollTop: 0 }, 300, 'swing');
    });

    initFormParts();
});

$(window).on("load", function() {
    var headerX = $('#header').innerHeight();
    $("#wrapper").css({
        'padding-top': headerX,
    });

    var url = $(location).attr('href');
    if (url.indexOf("#") != -1) {
        var anchor = url.split("#");
        var target = $('#' + anchor[anchor.length - 1]);
        if (target.length) {
            var pos = Math.floor(target.offset().top) - headerX;
            $("html, body").scrollTop(pos);
        }
    }
});

function scrollToLink() {
    $('a[href^="#"]').click(function() {
        var href = $(this).attr("href");
        if (href != "#" && href != "") {
            var headerHeight = $('#header').height();
            var target = $(href);
            var position = target.offset().top - headerHeight;
            $("html, body").animate({ scrollTop: position }, 300, 'swing');
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
            headerHeight: header.height(),
            resizedHeaderHeight: resizedHeaderHeight,
            headerInnerPaddingTop: (resizedHeaderHeight - headerInner.height()) * 0.5,
            defaultinnerPaddingTop: headerInner.css('padding-top'),
            duration: 120,
            smallHeaderMode: false
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
                    //header.stop().animate({height:values.resizedHeaderHeight}, values.duration);
                    headerInner.stop().animate({ paddingTop: values.headerInnerPaddingTop }, values.duration);
                }, 50);
                values.smallHeaderMode = true;

                var headerX = $('#header').innerHeight();
                $("#wrapper").css({
                    'padding-top': headerX,
                });
            }
        } else {
            if (values.smallHeaderMode) {
                setTimeout(function() {
                    //header.stop().animate({height:values.headerHeight}, values.duration);
                    headerInner.stop().animate({ paddingTop: values.defaultinnerPaddingTop }, values.duration);
                }, 50);
                values.smallHeaderMode = false;

                var headerX = $('#header').innerHeight();
                $("#wrapper").css({
                    'padding-top': headerX,
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
/**
 * TOP繝壹�繧ｸ.
 * 邱頑･縺顔衍繧峨○繝ｻ騾壼ｸｸ縺顔衍繧峨○
 * json隱ｭ縺ｿ霎ｼ縺ｿ
 */
function newsjson() {
    $.ajax({
            type: "GET",
            dataType: "json",
            url: "/static/html/news.json"
        })
        .then(
            function(data) {
                var target_id = $("#set_point");
                if (target_id.length) {
                    for (var i in data) {
                        var h = data[i].innertag1 +
                            data[i].titlename +
                            data[i].maintext +
                            data[i].innertag2;
                        target_id.prepend(h);
                    }
                } else {
                    console.log("target_none");
                }
            },
            function() {
                console.log("json_error");
            }
        );
}

function noticejson() {
    $.ajax({
            type: "GET",
            dataType: "json",
            url: "/static/html/notice_orr.json"
        })
        .then(
            function(data) {
                var target_id = $("#set_point");
                if (target_id.length) {
                    var k = "";
                    for (var j in data) {
                        k += data[j].titlename + data[j].noticetext;
                    }
                    target_id.append("<div class='contentsInner'>" + k + "</div>");
                } else {
                    console.log("target_notice_none");
                }
            },
            function() {
                console.log("json_notice_error");
            }
        );
}

function agreejson() {
    $.ajax({
            type: "GET",
            dataType: "json",
            url: "/static/html/agree_orr.json"
        })
        .then(
            function(data) {
                var target_contents = $("#agreetable > tbody");
                if (target_contents.length) {
                    var l = "";
                    for (var m in data) {
                        l += data[m].innertag1 + data[m].titlehead + data[m].maintext + data[m].innertag2;
                    }
                    target_contents.append(l);
                } else {
                    console.log("target_agree_none");
                }
            },
            function() {
                console.log("json_agree_error");
            }
        );
}
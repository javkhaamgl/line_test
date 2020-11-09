$(function() {
  $('.tab > li').click(function() {
    var index = $(this).data('tab');
    $('.tab > li').removeClass('active');
    $(this).addClass('active');
    $('.mainSection').hide();
    $('#tabContent_'+index).show();
  });

  $('#pageTop').click(function() {
    $("html, body").animate({scrollTop:0}, 300, 'swing');
  });
});

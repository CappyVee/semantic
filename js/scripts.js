$('.ui.dropdown')
  .dropdown();

$(".item1").click(function() {
    $('html,body').animate({
        scrollTop: $(".main2").offset().top},
        'slow');
});
$(".item2").click(function() {
    $('html,body').animate({
        scrollTop: $(".main3").offset().top},
        'slow');
});
$(".item3").click(function() {
    $('html,body').animate({
        scrollTop: $(".main4").offset().top},
        'slow');
});
$(".item4").click(function() {
    $('html,body').animate({
        scrollTop: $(".main5").offset().top},
        'slow');
});
$(".home").click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});

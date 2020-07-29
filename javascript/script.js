// ロード完了後のフェードイン
$("head").append(
    '<style>body{display: none;}'
);
$(window).on("load",function(){
    $('body').delay(600).fadeIn("slow");
});

// スクロールトップのボタン
$(function(){
    $('#scroll_top').click(function(){
        $('html,body').animate({scrollTop:0},'slow');
        return false;
    });
});

// フェードイン　スクロール（jQuery）
$(function(){
    $(window).on("scroll",function(){
        $('.wrapper').each(function(index,el) {
            if( $(window).scrollTop() > ($(el).offset().top-$(window).height()/2)){
                $(el).addClass('is_over');
            }
        });
    });
});

$(document).ready(function() {
  $('.drawer').drawer();
});

/*===========================================================*/
//swiper
/*===========================================================*/

$('.slider').slick({
  autoplay: false,
  dots: true,//こんなのあるんだ！
  slidesToShow: 3,
  slidesToScroll: 1,
  // 横幅がバラバラなスライドにするか [初期値:false]
  variableWidth: true,
  // スライドをループさせるか [初期値:true]
  infinite: true,
	arrows: false,  // ←この階層　なるほど！jsで消えるのか
});

/*===========================================================*/
//slideToggle
/*===========================================================*/
jQuery('.qa-box__q').on('click', function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-box__icon').toggleClass( 'is-open' );

});

//google form


/*===========================================================*/
//scroll
/*========================================================*/

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // .headerクラスがついた要素の高さを取得
  let header = jQuery(".header").innerHeight();//これ
  let speed = 300;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  // トップからの距離からヘッダー分の高さを引く
  let position = jQuery(target).offset().top - header;
  // その分だけ移動すればヘッダーと被りません
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});


$(function(){

  $("#intro p").hide().fadeIn(6000)
  //setTimeout(introAnime,2000);//2秒経った時にintroAnimeを実行
  $("#intro").on("click",introAnime)//クリックしたらintroAnimeを実行

  function introAnime(){//jqueryでフェードアウト、終わったらcontentAnime実行
    $("#intro").fadeOut(3000,contentAnime);
  }

  function contentAnime(){
    setTimeout(backAnime,500);//0.3秒後backAnime実行
    setTimeout(personAnime,2500);//2秒後personAnime実行
    setTimeout(carAnime,3000);//2秒後carAnime実行
    setTimeout(foodAnime,5000);//3秒後foodAnime実行
  }
  
  //以下のアニメはCSSでやってみる
  //ここではanimeクラスつけるだけ
  function backAnime(){
    $("#back").addClass("anime")
  }

  function personAnime(){
    $("#person").addClass("anime")
  }

  function carAnime(){
    $("#car").addClass("anime")
  }

  function foodAnime(){
    $("#food").addClass("anime")
  }

})
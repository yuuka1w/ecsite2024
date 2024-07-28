---
layout: ../../layouts/goodsLayout.astro
title: アルバム（1st Love）
text: なにわ男子初のアルバム「1st Love」。ピュアでキュートな、彼らの真骨頂とも言えるキラキラアイドル王道の音楽を存分にご堪能ください！
thumbnail: 1stLove_cd.png
price: 4500
state: false,
id: JACA-5994
colors: ピンク
maker: Storm Labels
---

 <div class="img-switcher">
      <img id="mainImg" class="main-img" src="/04_ecsite/images/1stLove_cd.png" alt="アルバム(1st Love)" />
      <div class="thumbnails">
        <button class="thumb-btn active"><img class="thumb-img" src="/04_ecsite/images/1stLove_cd.png" alt="アルバム(1st Love)" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/1stLove_cd2.png" alt="アルバム(1st Love)" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/1stLove_cd4.png" alt="アルバム(1st Love)" /></button>
      </div>
    </div>

<!-- <div id="mainImg" class="main-img">

![アルバム(1st Love)](/04_ecsite/images/1stLove_cd.webp)

</div>

<div class="thumbnails">

<button class="thumb-btn active">

<div class=" thumb-img">

![アルバム(1st Love)](/04_ecsite/images/1stLove_cd.webp)

</div>

</button>

<button class="thumb-btn  ">

<div class="thumb-img">

![アルバム(1st Love)](/04_ecsite/images/1stLove_cd.webp)

</div>

</button>

<button class="thumb-btn  ">

<div class="thumb-img">

![アルバム(1st Love)](/04_ecsite/images/1stLove_cd.webp)

</div>

</button>

</div> -->

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const mainImg = document.getElementById('mainImg');
      const thumbBtns = document.querySelectorAll('.thumb-btn');

      thumbBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          thumbBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          mainImg.src = btn.querySelector('img').src;
        });
      });
    });
  </script>

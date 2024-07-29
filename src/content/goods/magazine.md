---
layout: ../../layouts/goodsLayout.astro
title: Hanako 2022年 3月号
text: スイーツ大賞審査会はじまるよ!
thumbnail: hanako.png
price: 890
state: false,
id: 4710158-2
colors: 赤色
maker: マガジンハウス
---

<div class="img-switcher">
      <img id="mainImg" class="main-img" src="/04_ecsite/images/hanako.png" alt="アルバム(1st Love)" />
      <div class="thumbnails">
        <button class="thumb-btn active"><img class="thumb-img" src="/04_ecsite/images/hanako.png" alt="Hanako 2022年 3月号" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/hanako2.png" alt="Hanako 2022年 3月号" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/hanako3.png" alt="Hanako 2022年 3月号" /></button>
      </div>
    </div>

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

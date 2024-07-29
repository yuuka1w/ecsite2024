---
layout: ../../layouts/goodsLayout.astro
title: ペンライト(1st Love)
text: 「なにわ男子 Debut Tour 2022 1st Love」オフィシャルグッズ
thumbnail: 1stLove_penlight_green.png
price: 1200
state: false,
id: 4710158-2
colors: 緑色
maker: merch company
---

<div class="img-switcher">
      <img id="mainImg" class="main-img" src="/04_ecsite/images/1stLove_penlight_green.png" alt="anan 2024年 7/3号" />
      <div class="thumbnails">
        <button class="thumb-btn active"><img class="thumb-img" src="/04_ecsite/images/1stLove_penlight_green.png" alt="anan 2024年 7/3号" /></button>
        <button class="thumb-btn active"><img class="thumb-img" src="/04_ecsite/images/1stLove_penlight_btn.png" alt="anan 2024年 7/3号" /></button>
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

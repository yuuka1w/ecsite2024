---
layout: ../../layouts/goodsLayout.astro
title: ペンライト(POPMALL)
text: 「なにわ男子 Debut Tour 2023 POPMALL」オフィシャルグッズ
thumbnail: popmall_penlight_green.png
price: 1200
state: false,
id: 4710158-2
colors: 緑色
maker: merch company
---

<div class="img-switcher">
      <img id="mainImg" class="main-img" src="/04_ecsite/images/popmall_penlight_green.png" alt="ペンライト(POPMALL)" />
      <div class="thumbnails">
        <button class="thumb-btn active"><img class="thumb-img" src="/04_ecsite/images/popmall_penlight_green.png" alt="ペンライト(POPMALL)" /></button>
        <button class="thumb-btn active"><img class="thumb-img" src="/04_ecsite/images/popmall_penlight_btn.png" alt="ペンライト(POPMALL)" /></button>
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

---
layout: ../../layouts/goodsLayout.astro
title: bis 2022年 07月号
text: Up your game 新しいステージへ
thumbnail: bis.png
price: 730
state: false,
id: 4710158-2
colors: 赤色
maker: 光文社
---

<div class="img-switcher">
      <img id="mainImg" class="main-img" src="/04_ecsite/images/bis.png" alt="bis 2022年 07月号" />
      <div class="thumbnails">
        <button class="thumb-btn active"><img class="thumb-img" src="/04_ecsite/images/bis.png" alt="bis 2022年 07月号" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/bis2.png" alt="bis 2022年 07月号" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/bis3.png" alt="bis 2022年 07月号" /></button>
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

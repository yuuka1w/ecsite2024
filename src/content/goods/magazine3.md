---
layout: ../../layouts/goodsLayout.astro
title: anan 2024年 7/3号
text: 身体に宿る記憶。
thumbnail: anan2-1.png
price: 750
state: false,
id: 4710158-2
colors: 赤色
maker: マガジンハウス
---

<div class="img-switcher">
      <img id="mainImg" class="main-img" src="/04_ecsite/images/anan2-1.png" alt="anan 2024年 7/3号" />
      <div class="thumbnails">
        <button class="thumb-btn active"><img class="thumb-img" src="/04_ecsite/images/anan2-1.png" alt="anan 2024年 7/3号" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/anan2-2.png" alt="anan 2024年 7/3号" /></button>
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

---
layout: ../../layouts/goodsLayout.astro
title: アルバム（POPMALL）
text: なにわ男子がOPENする“POPMALL”での1コマ・1コマを想像しながら、その世界観を存分にお楽しみ下さい。
thumbnail: popmall_cd.png
price: 3200
state: false,
id: JACA-6075
colors: 赤色
maker: Storm Labels
---

 <div class="img-switcher">
      <img id="mainImg" class="main-img" src="/04_ecsite/images/popmall_cd.png" alt="アルバム(1st Love)" />
      <div class="thumbnails">
        <button class="thumb-btn active"><img class="thumb-img" src="/04_ecsite/images/popmall_cd.png" alt="アルバム（POPMALL）" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/popmall_cd2.png" alt="アルバム（POPMALL）" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/popmall_cd3.png" alt="アルバム（POPMALL）)" /></button>
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

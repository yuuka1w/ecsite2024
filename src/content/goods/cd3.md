---
layout: ../../layouts/goodsLayout.astro
title: アルバム（+Alpha）
text: これまでのアルバムで表現してきた"煌めき"や"POP"を凝縮した、なにわ男子らしさ全開のアルバムリード曲「Alpha」をはじめ、様々なジャンルの楽曲にも挑戦し、なにわ男子の音楽に幅がプラスされた作品に。
thumbnail: alpha_cd.png
price: 3960
state: false,
id: LCCA-6131
colors: 赤色
maker: Storm Labels
---

<div class="img-switcher">
      <img id="mainImg" class="main-img" src="/04_ecsite/images/alpha_cd.png" alt="アルバム(1st Love)" />
      <div class="thumbnails">
        <button class="thumb-btn active"><img class="thumb-img" src="/04_ecsite/images/alpha_cd.png" alt="アルバム（+Alpha）" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/alpha_cd2.png" alt="アルバム（+Alpha）" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/alpha_cd3.png" alt="アルバム（+Alpha）" /></button>
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

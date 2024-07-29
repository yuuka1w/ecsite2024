---
layout: ../../layouts/goodsLayout.astro
title: シングル（初心LOVE）
text: なにわ男子のデビューシングル
thumbnail: ubuLove_cd.png
price: 1210
state: false,
id: JACA-5994
colors: ピンク
maker: Storm Labels
---

 <div class="img-switcher">
      <img id="mainImg" class="main-img" src="/04_ecsite/images/ubuLove_cd.png" alt="アルバム(1st Love)" />
      <div class="thumbnails">
        <button class="thumb-btn active"><img class="thumb-img" src="/04_ecsite/images/ubuLove_cd.png" alt="シングル（初心LOVE）" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/ubuLove_cd.png" alt="シングル（初心LOVE）" /></button>
        <button class="thumb-btn"><img class="thumb-img" src="/04_ecsite/images/ubuLove_cd.png" alt="シングル（初心LOVE）" /></button>
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

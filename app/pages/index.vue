<template>
  <div class="container" id="workshop_index">
    <div class="row" style="height:15px;"></div>
      <div class="row">
          <div class="col">
              <div class="carousel slide" data-ride="carousel" data-interval="2500" id="show">
                  <ul class="carousel-indicators">
                      <li data-target="#show" data-slide-to="0" class="active"></li>
                      <li data-target="#show" data-slide-to="1"></li>
                      <li data-target="#show" data-slide-to="2"></li>
                  </ul>
                  <div class="carousel-inner">
                      <div class="carousel-item active">
                          <img src="~/assets/image/輪播圖1.jpg" alt="" class="img-fluid">
                      </div>
                      <div class="carousel-item ">
                          <img src="~/assets/image/輪播圖2.jpg" alt="" class="img-fluid">
                      </div>
                      <div class="carousel-item ">
                          <img src="~/assets/image/輪播圖3.jpg" alt="" class="img-fluid">
                      </div>
                  </div>
                  <a href="#show" class="carousel-control-prev" data-slide="prev">
                      <span class="carousel-control-prev-icon"></span>
                  </a>
                  <a href="#show" class="carousel-control-next" data-slide="next">
                      <span class="carousel-control-next-icon"></span>
                  </a>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-12 container-fluid " id="special_studio">
              <h5 class="mt-3 mb-1">The special workshop</h5>
              <a href="">
                  <img src="~/assets/image/special_workshop.jpg" id="special_workshop "
                      class="img-fluid" style="border-radius: 10px; width: 100%;">
              </a>
          </div>
          <div class="col-lg-4 container-fluid " id="DIY_studio">
              <h5 class="mb-1">體驗工作坊</h5>
              <p>「一日敲打切鋸，感受金工工藝美學，親手製作那份屬於自己獨特的銀飾記憶。」</p>
          </div>
          <div class="col-lg-8  container-fluid " id="DIY_studio">
              <div class="container d-flex justify-content-around pb-3">
                  <a href="">
                      <img src="~/assets/image/diy_1.png" class="img-fluid" id="workshop_ring" style="width: 150px;">
                  </a>
                  <a href="">
                      <img src="~/assets/image/diy_2.png" class="img-fluid" id="workshop_bracelet"
                          style="width: 150px;">
                  </a>
                  <a href="">
                      <img src="~/assets/image/diy_3.png" class="img-fluid" id="workshop_necklace"
                          style="width: 150px;">
                  </a>
                  <a href="">
                      <img src="~/assets/image/diy_4.png" class="img-fluid" id="workshop_earrings"
                          style="width: 150px;">
                  </a>
              </div>
          </div>
      </div>
      <hr>
      <div class="row container">
          <div class="col-lg-12  container-fluid p-0" id="profession_class_introduce">
              <h5 class="mb-1">專業課程</h5>
              <p class="mt-1 mb-2">Day Dreaming creative studio誠摯歡迎您於工作室學習專業金工技法，全心感受金工工藝獨特的美學概念。</p>
          </div>
      </div>
      <div class="row">
          <div class="col-6" id="basic_metal">
              <img src="~/assets/image/basic_1.jpg" class="img-fluid" id="class_img">
          </div>
          <div class="col-6" id="advance_metal">
              <img src="~/assets/image/advance_1.jpg" class="img-fluid" id="class_img">
          </div>
          <div class=" col-6" id=" test_c">
              <img src="~/assets/image/test_c_2.jpg" class="img-fluid" id="class_img">
          </div>
          <div class="col-6" id="test_b">
              <img src="~/assets/image/test_b_1.jpg" class="img-fluid" id="class_img">
          </div>
          <div class="col-6" id="mokumegane_class">
              <img src="~/assets/image/mokumegane_1.jpg" class="img-fluid" id="class_img">
          </div>
      </div>
  </div>
</template>

<script setup="ts">
// 等待 DOM 載入完成
document.addEventListener("DOMContentLoaded", () => {
  // -------- 網頁版選單 --------
  document.querySelectorAll<HTMLElement>(".main_menu").forEach(menu => {
    menu.addEventListener("mouseover", () => {
      const ul = menu.querySelector<HTMLElement>("ul");
      if (ul) ul.style.display = "block";
    });

    menu.addEventListener("mouseout", () => {
      const ul = menu.querySelector<HTMLElement>("ul");
      if (ul) ul.style.display = "none";
    });

    const childUl = menu.querySelector<HTMLElement>("ul");
    if (childUl) {
      childUl.addEventListener("mouseout", () => {
        childUl.style.display = "none";
      });
    }
  });

  // -------- 手機版選單 --------
  const sideslider = document.querySelector<HTMLElement>("[data-toggle=collapse-side]");
  if (sideslider) {
    const getSidebar = sideslider.getAttribute("data-target-sidebar");
    const getContent = sideslider.getAttribute("data-target-content");

    sideslider.addEventListener("click", () => {
      if (getSidebar) document.querySelector(getSidebar)?.classList.toggle("in");
      if (getContent) document.querySelector(getContent)?.classList.toggle("out");
    });
  }

  let judge = 0;
  document.querySelectorAll<HTMLElement>('[data-toggle="collapse"]').forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll<HTMLElement>(".collapse").forEach(el => {
        el.style.display = "none";
      });

      const next = btn.nextElementSibling;
      if (next) next.style.display = "block";

      if (judge === 1) {
        btn.style.display = "none";
        judge = 0;
      }
    });
  });

  // -------- 倒數計時 --------
  setTimeout(countdown, 1000);

  function countdown() {
    const s = document.getElementById("timer");
    if (s) {
      const num = parseInt(s.innerText, 10) - 1;
      s.innerText = num.toString();
      if (num === 0) {
        window.location.href = "Index.cshtml";
      } else {
        setTimeout(countdown, 1000);
      }
    }
  }

  // -------- 表單切換 --------
  const showBtn = document.getElementById("show_button");
  const form = document.getElementById("customize_form");
  const goBtn = document.getElementById("go_customize2");

  if (form && goBtn && showBtn) {
    form.style.display = "none";
    goBtn.style.display = "none";

    showBtn.addEventListener("click", () => {
      const visible = form.style.display !== "none";
      form.style.display = visible ? "none" : "block";
      goBtn.style.display = visible ? "none" : "block";
    });
  }

  // -------- 相簿切換 --------
  document.querySelectorAll<HTMLAnchorElement>("#photo_switch .small_img a").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const imgSrc = a.getAttribute("href");
      const bigImg = document.querySelector<HTMLImageElement>("#photo_switch .big_img img");
      if (imgSrc && bigImg) bigImg.src = imgSrc;
    });
  });
});
</script>
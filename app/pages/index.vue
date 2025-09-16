<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <UCarousel v-slot="{ item }" dots :items="items" :ui="{ item: 'basis-1/3' }">
          <img :src="item" width="320" height="320" class="rounded-lg">
        </UCarousel>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 container-fluid " id="special_studio">
        <h5 class="mt-3 mb-1">The special workshop</h5>
        <a href="">
          <img src="~/assets/image/special_workshop.jpg" id="special_workshop " class="img-fluid"
            style="border-radius: 10px; width: 100%;">
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
            <img src="~/assets/image/diy_2.png" class="img-fluid" id="workshop_bracelet" style="width: 150px;">
          </a>
          <a href="">
            <img src="~/assets/image/diy_3.png" class="img-fluid" id="workshop_necklace" style="width: 150px;">
          </a>
          <a href="">
            <img src="~/assets/image/diy_4.png" class="img-fluid" id="workshop_earrings" style="width: 150px;">
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
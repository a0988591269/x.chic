<template>
    <!-- Guide Bar -->
    <div class="h-[40px] bg-gray-200 grid grid-cols-2 justify-items-stretch content-center">
        <div class="flex justify-self-start items-center">
            <NuxtLink to="/">
                <input class="w-[60px] h-[30px] text-zinc-600" type="button" value="首頁">
            </NuxtLink>
            <div class="flex flex-nowrap self-center">
                <div class="flex items-center w-[16px]" @click="toggleCollapse">
                    <span><img src="~/assets/image/search.png"></span>
                </div>
                <div class="flex items-center w-[180px] h-auto px-3" :class="{ 'hidden': !isOpen, 'block': isOpen }">
                    <input type="text" class="h-[30px]" placeholder="請輸入查詢關鍵字">
                    <button type="submit" class="w-[60px] h-[30px] text-nowrap">搜尋</button>
                </div>
            </div>
        </div>
        <div class="flex justify-self-end items-center">
            <NuxtLink to="/">
                <input class="w-[60px] h-[30px] text-zinc-600" type="button" value="購物車">
            </NuxtLink>
            <NuxtLink to="/">
                <input class="w-[60px] h-[30px] text-zinc-600" type="button" value="登入">
            </NuxtLink>
            <NuxtLink to="/">
                <input class="w-[60px] h-[30px] text-zinc-600" type="button" value="註冊">
            </NuxtLink>
        </div>
    </div>
    <div>
        <NuxtLink to="/">
            <img src="~/assets/image/logo.png" alt="X.Chic creative studio" class="img-fluid justify-self-center">
        </NuxtLink>
    </div>
    <div>
        <ul id="nav">
            <li class="main_menu">
                <a href=""><span>品牌故事</span>Brand Story</a>
            </li>
            <li class="main_menu">
                <a href=""><span>上衣</span>Top</a>
            </li>
            <li class="main_menu">
                <a href=""><span>下著</span>Bottom</a>
            </li>
            <li class="main_menu">
                <a href=""><span>配件</span>Accessories</a>
            </li>
            <li class="main_menu">
                <a href=""><span>周邊</span>Peripheral</a>
            </li>
            <li class="main_menu">
                <a href=""><span>聯絡我們</span>Contact Us</a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const toggleCollapse = () => {
    isOpen.value = !isOpen.value;
    return isOpen.value;
};
</script>
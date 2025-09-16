<template>
    <!-- Guide Bar -->
    <div class="container-fluid  fixed-top" id="Bar" style="background-color: #dad1ce50;height:40px;">
        <a href="">
            <input type="button" value="註冊" id="btn" class="button"
                style="width:auto;height:30px;color:#5f5965;background-color: transparent;border:none;margin-top:5px;float:right; margin-right: 5px;">
        </a>
        <a href="">
            <input type="button" value="登入"
                style="width:60px;height:30px;color:#5f5965;background-color: transparent;border:none;border-radius: 5px; margin-top:5px;float:right; margin-right: 5px;">
        </a>
        <a href="">
            <input type="button" value="購物車"
                style="width:60px;height:30px;color:#5f5965;background-color:  transparent;border:none;border-radius: 5px; margin-top:5px;float:right; margin-right: 5px;">
        </a>
        <a href="">
            <input type="button" value="首頁" id="btn" class="button"
                style="width:60px;height:30px;color:#5f5965;background-color:  transparent;border:none;border-radius: 5px; margin-top:5px;float:left; margin-right: 5px;">
        </a>
        <!-- 網頁版搜尋功能 -->
        <div class="btn" data-toggle="collapse" data-target="#web_search_button" id="web_search_bar">
            <span><img src="~/assets/image/search.png" style="width: 16px;"></span>
        </div>
        <div id="web_search_button" class="collapse">
            <span>
                <input type="search" class="form" id="web_search" action="" placeholder="請輸入查詢關鍵字" />
                <button type="submit" value="search" id="web_search_btn">search</button>
            </span>
        </div>
    </div>
    <!-- Logo -->
    <div id="header " class="container container-fluid text-center">
        <div class="row" id="site_name">
            <div class="col">
                <span class="website_logo">
                    <a href="">
                        <img src="~/assets/image/logo.png" alt="Day Dreaming creative studio" class="img-fluid"
                            style="margin-top: 30px;">
                    </a>
                </span>
            </div>
        </div>
    </div>
    <!-- 推格子 -->
    <div class="row" style="height:60px; width: 100%;" id="space"></div>
    <!-- 推格子 -->
    <!-- 搜尋欄位 -->
    <div class="row">
        <div id="search_button" class="collapse">
            <div class="box">
                <div class="container " id="search_bar" style="margin-top: 10px;">
                    <input type="search" class="form" id="search" placeholder="請輸入查詢關鍵字" />
                    <button type="submit" value="search" id="search_btn">search</button>
                </div>
            </div>
        </div>
    </div>

    <div class="container " id="main_bar">
        <ul id="nav">
            <!-- <li class="jquery_out ">
                <div class="jquery_inner "> -->
            <li class="main_menu" id="main_menu_2">
                <a href=""><span>品牌故事</span>Brand Story</a>
            </li>
            <li class="main_menu" id="main_menu_3">
                <a href=""><span>工作坊 </span>Workshop</a>
                <ul class="list_menu" id="list_menu1">
                    <li>
                        <a href=""><span>特別企劃</span>Special</a>
                    </li>
                    <li>
                        <a href=""><span>體驗工作坊</span>Experience</a>
                    </li>
                    <li>
                        <a href=""><span>基礎金工班</span>Basic</a>
                    </li>
                    <li>
                        <a href=""><span>進階金工班</span>Advanced</a>
                    </li>
                    <li>
                        <a href=""><span>丙級考證班</span>JewelMakingC</a>
                    </li>
                    <li>
                        <a href=""><span>乙級考證班</span>JewelMakingB</a>
                    </li>
                    <li>
                        <a href=""><span>木目金技法班</span>MokumeGane</a>
                    </li>
                </ul>
            </li>
            <li class="main_menu" id="main_menu_4">
                <a href=""><span>珠寶系列</span>Jewelry</a>

                <ul class="list_menu" id="list_menu5">
                    <li>
                        <a href="#"><span>熱門</span>Hot items</a>
                    </li>
                    <li>
                        <a href="#"><span>銀飾</span>Silver</a>
                    </li>
                    <li>
                        <a href="#"><span>木目金</span>MokumeGane</a>
                    </li>
                    <li>
                        <a href="#"><span>珍珠</span>Pearl</a>
                    </li>
                    <li>
                        <a href="#"><span>玻璃珠</span>Beading</a>
                    </li>
                </ul>
            </li>
            <li class="main_menu" id="main_menu_5">
                <a href=""><span>纖維系列</span>Fiber</a>
                <ul class="list_menu" id="list_menu3">
                    <li>
                        <a href="#"><span>圍巾</span>Scarf</a>
                    </li>
                    <li>
                        <a href="#"><span>大衣</span>Coat</a>
                    </li>
                </ul>
            </li>
            <li class="main_menu" id="main_menu_6">
                <a href=""><span>訂製服務</span>Customize</a>
            </li>
            <li class="main_menu" id="main_menu_7">
                <a href=""><span>聯絡我們</span>Contact Us</a>
            </li>
        </ul>
        <div class="clear"></div>
    </div>
</template>
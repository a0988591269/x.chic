<template>
    <!-- 手機板選單 start-->
    <div class="container-fluid m-0">
        <nav class="navbar navbar-expand-md fixed-top navbar-inverse" id="phone_guide_bar">
            <!-- 漢堡式選單按鈕 -->
            <button data-toggle="collapse-side" data-target-sidebar=".side-collapse-left"
                data-target-content=".side-collapse-container-left" type="button" class="navbar-toggle pull-left"
                data-target="main_bar" id="nav_btn">
                <span><img src="~/assets/image/list.png"></span>
            </button>
            <!-- 搜尋按鈕 -->
            <div class="btn" data-toggle="collapse" data-target="#search_button" id="nav_btn">
                <span> <img src="~/assets/image/search.png"> </span>
            </div>
            <a class="navbar-brand " href="" style="margin: auto;">
                <img src="~/assets/image/phone_logo.png" height="30" class="d-inline-block align-top" alt="">
            </a>
            <!-- 購物車按鈕 -->
            <a href="">
                <button type="button" class="" id="nav_btn">
                    <span><img src="~/assets/image/shopping-cart.png"></span>
                </button>
            </a>
            <!-- 會員登入按鈕 -->
            <a href="">
                <button type="button" class="" id="nav_btn">
                    <span><img src="~/assets/image/user.png"></span>
                </button>
            </a>
            <!-- 手機板選單 -->
            <div class=" navbar-inverse side-collapse-left in" id="navbar_bar">
                <nav role="navigation" class="navbar-collapse m-3">
                    <ul class="nav navbar-nav navbar-left  " id="navbar_bar_main">
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <span>
                                    <img src="~/assets/image/ring-with-precious-stone.png" id="icon">品牌故事
                                </span>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            @*手機板選單大類別不需要連結*@
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="collapse" data-target="#studio">
                                <span>
                                    <img src="~/assets/image/handyman-tools.png" id="icon">工作坊
                                </span>
                            </a>
                            <div class="collapse" id="studio">
                                <a href="" class="dropdown-item pt-2"><span>特別企劃</span></a>
                                <a href="" class="dropdown-item pt-2"><span>體驗工作坊</span></a>
                                <a href="" class="dropdown-item pt-2"><span>基礎金工班</span></a>
                                <a href="" class="dropdown-item pt-2"><span>進階金工班</span></a>
                                <a href="" class="dropdown-item pt-2"><span>丙級考證班</span></a>
                                <a href="" class="dropdown-item pt-2"><span>乙級考證班</span></a>
                                <a href="" class="dropdown-item pt-2"><span>木目金技法班</span></a>
                            </div>
                        </li>
                        <li class="nav-item dropdown ">
                            @*手機板選單大類別不需要連結*@
                            <a href="#" class="nav-link dropdown-toggle " data-toggle="collapse" data-target="#jewel">
                                <span>
                                    <img src="~/assets/image/gemstone.png" id="icon">珠寶系列
                                </span>
                            </a>
                            <div class="collapse" id="jewel">
                                <a href="#" class="dropdown-item pt-2"><span>銀飾</span></a>
                                <a href="#" class="dropdown-item pt-2"><span>木目金</span></a>
                                <a href="#" class="dropdown-item pt-2"><span>珍珠</span></a>
                                <a href="#" class="dropdown-item pt-2"><span>玻璃珠</span></a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            @*手機板選單大類別不需要連結*@
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="collapse" data-target="#fiber">
                                <span>
                                    <img src="~/assets/image/yarn-ball.png" id="icon">纖維系列
                                </span>
                            </a>
                            <div class="collapse" id="fiber">
                                <a href="#" class="dropdown-item pt-2"><span>圍巾</span></a>
                                <a href="#" class="dropdown-item pt-2"><span>大衣</span></a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <span>
                                    <img src="~/assets/image/clean.png" id="icon">訂製服務
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <span>
                                    <img src="~/assets/image/comment.png" id="icon">聯絡我們
                                </span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <span>
                                    <img src="~/assets/image/shop.png" id="icon">購物須知
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <span>
                                    <img src="~/assets/image/qa.png" id="icon">常見問題
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span>
                                    <img src="~/assets/image/radio.png" id="icon">最新公告
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <span>
                                    <img src="~/assets/image/vip.png" id="icon">會員權益聲明
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    </div>
    <!-- 手機板選單 end-->
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
                    @*<li>
                        <a href="#"><span>熱門</span>Hot items</a>
                    </li>*@
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
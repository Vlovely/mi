<template>
    <div>
        <header>
            <div class="h_top">
                <div class="logo_wrap">
                    <div class="logo">
                        <img src="../../../static/img/logo.png" alt="">
                    </div>
                </div>
                <div class="sea_wrap">
                    <div class="search">
                        <i class="h_icon sea_icon"></i>搜索商品名称
                    </div>
                </div>
                <div class="user_wrap">
                    <div class="user">
                        <i class="user_icon h_icon"></i>
                    </div>
                </div>
            </div>
            <div class="h_bot">
                <div class="nav_item" v-for="item,index in arr" @click="navClick(index)">
                    <span :class="{active:index==nowIndex}">{{item}}</span>
                </div>
            </div>
        </header>
        <div v-if="nowIndex==0">
            <Recom></Recom>
            <div class="sonNav">
                <a href="#" v-for="item in alldata[1].body.items">
                    <img :src="item.img_url">
                </a>
            </div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore">
                <div class="new_left">
                    <img :src=" alldata[3].body.items[0].img_url" alt="">
                </div>
                <div class="new_right">
                    <div>
                        <img :src="alldata[3].body.items[1].img_url" alt="">
                    </div>
                    <div>
                        <img :src="alldata[3].body.items[2].img_url" alt="">
                    </div>
                </div>
            </div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="alldata[5].body.items[0].img_url" alt=""></div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><router-link to="/detail"><img :src="alldata[7].body.items[0].img_url" alt=""></router-link></div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="alldata[9].body.items[0].img_url" alt="">
                    <p class="title">{{alldata[9].body.items[0].product_name}}</p>
                    <p class="gray">{{alldata[9].body.items[0].product_brief}}</p>
                    <p class="price">￥{{alldata[9].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="alldata[9].body.items[1].img_url" alt="">
                    <p class="title">{{alldata[9].body.items[1].product_name}}</p>
                    <p class="gray">{{alldata[9].body.items[1].product_brief}}</p>
                    <p class="price">￥{{alldata[9].body.items[1].product_price}}</p>
                </div>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="alldata[10].body.items[0].img_url" alt="">
                    <p class="title">{{alldata[10].body.items[0].product_name}}</p>
                    <p class="gray">{{alldata[10].body.items[0].product_brief}}</p>
                    <p class="price">￥{{alldata[10].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="alldata[10].body.items[1].img_url" alt="">
                    <p class="title">{{alldata[10].body.items[1].product_name}}</p>
                    <p class="gray">{{alldata[10].body.items[1].product_brief}}</p>
                    <p class="price">￥{{alldata[10].body.items[1].product_price}}</p>
                </div>
            </div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="alldata[12].body.items[0].img_url" alt=""></div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="alldata[14].body.items[0].img_url" alt=""></div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="alldata[16].body.items[0].img_url" alt="">
                    <p class="title">{{alldata[16].body.items[0].product_name}}</p>
                    <p class="gray">{{alldata[16].body.items[0].product_brief}}</p>
                    <p class="price">￥{{alldata[16].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="alldata[16].body.items[1].img_url" alt="">
                    <p class="title">{{alldata[16].body.items[1].product_name}}</p>
                    <p class="gray">{{alldata[16].body.items[1].product_brief}}</p>
                    <p class="price">￥{{alldata[16].body.items[1].product_price}}</p>
                </div>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="alldata[17].body.items[0].img_url" alt="">
                    <p class="title">{{alldata[17].body.items[0].product_name}}</p>
                    <p class="gray">{{alldata[17].body.items[0].product_brief}}</p>
                    <p class="price">￥{{alldata[17].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="alldata[17].body.items[1].img_url" alt="">
                    <p class="title">{{alldata[17].body.items[1].product_name}}</p>
                    <p class="gray">{{alldata[17].body.items[1].product_brief}}</p>
                    <p class="price">￥{{alldata[17].body.items[1].product_price}}</p>
                </div>
            </div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore">
                <div class="new_left">
                    <img :src="alldata[54].body.items[0].img_url" alt="">
                </div>
                <div class="new_right">
                    <img :src="alldata[54].body.items[1].img_url" alt="">
                </div>
            </div>
            <div class="newStore">
                <div class="new_left">
                    <img :src="alldata[56].body.items[0].img_url" alt="">
                </div>
                <div class="new_right">
                    <img :src="alldata[56].body.items[1].img_url" alt="">
                </div>
            </div>
            <div class="newStore">
                <div class="new_left">
                    <img :src="alldata[58].body.items[0].img_url" alt="">
                </div>
                <div class="new_right">
                    <img :src="alldata[58].body.items[1].img_url" alt="">
                </div>
            </div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="alldata[60].body.items[0].img_url" alt=""></div>
        </div>
        <div v-if="nowIndex==1">
            <mt-swipe :auto="0" class="swipe" :continuous=false>
                <mt-swipe-item class="swipe_item" :style="{backgroundImage:'url('+pcdata[0].body.items[0].img_url+')'}"></mt-swipe-item>
                <mt-swipe-item class="swipe_item" :style="{backgroundImage:'url('+pcdata[0].body.items[1].img_url+')'}"></mt-swipe-item>
            </mt-swipe>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="pcdata[2].body.items[0].img_url" alt=""></div>
            <div class="hotsell">
                <img :src="pcdata[3].body.items[0].img_url" alt="">
                <p class="price">￥{{pcdata[3].body.items[0].product_price}}</p>
                <p class="title">{{pcdata[3].body.items[0].product_name}}</p>
                <p class="gray">{{pcdata[3].body.items[0].product_brief}}</p>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[4].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[4].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[4].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[4].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[4].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[4].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[4].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[4].body.items[1].product_price}}</p>
                </div>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[5].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[5].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[5].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[5].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[5].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[5].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[5].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[5].body.items[1].product_price}}</p>
                </div>
            </div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="pcdata[7].body.items[0].img_url" alt=""></div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="pcdata[9].body.items[0].img_url" alt=""></div>
            <div class="hotsell">
                <img :src="pcdata[10].body.items[0].img_url" alt="">
                <p class="price">￥{{pcdata[10].body.items[0].product_price}}</p>
                <p class="title">{{pcdata[10].body.items[0].product_name}}</p>
                <p class="gray">{{pcdata[10].body.items[0].product_brief}}</p>
            </div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="pcdata[12].body.items[0].img_url" alt=""></div>
            <div class="hotsell">
                <img :src="pcdata[13].body.items[0].img_url" alt="">
                <p class="price">￥{{pcdata[13].body.items[0].product_price}}</p>
                <p class="title">{{pcdata[13].body.items[0].product_name}}</p>
                <p class="gray">{{pcdata[13].body.items[0].product_brief}}</p>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[14].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[14].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[14].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[14].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[14].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[14].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[14].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[14].body.items[1].product_price}}</p>
                </div>
            </div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="pcdata[16].body.items[0].img_url" alt=""></div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[17].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[17].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[17].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[17].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[17].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[17].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[17].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[17].body.items[1].product_price}}</p>
                </div>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[18].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[18].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[18].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[18].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[18].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[18].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[18].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[18].body.items[1].product_price}}</p>
                </div>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[19].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[19].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[19].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[19].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[19].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[19].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[19].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[19].body.items[1].product_price}}</p>
                </div>
            </div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="pcdata[21].body.items[0].img_url" alt=""></div>
            <div class="hotsell">
                <img :src="pcdata[22].body.items[0].img_url" alt="">
                <p class="price">￥{{pcdata[22].body.items[0].product_price}}</p>
                <p class="title">{{pcdata[22].body.items[0].product_name}}</p>
                <p class="gray">{{pcdata[22].body.items[0].product_brief}}</p>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[23].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[23].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[23].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[23].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[23].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[23].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[23].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[23].body.items[1].product_price}}</p>
                </div>
            </div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="pcdata[25].body.items[0].img_url" alt=""></div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[26].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[26].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[26].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[26].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[26].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[26].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[26].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[26].body.items[1].product_price}}</p>
                </div>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[27].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[27].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[27].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[27].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[27].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[27].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[27].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[27].body.items[1].product_price}}</p>
                </div>
            </div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="pcdata[29].body.items[0].img_url" alt=""></div>
            <div class="hotsell">
                <img :src="pcdata[30].body.items[0].img_url" alt="">
                <p class="price">￥{{pcdata[30].body.items[0].product_price}}</p>
                <p class="title">{{pcdata[30].body.items[0].product_name}}</p>
                <p class="gray">{{pcdata[30].body.items[0].product_brief}}</p>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[31].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[31].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[31].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[31].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[31].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[31].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[31].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[31].body.items[1].product_price}}</p>
                </div>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[32].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[32].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[32].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[32].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[32].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[32].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[32].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[32].body.items[1].product_price}}</p>
                </div>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[33].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[33].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[33].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[33].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[33].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[33].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[33].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[33].body.items[1].product_price}}</p>
                </div>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[34].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[34].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[34].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[34].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[34].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[34].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[34].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[34].body.items[1].product_price}}</p>
                </div>
            </div>
            <div class="shoplist">
                <div class="shopleft">
                    <img :src="pcdata[35].body.items[0].img_url" alt="">
                    <p class="title">{{pcdata[35].body.items[0].product_name}}</p>
                    <p class="gray">{{pcdata[35].body.items[0].product_brief}}</p>
                    <p class="price">￥{{pcdata[35].body.items[0].product_price}}</p>
                </div>
                <div class="shopright">
                    <img :src="pcdata[35].body.items[1].img_url" alt="">
                    <p class="title">{{pcdata[35].body.items[1].product_name}}</p>
                    <p class="gray">{{pcdata[35].body.items[1].product_brief}}</p>
                    <p class="price">￥{{pcdata[35].body.items[1].product_price}}</p>
                </div>
            </div>
        </div>
        <div v-if="nowIndex==2">
            <div class="newStore swipe"><img :src="fulldata[0].body.items[0].img_url" alt=""></div>
            <div class="newStore">
                <img :src="fulldata[1].body.items[0].img_url" alt="">
                <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(192, 4, 54);background-color: rgb(192, 4, 54);margin-top:-0.06rem"></div>
            </div>
            <div class="full">
                <img :src="fulldata[3].body.items[0].img_url" alt="">
                <div class="fullinfo">
                    <p class="price">￥{{fulldata[3].body.items[0].product_price}}</p>
                    <p class="title">{{fulldata[3].body.items[0].product_name}}</p>
                </div>
                <div class="fullinfo">
                    <button class="btn">{{fulldata[3].body.items[0].btn_txt}}</button>
                    <p class="gray">{{fulldata[3].body.items[0].product_brief}}</p>
                </div>
                <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(192, 4, 54);background-color: rgb(192, 4, 54);"></div>
            </div>
            <div class="full">
                <img :src="fulldata[5].body.items[0].img_url" alt="">
                <div class="fullinfo">
                    <p class="price">￥{{fulldata[5].body.items[0].product_price}}</p>
                    <p class="title">{{fulldata[5].body.items[0].product_name}}</p>
                </div>
                <div class="fullinfo">
                    <button class="btn">{{fulldata[5].body.items[0].btn_txt}}</button>
                    <p class="gray">{{fulldata[5].body.items[0].product_brief}}</p>
                </div>
                <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(192, 4, 54);background-color: rgb(192, 4, 54);"></div>
            </div>
            <div class="full">
                <img :src="fulldata[7].body.items[0].img_url" alt="">
                <div class="fullinfo">
                    <p class="price">￥{{fulldata[7].body.items[0].product_price}}</p>
                    <p class="title">{{fulldata[7].body.items[0].product_name}}</p>
                </div>
                <div class="fullinfo">
                    <button class="btn">{{fulldata[7].body.items[0].btn_txt}}</button>
                    <p class="gray">{{fulldata[7].body.items[0].product_brief}}</p>
                </div>
                <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(192, 4, 54);background-color: rgb(192, 4, 54);"></div>
            </div>
            <div class="full">
                <img :src="fulldata[9].body.items[0].img_url" alt="">
                <div class="fullinfo">
                    <p class="price">￥{{fulldata[9].body.items[0].product_price}}</p>
                    <p class="title">{{fulldata[9].body.items[0].product_name}}</p>
                </div>
                <div class="fullinfo">
                    <button class="btn">{{fulldata[9].body.items[0].btn_txt}}</button>
                    <p class="gray">{{fulldata[9].body.items[0].product_brief}}</p>
                </div>
                <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(192, 4, 54);background-color: rgb(192, 4, 54);"></div>
            </div>
            <div class="newStore">
                <img :src="fulldata[10].body.items[0].img_url" alt="">
                <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(192, 4, 54);background-color: rgb(192, 4, 54);margin-top:-0.06rem"></div>
            </div>
            <div class="full">
                <img :src="fulldata[11].body.items[0].img_url" alt="">
                <div class="fullinfo">
                    <p class="price">￥{{fulldata[11].body.items[0].product_price}}</p>
                    <p class="title">{{fulldata[11].body.items[0].product_name}}</p>
                </div>
                <div class="fullinfo">
                    <button class="btn">{{fulldata[11].body.items[0].btn_txt}}</button>
                    <p class="gray">{{fulldata[11].body.items[0].product_brief}}</p>
                </div>
                <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(192, 4, 54);background-color: rgb(192, 4, 54);"></div>
            </div>
            <div class="full">
                <img :src="fulldata[12].body.items[0].img_url" alt="">
                <div class="fullinfo">
                    <p class="price">￥{{fulldata[12].body.items[0].product_price}}</p>
                    <p class="title">{{fulldata[12].body.items[0].product_name}}</p>
                </div>
                <div class="fullinfo">
                    <button class="btn">{{fulldata[12].body.items[0].btn_txt}}</button>
                    <p class="gray">{{fulldata[12].body.items[0].product_brief}}</p>
                </div>
                <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(192, 4, 54);background-color: rgb(192, 4, 54);"></div>
            </div>
            <div class="full">
                <img :src="fulldata[13].body.items[0].img_url" alt="">
                <div class="fullinfo">
                    <p class="price">￥{{fulldata[13].body.items[0].product_price}}</p>
                    <p class="title">{{fulldata[13].body.items[0].product_name}}</p>
                </div>
                <div class="fullinfo">
                    <button class="btn">{{fulldata[13].body.items[0].btn_txt}}</button>
                    <p class="gray">{{fulldata[13].body.items[0].product_brief}}</p>
                </div>
            </div>
        </div>
        <div v-if="nowIndex==3">
            <div class="newStore swipe"><img :src="boxdata[0].body.items[0].img_url" alt=""></div>
            <div class="newStore"><img :src="boxdata[1].body.items[0].img_url" alt=""></div>
            <div class="hotsell">
                <img :src="boxdata[2].body.items[0].img_url" alt="">
                <p class="price">￥{{boxdata[2].body.items[0].product_price}}</p>
                <p class="title">{{boxdata[2].body.items[0].product_name}}</p>
                <p class="gray">{{boxdata[2].body.items[0].product_brief}}</p>
            </div>
            <div class="hotsell">
                <img :src="boxdata[3].body.items[0].img_url" alt="">
                <p class="price">￥{{boxdata[3].body.items[0].product_price}}</p>
                <p class="title">{{boxdata[3].body.items[0].product_name}}</p>
                <p class="gray">{{boxdata[3].body.items[0].product_brief}}</p>
            </div>
            <div class="hotsell">
                <img :src="boxdata[4].body.items[0].img_url" alt="">
                <p class="price">￥{{boxdata[4].body.items[0].product_price}}</p>
                <p class="title">{{boxdata[4].body.items[0].product_name}}</p>
                <p class="gray">{{boxdata[4].body.items[0].product_brief}}</p>
            </div>
            <div class="hotsell">
                <img :src="boxdata[5].body.items[0].img_url" alt="">
                <p class="price">￥{{boxdata[5].body.items[0].product_price}}</p>
                <p class="title">{{boxdata[5].body.items[0].product_name}}</p>
                <p class="gray">{{boxdata[5].body.items[0].product_brief}}</p>
            </div>
            <div class="hotsell">
                <img :src="boxdata[6].body.items[0].img_url" alt="">
                <p class="price">￥{{boxdata[6].body.items[0].product_price}}</p>
                <p class="title">{{boxdata[6].body.items[0].product_name}}</p>
                <p class="gray">{{boxdata[6].body.items[0].product_brief}}</p>
            </div>
            <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
            <div class="newStore"><img :src="boxdata[8].body.items[0].img_url" alt=""></div>
            <div class="newStore"><img :src="boxdata[10].body.items[0].img_url" alt=""></div>
            <div class="hotsell">
                <img :src="boxdata[11].body.items[0].img_url" alt="">
                <p class="price">￥{{boxdata[11].body.items[0].product_price}}</p>
                <p class="title">{{boxdata[11].body.items[0].product_name}}</p>
                <p class="gray">{{boxdata[11].body.items[0].product_brief}}</p>
            </div>
        </div>
        <div style="height:52px"></div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../../components/footer'
import Recom from '../../components/recommend'
import axios from 'axios'
export default {
    data(){
        return{
            arr:['推荐','电脑','全面屏','盒子','手机','智能','生活周边','电视'],
            nowIndex:0,
            alldata:[],
            pcdata:[],
            fulldata:[],
            boxdata:[]
        }
    },
    methods:{
        navClick(index){
            this.nowIndex=index
        }
    },
    components:{Footer,Recom},
    mounted(){
            axios({
                url:'https://www.easy-mock.com/mock/5ad960047bd0967f61786db9/example_copy/mi',
                method:'get',
            }).then(res=>{
                this.alldata=res.data.data.data.sections
            })
            axios({
                url:'https://www.easy-mock.com/mock/5ad960047bd0967f61786db9/example_copy/pc',
                method:'get',
            }).then(res=>{
                this.pcdata=res.data.data.data.sections
            })
            axios({
                url:'https://www.easy-mock.com/mock/5ad960047bd0967f61786db9/example_copy/fullscreen',
                method:'get',
            }).then(res=>{
                this.fulldata=res.data.data.data.sections
            })
            axios({
                url:'https://www.easy-mock.com/mock/5ad960047bd0967f61786db9/example_copy/box',
                method:'get',
            }).then(res=>{
                this.boxdata=res.data.data.data.sections
            })
    }
}
</script>

<style>
.btn{
    width: 1.8rem;
    background: #ea625b;
    border-radius: .05rem;
    text-align: center;
    color: #fff;
    font-size: .18rem;
    padding: .12rem 0;
    font-weight: 700;
    float: right;
    margin-right: .27rem;
}
.full{
    background: rgb(192, 4, 54);
    padding: 0 .12rem;
    overflow: hidden;
}
.full .gray{
    line-height: .6rem;
}
.fullinfo{
    margin-top: -0.06rem;
    background: #fff;
    text-align: left;
    overflow: hidden;
}
.hotsell{
    padding: 0 0 .3rem 0 ;
    text-align: left;
}
.hotsell .price,.full .price{
    float: right;
    padding-right: .27rem;
}
.swipe_item{
    background-size: cover;
}
img{
    width: 100%;
    height: 100%;
}
.swipe{
    width: 100%;
    height: 3.2rem;
    margin-top: 83px;
}
header{
    position: fixed;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 99;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
    background: #f2f2f2;
    display: block;
}
.h_top{
    height: 50px;
    background: #f2f2f2;
    color: #666;
    display: flex;
}
.h_top>div{
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.h_bot{
    overflow-x: auto;
    background: #f2f2f2;
    white-space: nowrap;
    z-index: 2;
}
.logo_wrap{
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.logo,.user{
    display: block;
    width: .6rem;
    margin: 0 .2rem;
}
.logo img{
    width: 80%;
}
.sea_wrap{
    flex: 1;
    font-size: .3rem;
    display: flex;
}
.search{
    display: flex;
    align-items: center;
    border: 1px solid #e5e5e5;
    text-align: left;
    width: 100%;
    color: rgba(0,0,0,.3);
    background-color: #fff;
    border-radius: .04rem;
}
.h_icon{
    background-size: .4rem .4rem;
    display: block;
    width: .6rem;
    height: .6rem;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50%;
}
.sea_icon{
    background-image: url('../../../static/img/search.png');
}
.user_icon{
    background-image: url('../../../static/img/user.png');
}

/* nav */
.nav_item{
    display: inline-block;
    padding: 0 .25rem;
}
.nav_item>span{
    display: inline-block;
    line-height: 32px;
    border-bottom: 2px solid rgba(237,91,0,0);
}
.nav_item>.active{
    color: rgb(237, 91, 0);
    border-color: rgba(237, 91, 0);
}
.sonNav{
    display: flex;
    width: 100%;
    height: 1.rem;
}
.sonNav>a{
    float: left;
    height: auto!important;
    display: block;
    flex: .2;
}
.sonNav>a>img{
    display: block;
    width: 100%;
    height: 1.rem;
}
.newStore,.shoplist,.hotsell{
    overflow: hidden;
    width: 100%;
}
.new_left,.new_right,.shopleft,.shopright{
    width: 49.5%;
}
.new_left,.shopleft{
    float: left;
}
.new_right,.shopright{
    float: right;
}
.newStore img,.shoplist img{
    width: 100%;
    height: 100%;
}
.title,.gray,.price{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    padding-left: .2rem;
}
.title{
    font-size: .26rem;
    color: rgba(0,0,0,.87);
}
.gray{
    margin-top: .02rem;
    font-size: .16rem;
    line-height: .3rem;
    color: rgba(0,0,0,.54);
}
.price{
    font-size: .28rem;
    color: #ea625b;
    line-height: 0.5rem;
}
</style>

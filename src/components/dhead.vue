<template>
  <div class="hi">
        <header>
            <div class="h_left">
                <a href=""><i class="back img_btn"></i></a>
            </div>
            <div class="h_cont">
            </div>
            <div class="h_right">
                <a href=""><i class="img_btn search"></i></a>
            </div>
        </header>
        <div class="himg">
            <img :src="dList.view_content.galleryView.galleryView[0]" alt="">
        </div>
        <div class="htitle">
            <div class="name">{{dList.product_info.name}}</div>
            <div class="gray">{{dList.product_info.product_desc}}</div>
            <div class="pricewrap">
                <div class="price">{{dList.view_content.titleView.titleView.price}}</div>
            </div>
        </div>
        <div class="tab">
            <div class="tab_item">
                <a :class="{active:chosed}" @click="changeback">{{dList.view_content.descTabsView.descTabsView[0].name}}</a>
                <a :class="{active:!chosed}" @click="change">{{dList.view_content.descTabsView.descTabsView[1].name}}</a>
            </div>
            <div class="tab_view">
                <div class="gaishu" v-if="chosed==true">
                    <img v-for="item in dList.view_content.descTabsView.descTabsView[0].tabContent" :src="item.plainView.img" alt="">
                </div>
                <div class="canshu" v-if="chosed==false">
                    <img v-for="item in dList.view_content.descTabsView.descTabsView[1].tabContent" :src="item.plainView.img" alt="">
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            dList:'',
            chosed:true
        }
    },
    methods:{
        change(){
            this.chosed=false
        },
        changeback(){
            this.chosed=true
        }
    },
    mounted(){
        axios({
            url:'https://www.easy-mock.com/mock/5ad960047bd0967f61786db9/example_copy/detail',
            method:'GET'
        }).then(res=>{
            this.dList=res.data.data
            console.log(this.dList)
        })
    }
}
</script>

<style>
.gaishu>img,.canshu>img{
    width: 100%;
}
.tab_item .active{
    color: #ff6700;
}
.tab{
    margin-top: 0.16rem;
}
.tab_item{
    height: 0.88rem;
}
.tab_item>a{
    color: #333;
    display: inline-block;
    width: 49%;
    font-size: .22rem;
    line-height: 0.88rem;
}
.pricewrap{
    padding: .2rem 0;
}
.price{
    color: #ff6700;
    font-size: .48rem;
    font-weight: 700;
    position: relative;
    padding-left: .5em;
    line-height: 1em;
}
.price::before{
    content: "\A5";
    position: absolute;
    left: 0;
    top: 0;
    font-size: .76em;
    text-decoration: none;
}
.name{
    font-size: .34rem;
    line-height: 1.5em;
}
.gray{
    font-size: .22rem;
    line-height: 1.5em;
    color: rgba(0,0,0,.54);
}
.hi{
    position: relative;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 52px;
}
.himg{
    background: #ccc;
    width: 100%;
    height: 7.2rem;
}
.himg img{
    width: 100%;
    height: 100%;
}
.img_btn{
    display: block;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
}
.back{
    width: .6rem;
    height: .6rem;
    background-image: url('../../static/img/whiteback.png');
    transform: scale(.6);
}
.search{
    width: .6rem;
    height: .6rem;
    background-image: url('../../static/img/whiteshow.png');
    transform: scale(.6);
}
.h_left>a,.h_right>a{
    display: block;
    width: .6rem;
    height: .6rem;
    margin: 0 .2rem;
    color: #ddd;
    background: rgba(0,0,0,.6);
    border-radius: 50%;
}
header{
    display: flex;
    color: #666;
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
}
header>div{
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.h_cont{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    font-size: .3rem;
}
.h_right{
    min-width: 1rem;
}
.htitle{
    background: #fff;
    text-align: left;
    padding: .2rem .32rem 0;
}
</style>

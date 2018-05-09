<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgList" :style="{backgroundImage:'url('+item.img_url+')'}"></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
import  '../../node_modules/swiper/dist/css/swiper.css'
export default {
    data(){
        return{
            dataList:[],
            imgList:[]
        }
    },
    mounted(){
        axios.get('https://www.easy-mock.com/mock/5ad960047bd0967f61786db9/example_copy/mi')
        .then(res=>{
            this.dataList=res.data.data.data.sections[0].body.items
            for(var i=0;i<this.dataList.length;i++){
                this.imgList.push(this.dataList[i])
            }
        })
    },
    updated(){
        var mySwiper = new Swiper ('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        }) 
    }
}
</script>

<style>
.swiper-container {
    width: 100%;
    height: 3.2rem;
    margin-top: 83px;
} 
.swiper-slide{
    background-size: cover;
}
</style>

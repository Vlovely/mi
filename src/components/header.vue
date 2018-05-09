<template>
    <header>
        <div class="h_left">
            <a href=""><i class="back img_btn"></i></a>
        </div>
        <div class="h_cont">
            <div v-if="link=='/cate'">分类</div>
            <div v-if="link=='/cart'">购物车</div>
        </div>
        <div class="h_right">
            <a href=""><i class="img_btn search"></i></a>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return{
            link:''
        }
    },
    methods:{

    },
    mounted(){
        console.log(this.$route.path)
        this.link=this.$route.path
    }
}
</script>

<style>
.img_btn{
    display: block;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
}
.back{
    width: .5rem;
    height: .5rem;
    background-image: url('../../static/img/back.png');
    line-height: .6rem;
}
.search{
    width: .6rem;
    height: .6rem;
    background-image: url('../../static/img/search.png');
    line-height: .6rem;
}
.h_left>a,.h_right>a{
    display: block;
    width: .6rem;
    margin: 0 .2rem;
}
.h_cont>div{
    text-align: center;
    width: 100%;
}
header{
    display: flex;
    background: #f2f2f2;
    color: #666;
    position: fixed;
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
</style>

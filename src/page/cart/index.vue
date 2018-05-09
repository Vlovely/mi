<template>
  <div class="cart">
    <Header></Header>
        <div class="cartwrap">
            <a href="" class="login">
                <span>登录后享受更多优惠</span>
                <em>去登录</em>
            </a>
            <div class="cartnull">
                <a href="">
                    <span>购物车还是空的</span>
                    <em>去逛逛</em>
                </a>
            </div>
            <div class="cartlist">
                <div class="titleimg">
                    <img :src="cartdata.header.body.items[0].img_url" alt="">
                </div>
                <div class="shoplist">
                    <div class="shopleft">
                        <img :src="cartdata.recom_list[0].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[0].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[0].name}}</p>
                    </div>
                    <div class="shopright">
                        <img :src="cartdata.recom_list[1].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[1].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[1].price}}</p>
                    </div>
                </div>
                <div class="shoplist">
                    <div class="shopleft">
                        <img :src="cartdata.recom_list[2].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[2].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[2].price}}</p>
                    </div>
                    <div class="shopright">
                        <img :src="cartdata.recom_list[3].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[3].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[3].price}}</p>
                    </div>
                </div>
                <div class="shoplist">
                    <div class="shopleft">
                        <img :src="cartdata.recom_list[4].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[4].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[4].price}}</p>
                    </div>
                    <div class="shopright">
                        <img :src="cartdata.recom_list[5].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[5].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[5].price}}</p>
                    </div>
                </div>
                <div class="shoplist">
                    <div class="shopleft">
                        <img :src="cartdata.recom_list[6].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[6].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[6].price}}</p>
                    </div>
                    <div class="shopright">
                        <img :src="cartdata.recom_list[7].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[7].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[7].price}}</p>
                    </div>
                </div>
                <div class="shoplist">
                    <div class="shopleft">
                        <img :src="cartdata.recom_list[8].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[8].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[8].price}}</p>
                    </div>
                    <div class="shopright">
                        <img :src="cartdata.recom_list[9].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[9].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[9].price}}</p>
                    </div>
                </div>
                <div class="shoplist">
                    <div class="shopleft">
                        <img :src="cartdata.recom_list[10].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[10].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[10].price}}</p>
                    </div>
                    <div class="shopright">
                        <img :src="cartdata.recom_list[11].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[11].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[11].price}}</p>
                    </div>
                </div>
                <div class="shoplist">
                    <div class="shopleft">
                        <img :src="cartdata.recom_list[12].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[12].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[12].price}}</p>
                    </div>
                    <div class="shopright">
                        <img :src="cartdata.recom_list[13].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[13].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[13].price}}</p>
                    </div>
                </div>
                <div class="shoplist">
                    <div class="shopleft">
                        <img :src="cartdata.recom_list[14].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[14].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[14].price}}</p>
                    </div>
                    <div class="shopright">
                        <img :src="cartdata.recom_list[15].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[15].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[15].price}}</p>
                    </div>
                </div>
                <div class="shoplist">
                    <div class="shopleft">
                        <img :src="cartdata.recom_list[16].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[16].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[16].price}}</p>
                    </div>
                    <div class="shopright">
                        <img :src="cartdata.recom_list[17].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[17].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[17].price}}</p>
                    </div>
                </div>
                <div class="shoplist">
                    <div class="shopleft">
                        <img :src="cartdata.recom_list[18].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[18].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[18].price}}</p>
                    </div>
                    <div class="shopright">
                        <img :src="cartdata.recom_list[19].image_url" alt="">
                        <p class="title">{{cartdata.recom_list[19].name}}</p>
                        <p class="price">￥{{cartdata.recom_list[19].price}}</p>
                    </div>
                </div>
            </div>
        </div>    
    <Footer></Footer>
  </div>
  
</template>

<script>
import Footer from '../../components/footer'
import Header from '../../components/header'
import axios from 'axios'
export default {
    data(){
        return{
            cartdata:''
        }
    },
    mounted(){
        axios({
            url:'https://www.easy-mock.com/mock/5ad960047bd0967f61786db9/example_copy/cart',
            method:'get',
        }).then(res=>{
            this.cartdata=res.data.data
        })
    },
    components:{Header,Footer}
}
</script>

<style>
.shoplist{
    overflow: hidden;
    width: 100%;
}
.shopleft,.shopright{
    width: 49.5%;
}
.shopleft{
    float: left;
}
.shopright{
    float: right;
}
.shoplist img{
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
.cartlist{
    width: 100%;
    height: 100%;
}
.titleimg{
    width: 100%;
    height: 1.1rem;
}
.cartlist img{
    width: 100%;
    height: 100%;
}
.cartwrap{
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding-top: 50px;
    padding-bottom: 52px;
    box-sizing: border-box;
}
.login{
    height: 1.04rem;
    padding: 0 .56rem 0 .32rem;
    position: relative;
    color: rgba(0,0,0,.54);
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.login>span{
    font-size: .26rem;
    color: rgba(0,0,0,.87);
    display: block;
    text-align: left;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
}
.login>em{
    font-style: normal;
    font-size: .20rem;
    text-align: right;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
}
.login::after{
    content: "";
    position: absolute;
    right: 5.12px;
    right: .32rem;
    top: 50%;
    width: 2.88px;
    width: .18rem;
    height: 2.88px;
    height: .18rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
.cartnull{
    background: #ebebeb;
    padding: .2rem;
}
.cartnull>a{
    height: 1.44rem;
    font-size: .20rem;
    text-decoration: none;
    text-align: center;
}
.cartnull>a>span{
    display: inline-block;
    line-height: .8rem;
    background: url('../../../static/img/cartnull.png') no-repeat 0;
    background-size: auto 100%;
    padding: 0 .16rem 0 .96rem;
    color: rgba(0,0,0,.27);
}
.cartnull>a>em{
    display: inline-block;
    border: 1px solid rgba(0,0,0,.15);
    box-sizing: border-box;
    height: .5rem;
    line-height: .5rem;
    padding: 0 .24rem;
    color: rgba(0,0,0,.87);
    font-style: normal;
}
</style>

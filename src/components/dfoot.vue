<template>
  <footer>
    <div>
      <a href="/">
        <i class="footericon imgicon"></i>
        <span>首页</span>
      </a>
      <a href="#/cart">
        <i class="footcart imgicon"></i>
        <span>购物车</span>
      </a>
      <div>
        <a href="">加入购物车</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.imgicon{
    display: block;
    width: .4rem;
    height: .4rem;
    margin: 0 auto .1rem;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
}
.footcart{
  background-image: url('../../static/img/cart.png');
}
.footericon{
    background-image: url('../../static/img/home.png');
}
footer{
    height: 52px;
    background: #fff;
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
footer>div{
  height: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
}
footer>div>a{
    display: block;
    text-decoration: none;
    width: 1.45rem;
    color: rgba(0,0,0,.54);
    border-left: 1px solid #f4f4f4;
}
footer>div>div{
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
}
footer>div>div>a{
    height: 52px;
    line-height: 52px;
    display: block;
    outline: 0;
    background: #ff6700;
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: .28rem;
}
</style>

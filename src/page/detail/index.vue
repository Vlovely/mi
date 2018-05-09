<template>
  <div>
      <Dhead></Dhead>
      <Dfoot></Dfoot>
  </div>
</template>

<script>
import Dhead from '../../components/dhead'
import Dfoot from '../../components/dfoot'
export default {

  components:{Dhead,Dfoot},

}
</script>

<style>
.detail{
    position: absolute;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-transition: -webkit-transform .4s cubic-bezier(.55,0,.1,1);
    transition: -webkit-transform .4s cubic-bezier(.55,0,.1,1);
    transition: transform .4s cubic-bezier(.55,0,.1,1);
    transition: transform .4s cubic-bezier(.55,0,.1,1),-webkit-transform .4s cubic-bezier(.55,0,.1,1);
    will-change: transform;
    background: #fff;
    color: #3c3c3c;
    -webkit-overflow-scrolling: touch;
}
</style>

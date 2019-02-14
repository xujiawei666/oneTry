<template>
    <div class="customer">
      <div class="nav">
        <span @click="$router.push('/login')">返回</span>
        <p>联系客服</p>
      </div>
      <div class="middle">
        <div class="img-box"></div>
        <p>请扫描二维码，添加客服微信</p>
        <p>客服联系电话：12345678910</p>
        <p>客服微信号：sd123563</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "customer"
    }
</script>

<style scoped>
  .customer{
    width: 7.5rem;
  }

  .nav{
    height: .72rem;
    background-color: #DE4D4E;
    color: white;
    overflow: hidden;
    line-height: .72rem;
  }
  .nav span{
    font-size: .28rem;
    margin-left: .1rem;
  }
  .nav p{
    display: inline-block;
    width: 6rem;
    font-size: .34rem;
    margin: 0 auto;
    text-align: center;
  }

  .middle{
    width: 6.1rem;
    height: 6.72rem;
    background-color: #FD9696;
    margin: 2.59rem auto;
    box-shadow: .1rem .05rem .2rem .01rem rgba(253, 150, 150, 0.62),
    -.1rem -.05rem .2rem .01rem rgba(253, 150, 150, 0.61);
    overflow: hidden;
    font-size: .34rem;
    color: white;
  }
  .img-box{
    margin: .26rem auto .9rem;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #8B8B8B;
  }
  .middle p{
    margin-top: .5rem;
    margin-left: .82rem;
  }
</style>

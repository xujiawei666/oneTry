<template>
    <div class="forget">
      <div class="nav">
        <span @click="$router.push('/login')"><img src="../assets/img/arrow.png" alt=""> 返回</span>
        <p>重设密码</p>
      </div>
      <ul>
        <li>
          <input type="text" placeholder="请输入Email">
        </li>
        <li>
          <input type="text" placeholder="请输入验证码">
          <div class="get">获取验证码</div>
        </li>
        <li>
          <input type="password" placeholder="输入新密码">
          <img src="../assets/img/visible.png" alt="">
        </li>
        <li>
          <input type="password" placeholder="确认密码">
          <img src="../assets/img/visible.png" alt="">
        </li>
      </ul>
      <div class="submit">确认</div>
      <div class="footer">
        <p>有问题联系客服<br>微信：1742494758<br>工作时间24H</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "forget"
    }
</script>

<style scoped>
  .forget{
    width: 7.5rem;
  }
  .nav{
    height: .63rem;
    border-bottom: 0.01rem solid #A0A0A0;
    overflow: hidden;
  }
  .nav img{
    width: .25rem;
    height: .29rem;
  }
  .nav span{
    display: inline-block;
    font-size: .2rem;
    margin-left: .09rem;
    line-height: .63rem;
  }
  .nav p{
    display: inline-block;
    margin-left: 2.17rem;
    line-height: .63rem;
    font-size: .38rem;
  }

  .forget ul{
    width: 5.3rem;
    margin: .6rem auto .32rem;
  }
  .forget ul li{
    display: flex;
    height: .67rem;
    justify-content: space-between;
    border-top: .01rem solid #000;
  }
  .forget ul li input {
    font-size: .28rem;
    height: .6rem;
    margin-top: .01rem;
  }
  .get {
    height: .3rem;
    font-size: .2rem;
    margin-top: .2rem;
    border: 0.01rem solid #000;
    border-radius: .2rem;
    text-align: center;
    line-height: .3rem;
  }
  .forget ul li img{
    width: .44rem;
    height: .25rem;
    margin-top: .2rem;
  }
  .forget ul li:last-child{
    border-bottom: 0.01rem solid #000;
  }

  .submit{
    margin: 0 auto;
    width: 5.62rem;
    height: .58rem;
    font-size: .34rem;
    background-color: #FF7171;
    text-align: center;
    line-height: .58rem ;
    border-radius: .3rem;
  }

  .footer{
    margin: 6.97rem auto .59rem;
    height: .87rem;
    font-size: .2rem;
    text-align: center;
    color: #434141;
  }
</style>

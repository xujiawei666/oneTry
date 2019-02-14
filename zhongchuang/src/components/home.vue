<template>
  <div class="home">
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="image in images">
          <img :src="image"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="middle">
      <div class="level">
        <span class="level-c">当前等级</span>
        <span class="level-e">V {{ level }}</span>
      </div>
      <div class="up-level" v-if="show">
        <span class="level-c" v-if="lv">升至V{{ level+1 }}</span>
        <span class="level-e" v-if="lv">￥{{ lvMoney }}</span>
        <p v-if="!lv">您已是最高等级</p>
      </div>
    </div>
    <div class="btn" v-if="show">
      <div class="btn1" @click="upgrade"><img src="../assets/img/upgrade.png" alt="">
        <p>我要升级</p></div>
      <div class="btn2"><img src="../assets/img/gameShow.png" alt="">
        <p>升级说明</p></div>
    </div>
    <div class="friend" v-if="!show" @click="show=!show">
      <div class="friend-btn">
        <p>加微信好友，发红包升级</p>
      </div>
      <div class="friend-wechat">
        <div class="friend-wechat-box">
          <span>微信: <a class="chat">{{ orderNum }}</a></span>
          <button :data-clipboard-text="orderNum" class="copyText" @click="copy">复制</button>
        </div>
        <p>电话：<span>{{ tel }}</span></p>
      </div>
    </div>
    <end/>
  </div>
</template>

<script>
  import Clipboard from 'clipboard';
  import End from "./end";
  import {Toast} from 'vant';
  import {Swipe, SwipeItem} from 'vant';

  let clipboard = new Clipboard(".copyText");
  export default {
    name: "home",
    components: {End},
    data() {
      return {
        show: true,
        orderNum: '',//父级的微信
        pid : '',//父级的Id
        level: 0,//等级
        tel: '',//父级的电话
        images: [],//轮播图
        lv: true,
        lvMoney : ''
      }
    },
    beforeMount(){

    },
    mounted() {
      // 获取轮播图
      this.$axios.post('user/get_banner').then(res => {
        let len = res.data.content.length;
        for (let i = 0; i < len; i++) {
          this.$set(this.images, i, res.data.content[i].img)
        }
      });
      // 用户信息
      this.$axios.post('user/get_userInfo', {id: sessionStorage.id}).then(res => {
        this.level = res.data.lev;
        this.myLv();
        this.pid = res.data.pid;
        this.$axios.post('admin/get_grade').then(res=>{
          this.lvMoney = res.data.content[this.level].cost
        })
      });

    },
    methods: {
      money : function (){
        return this.lvMoney[this.level].cost
      },
      // 复制成功提示
      copy: function () {
        Toast('复制成功')
      },
      // 判断我的等级
      myLv: function () {
        if (this.level == 5) {
          this.lv = false
        }
      },
      // 申请升级
      upgrade: function () {
        if (this.level == 5){
          Toast('您已升到最高级')
        } else{
          this.show = !this.show;
          this.$axios.post('user/do_upgrade', {id: sessionStorage.id}).then(res => {
            if (res.status == 200){
              if (res.data.msg == "不可以重复申请!"){
                Toast('不可重复申请')
              }
            }
          });
          this.$axios.post('user/get_userInfo', { id : this.pid }).then(res=>{
            this.orderNum = res.data.wchat;
            this.tel = res.data.phone;
          })
        }
      }
    }
  }
</script>

<style scoped>
  .banner {
    width: 7.5rem;
  }

  /*middle*/
  .middle {
    width: 4.5rem;
    margin: 1.06rem auto .63rem;
  }

  .level, .up-level {
    height: .98rem;
    background-color: #DE4D4E;
    border-radius: .2rem;
  }

  .up-level p {
    text-align: center;
    color: white;
    font-size: .32rem;
    line-height: .98rem;
  }

  .level span, .up-level span {
    display: inline-block;
    line-height: .98rem;
  }

  .level-c {
    width: 3.09rem;
    margin-left: .27rem;
    color: #fff;
    font-size: .38rem;
  }

  .level-e {
    color: #FFFF00;
    font-size: .44rem;
  }

  .up-level {
    margin-top: .53rem;
    background-color: #BFBFBF;
  }

  .up-level span {
    color: #595956;
    font-size: .38rem;
  }

  /*btn*/
  .btn {
    margin: 0 auto 2rem;
    width: 6.22rem;
    height: 2.36rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: #FF7C7C;
    font-size: .34rem;
  }

  .btn img {
    width: 1.87rem;
    height: 1.87rem;
  }

  .btn p {
    margin-top: .15rem;
  }

  /*friend*/
  .friend {
    width: 7.18rem;
    height: 4.13rem;
    box-shadow: -0.01rem -0.01rem 0.01rem 0.01rem #BFB2B2,
    0.01rem 0.01rem 0.01em 0.01rem #BFB2B2;
    margin: -.27rem auto 2rem;
    overflow: hidden;
  }

  .friend-btn {
    width: 4.5rem;
    height: .78rem;
    background-color: #DE4D4E;
    margin: .47rem auto .53rem;
    border-radius: .2rem;
    color: white;
  }

  .friend-btn p {
    line-height: .78rem;
    margin: 0 auto;
    text-align: center;
    font-size: .38rem;
  }

  .friend-wechat {
    /*height: .32rem;*/
    margin-left: 1.8rem;
  }
  .friend-wechat-box{
    width: 3.5rem;
    display: flex;
    justify-content: space-between;
  }
  .friend-wechat span {
    display: inline-block;
    font-size: .34rem;
    color: #201D1D;
    margin-bottom: .21rem;
  }

  .friend-wechat button {
    width: 1rem;
    height: .5rem;
    font-size: .24rem;
    color: white;
    background-color: #EE3536;
    border-radius: .2rem;
    margin-top: -.1rem;
    margin-left: .06rem;
  }

  .chat {
    display: inline-block;
    width: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    white-space: nowrap;
    font-size: .34rem;
    color: black;
  }

  .friend > p {
    margin-top: .41rem;
    margin-left: .2rem;
    color: #201D1D;
    font-size: .34rem;
    text-align: center;
  }
</style>

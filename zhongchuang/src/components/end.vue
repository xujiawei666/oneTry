<template>
    <div class="end">
      <div class="end-point" @click="$router.push('/home')">
        <div class="end-img"><img src="../assets/img/shengji_grey.png" alt=""></div>
        <p>首页</p>
      </div>
      <div class="end-point" @click="$router.push('/deal')" >
        <div class="end-img"><img src="../assets/img/pizhun_grey.png" alt=""></div>
        <p>批准升级</p>
      </div>
      <div class="end-point" @click="$router.push('/mymessage')">
        <div class="end-img"><img src="../assets/img/geren_grey.png" alt=""></div>
        <p>个人中心</p>
      </div>
      <div class="end-point" @click="$router.push('/haobao')">
        <div class="end-img"><img src="../assets/img/tuijian_grey.png" alt=""></div>
        <p>推广链接</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "end",
      data(){
          return{
            imgs:[
              { url:require('../assets/img/shengji.png')},
              { url:require('../assets/img/pizhun.png')},
              { url:require('../assets/img/geren.png')},
              { url:require('../assets/img/tuijian.png')}
            ]
          }
      },
      mounted() {
          let img = document.querySelectorAll('.end-img img');
          let itColor = document.querySelectorAll('.end-point p');
          if (this.$route.name == 'home'){
            img[0].src = this.imgs[0].url;
            itColor[0].style.color="red";
         }
          if (this.$route.name == 'deal'){
            img[1].src = this.imgs[1].url;
            itColor[1].style.color="red";
         }
          if (this.$route.name == 'mymessage'){
          img[2].src = this.imgs[2].url;
          itColor[2].style.color="red";
        }
        if (this.$route.name == 'haobao'){
          img[3].src = this.imgs[3].url;
          itColor[3].style.color="red";
        }
      }
    }
</script>

<style scoped>
  .end {
    position: fixed;
    bottom: 0;
    width: 7.5rem;
    height: .92rem;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #000;
    margin-top: .76rem;
    background-color: white;
  }
  .end-point{
    height: .92rem;
    text-align: center;
    font-size:  .2rem;
    margin-top: .2rem;
    color: #8F8F8F;
    /*line-height: .92rem;*/
  }
  .end-img img{
    width: .45rem;
    height: .41rem;
  }

</style>

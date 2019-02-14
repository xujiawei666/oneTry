<template>
    <div class="deal">
      <div class="nav">处理列表</div>
      <div class="search">
        <div class="search-name">
          <p>查找伙伴</p>
          <div class="search-name-box ">
            <input type="text" placeholder="请输入伙伴ID" v-model="uId" >
            <button @click="searchs(uId)">搜索</button>
          </div>

        </div>
        <div class="search-desc" v-for=" todo in selects" v-if="todo">
          <div class="search-img" >
            <p class="img-header"></p>
            <div class="img-desc">
              <p>伙伴ID:{{ todo[0].uid}}</p>
              <p>升级金额:￥ {{ todo[0].cost }}</p>
              <p>微信账号:{{ todo[0].wchat }}</p>
            </div>
          </div>
          <div class="search-mean" v-if="todo[0].ac">{{ yn[todo[0].ac-1] }}</div>
          <div class="points" v-if="todo[0].ac == 0">
            <div class="point">确认</div>
            <div class="point">拒绝</div>
          </div>
        </div>
      </div>
      <div class="friends">
        <div class="friend-btn">
          <span @click="change($event)" :class="{on: isActivated}" >待处理</span>
          <span @click="change($event)" :class="{on: !isActivated}" >已处理</span>
        </div>
        <ul>
          <li v-for="(item,index) in isActivated?dMyFriend:yMyFriend" :key="index">
            <div class="search-desc">
              <div class="search-img">
                <p class="img-header"></p>
                <div class="img-desc">
                  <p>伙伴ID: {{ item.uid }}</p>
                  <p>升级金额:￥ {{ item.cost }}</p>
                  <p>微信账号: {{ item.wchat }}</p>
                </div>
              </div>
              <div class="search-mean" v-if="!deal">{{ yn[item.ac-1] }}</div>
            </div>
            <div class="points" v-if="deal">
              <div class="point" @click="upgraded(item.uid,item.id,item.tolev,1)">确认</div>
              <div class="point" @click="upgraded(item.uid,item.id,item.tolev,2)">拒绝</div>
            </div>
          </li>
        </ul>
        <p class="friends-p">没有更多了</p>
      </div>
      <end/>
    </div>
</template>

<script>
    import End from "./end";
    import { Toast } from 'vant';
    export default {
        name: "deal",
      components: {End},
      data(){
          return {
            upup:true,       //是否显示已升级
            deal:true,       //是否显示确认按钮
            isActivated: true,
            dMyFriend : [],  //待处理列表
            yMyFriend : [],  //已处理列表
            selects : [''],  //查询账号
            uId: '',         //输入要查找的数据
            dbtn: 1 ,         //1是待处理，2是已处理
            yn: ['已升级','已拒绝']
          }
        },
      mounted (){
          this.con();
      },
      methods:{
        //控制待处理已处理按钮
        change: function (e) {
          let myName = e.target.className;
          if (myName != "on"){
            this.isActivated= !this.isActivated;
            this.deal = !this.deal;//是否显示升级
            if (this.dbtn == 1){
              this.dbtn = 2
            }else {
              this.dbtn = 1
            }
            this.con()
          }
        },
        //搜索学员
        searchs: function (uid) {
          let users = {
            pid: sessionStorage.id,
            status: '',
            uid: uid
          };
          if (!users.status && !users.uid){
            Toast('请输入伙伴ID')
          } else if (users.uid == 0) {
            Toast('伙伴不存在')
          }else{
              this.$axios.post("user/get_wdispose",users).then(res=> {
                this.$set(this.selects,0,res.data.content)
                if (!this.selects[0]) {
                  Toast('伙伴不存在')
                }
              })
            }
          },
        //获取待处理/已处理列表
        con : function () {
          let users = {
            pid: sessionStorage.id,
            status: this.dbtn,
            uid: ''
          };
          this.$axios.post("user/get_wdispose",users).then(res=> {
            let dat = res.data.content;
            if (this.dbtn == 1) {
              this.dMyFriend = dat;
            } else if (this.dbtn == 2) {
              this.yMyFriend = dat;
            }
          })
        },
        // 确认/拒绝
        upgraded : function (u,i,lev,y) {
          let user = {
            id : u,      //用户id
            tolev : lev,   // 升级到第几级
            recodid : i, //申请记录id
            ac : y,      //是否通过申请
            pid : sessionStorage.id    //pid
          };
          this.$axios.post('user/upgrade',user).then(res=>{
            this.con();
           if (user.ac == 1){
             Toast('已升级')
           } else if(user.ac == 2){
             Toast('已拒绝')
           }
          })
        }
      }
    }
</script>

<style scoped>
  .nav{
    width: 7.5rem;
    height: .92rem;
    background-color: #DE4D4E;
    color: white;
    text-align: center;
    line-height: .92rem;
    font-size: .34rem;
  }

  .search{
    width: 7.1rem;
    /*height: 2.9rem;*/
    margin: 0 auto;
    padding-bottom: .2rem;
    background-color: #F7F2F2;
    /*border: .02rem solid #BC7F7F;*/
    box-shadow: -0.02rem -0.02rem 0.04rem 0.02rem #BC7F7F,
    0.02rem 0.02rem 0.04em 0.02rem #BC7F7F;
    overflow: hidden;
  }
  .search-name{
    /*width: 6rem;*/
    height: 1.10rem;
    margin: 0.22rem 0 .22rem .57rem;
  }
  .search-name p{
    font-size: .18rem;
    margin-bottom: .29rem;
  }
  .search-name-box{
    width: 6rem;
    height: .78rem;
    display: flex;
    justify-content: space-between;
  }
  .search-name input{
    border-radius: .2rem;
    border: 1px solid #B6B1B1;
    background-color: transparent;
    text-align: center;
    color: #000;
  }
  .search-name button{
    background-color: #DE4D4E;
    width: 1.45rem;
    height: .78rem;
    color: white;
    border-radius: .3rem;
    font-size: .34rem;
  }
  .search-desc{
    position: relative;
    width: 5.47rem;
    height: .99rem;
    margin: .42rem auto .3rem;
    display: flex;
    justify-content: space-between;
    color: #262424;
  }
  .img-header{
    width: .99rem;
    height: .99rem;
    background-color: #B6B1B1;
    border-radius: 50%;
  }
  .img-desc{
    position: absolute;
    top: 0;
    left: 1.22rem;
    font-size: .22rem;
  }
  .img-desc p{
    margin-bottom: .17rem;
  }
  .img-desc p:last-child{
    width: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp:1;
    white-space:nowrap;
  }
  .search-mean{
    margin-top: .33rem;
    font-size: .32rem;
  }
  .search-desc .points{
    right: -.74rem;
  }

  .friends{
    width: 7.11rem;
    box-shadow: -0.02rem -0.02rem 0.04rem 0.02rem #BC7F7F,
    0.02rem 0.02rem 0.04em 0.02rem #BC7F7F;
    margin: .57rem auto 1.6rem;
    background-color: #F7F2F2;
    overflow: hidden;
  }
  .friend-btn{
    width: 3.36rem;
    height: .78rem;
    margin: .25rem auto;
    background-color: #DE4D4E;
    border-radius: .3rem;
  }
  .friend-btn span{
    display: inline-block;
    margin-top: .01rem;
    width: 1.63rem;
    line-height: .76rem;
    text-align: center;
    font-size: .28rem;
    color: white;
    border-radius: .3rem;
  }
  .on{
    background-color: white;
    color: #ff0000!important;
  }
  .friends ul{
    width: 6.55rem;
    margin: 0 auto 1rem;
  }
  .friends ul li{
    position: relative;
    margin-top: .12rem;
    border-bottom: .01rem solid #D7D2D2;
  }
  .friends ul li:last-child{
    border: 0;
  }
  .points{
    position: absolute;
    top: .27rem;
    right: -.16rem;
    width: 1.81rem;
    height: .45rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .point{
    width:  .82rem;
    height: .45rem;
    font-size: .24rem;
    background-color: #DE4D4E;
    line-height: .45rem;
    border-radius: .2rem;
    border: .01rem solid #DE4D4E;
    color: white;
  }
  .point:last-child{
    background-color: white;
    color: #DE4D4E;
  }
  .friends-p {
    text-align: center;
    line-height: .6rem;
    font-size: .34rem;
    color: rgba(0, 0, 0, 0.56);
  }
</style>

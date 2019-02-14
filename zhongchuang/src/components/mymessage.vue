<template>
  <div class="mymessage">
    <div class="nav">
      <p>我的</p>
      <div class="back" @click="out">
        退出 <img src="../assets/img/logout.png" alt="">
      </div>
    </div>
    <div class="banner">
      <div class="my-name">
        <div class="header-img"></div>
        <div class="header-mess">
          <p>ID：<span>{{ myInfo.id }}</span></p>
          <p><img src="../assets/img/tel.png" alt="">: <span>{{ myInfo.phone }}</span></p>
          <p>微信：<span>{{ myInfo.wchat }}</span></p>
        </div>
      </div>
      <div class="my-desc" @click="$router.push('/informat')">
        <img src="../assets/img/amend.png" alt="">
        <p>修改资料</p>
      </div>
    </div>
    <div class="middle">
      <div class="sub-nav">
        <p>收入：￥<span>{{ myInfo.income }}</span></p>
      </div>
      <div class="sub-nav myLevel">
        <p>等级：V<span>{{ myInfo.lev }}</span></p>
      </div>
      <div class="sub-nav">
        <p>伙伴：<span>{{ myF }}</span>个</p>
      </div>
      <div class="news">
        <van-notice-bar left-icon="volume-o" :text="title"></van-notice-bar>
      </div>
    </div>
    <div class="connect">
      <ul>
        <li v-for="(item,index) in items" :class="{ now: index+1 <= myInfo.lev}" @click="jump(index)" :key="items.item">
          <div class="now-name">
            <span>{{ item.title }}</span><s>已有人数 {{ myCompany[index] }} 个</s>
          </div>
          <div class="check" v-if="check(index)">查看</div>
        </li>
      </ul>
    </div>
    <end/>
  </div>
</template>

<script>
  import End from "./end";
  import {Toast} from 'vant';
  import {NoticeBar} from 'vant';
  import {Dialog} from 'vant';


  export default {
    name: "mymessage",
    components: {End},
    data() {
      return {
        items: [
          {title: "V1伙伴"},
          {title: "V2伙伴"},
          {title: "V3伙伴"},
          {title: "V4伙伴"},
          {title: "V5伙伴"}],
        myInfo: {},          //用户的信息
        myCompany: [0, 0, 0, 0, 0],//各个等级的伙伴人数
        title: '',            //公告
        myF: 0                //伙伴总人数
      }
    },
    mounted: function () {
      let text = '';
      let that = this;
      // 获取公告
      this.$axios.post("user/get_notice").then(res => {
        text = res.data.content[0].content;
        this.title = text;
      });
      // 获取用户信息
      this.$axios.post('user/get_userInfo', {id: sessionStorage.id}).then(ress => {
        this.myInfo = ress.data;
      });
      //获取下级列表
      this.$axios.post('user/get_lev_list', {id: sessionStorage.id, lev: 0}).then(res => {
        this.myF = res.data.total;
      });
      // 获取每个等级的人数
      this.myCompany.forEach(function (e, i) {
        that.$axios.post('user/get_lev_list', {id: sessionStorage.id, lev: i + 1}).then(res => {
          that.$set(that.myCompany, i, res.data.total)
        })
      });
    },
    methods: {
      // 是否显示查看按钮
      check: function (index) {
        return index + 1 <= this.myInfo.lev && this.myCompany[index] > 0;
      },
      //查看伙伴
      jump: function (s) {
        if ((s + 1 <= this.myInfo.lev) && this.myCompany[s] > 0) {
          return this.$router.push({
            name: 'student',
            params: {
              lev: s + 1
            }
          })
        } else if (!(s + 1 <= this.myInfo.lev)) {
          Toast("对不起，您的等级不够")
        } else {
          Toast("对不起，您还没有该等级的伙伴")
        }
      },
      // 安全退出
      out: function () {
        Dialog.confirm({
          message: '安全退出?'
        }).then(() => {
          this.$router.push('/login')
          // on confirm
        }).catch(() => {
          // on cancel
        });
      }
    }
  }
</script>

<style scoped>
  .mymessage {
    width: 7.5rem;
    margin: 0 auto;
  }

  .nav {
    position: relative;
    height: .92rem;
    text-align: center;
    background-color: #FF5454;
    overflow: hidden;
    color: white;
  }

  .nav p {
    line-height: .92rem;
    font-size: .34rem;
  }

  .back {
    position: absolute;
    top: .3rem;
    right: .3rem;
    width: .85rem;
    height: .24rem;
    font-size: .24rem;
  }

  .back img {
    width: .24rem;
    height: .24rem;
  }

  .banner {
    position: relative;
    height: 1.43rem;
    background-color: #FF5454;
    overflow: hidden;
    margin-top: -.05rem;
  }

  .header-img {
    margin-left: .42rem;
    margin-top: .14rem;
    width: .97rem;
    height: .97rem;
    background-color: #8F8F8F;
    border-radius: 50%;
  }

  .header-mess {
    position: absolute;
    top: .14rem;
    left: 1.58rem;
    color: white;
    font-size: .28rem;
    line-height: .3rem;
  }

  .header-mess img {
    width: .17rem;
    height: .3rem;
  }

  .header-mess p {
    margin-bottom: .1rem;
  }

  .my-desc {
    position: absolute;
    top: 0.3rem;
    right: .67rem;
    text-align: center;
    color: white;
    font-size: .24rem;
  }

  .my-desc img {
    width: .46rem;
    height: .45rem;
  }

  .my-desc p {
    margin-top: .13rem;
  }

  .middle {
    height: 1.97rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    background-color: #EAEAEA;
  }

  .sub-nav {
    width: 2.49rem;
    height: 1rem;
    line-height: 1rem;
    background-color: white;
  }

  .sub-nav:last-child {
    border: 0;
  }

  .news {
    width: 7.5rem;
    height: .6rem;
    margin: .17rem auto;
  }

  .connect {
    width: 7.5rem;
    margin: 0 auto 2rem;
  }

  .connect ul {
    width: 6.7rem;
    margin: 0 auto;
  }

  .connect ul li {
    height: .77rem;
    border-bottom: .01rem solid #BCBCBC;
    line-height: .77rem;
    display: flex;
    justify-content: space-between;
    color: #C9C6C6;
  }

  .now-name {
    /*width: 2.98rem;*/
    display: flex;
    justify-content: space-between;
  }

  .connect ul li span {
    font-size: .3rem;
    margin-right: .4rem;
  }

  .connect ul li s {
    font-size: .24rem;
  }

  .check {
    width: .8rem;
  }

  .now span {
    color: #494646;
  }

  .now s {
    color: #7A7272;
  }

  .now .check {
    color: #7A7272;
  }
</style>

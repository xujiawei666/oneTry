<template>
  <div class="student">
    <div class="nav">
      <span @click="$router.go(-1)">返回</span>
      <p>第 {{ chines() }} 代学生</p>
    </div>
    <div class="title">
      <p>ID号</p>
      <p>等级</p>
      <p>微信</p>
      <p>手机</p>
    </div>
    <ul>
      <li v-for="item in students" >
        <p>{{ item.id }}</p>
        <p>{{ item.lev }}</p>
        <p>{{ item.wchat }}</p>
        <p>{{ item.phone }}</p>
      </li>
    </ul>
    <end/>
  </div>
</template>

<script>
  import End from "./end";

  export default {
    name: "student",
    components: {End},
    data() {
      return {
        students: []
      }
    },
    mounted() {
      this.$axios.post('user/get_lev_list',{id: sessionStorage.id, lev: this.$route.params.lev}).then(res => {
        this.students = res.data.content;
      })
    },
    methods : {
      chines : function (){
        let arr = ['一','二','三','四','五'];
        let ind = this.$route.params.lev;
        return arr[ind-1]
      }
    }

  }
</script>

<style scoped lang="sass">
  $s: 0.01rem
  .student
    width: 750*$s
    margin-bottom: 200*$s

  .nav
    position: relative
    height: 88*$s
    color: white
    background-color: #FF5454
    text-align: center
    line-height: 88*$s
    font-size: 34*$s
    span
      position: absolute
      top: -15*$s
      left: 10*$s
      font-size: 24*$s

  .title
    display: flex
    justify-content: space-around
    width: 640*$s
    margin: 20*$s auto
    color: #F57F80
    text-align: center

  ul
    width: 640*$s
    margin: 0 auto

    li
      display: flex
      justify-content:space-around
      height: 57*$s
      text-align: center
      font-size: 24*$s
      border: 2*$s solid #2E3141
      border-radius: 20*$s
      margin-bottom: 20*$s

      p
        width: 160*$s
        line-height: 57*$s
        overflow: hidden
        text-overflow: ellipsis
        -webkit-line-clamp: 1
        white-space:nowrap
</style>

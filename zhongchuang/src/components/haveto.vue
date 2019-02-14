<template>
    <div class="havto" >
      <div class="header">
        <span @click="$router.push('/login')">  返回</span>
        <p>注册须知</p>
      </div>
      <div v-html="need">{{ need }}</div>
    </div>
</template>

<script>
    export default {
        name: "haveto",
        data: function () {
          return{
            need : ""
          }
        },
        mounted(){
          this.$axios.post('user/get_rnotice').then(res=>{
            this.need = res.data.content[0].content
          })
        }
    }
</script>

<style scoped>
  .header{
    background-color: red;
    color: white;
    height: .88rem;
    line-height: .88rem;
  }
  .header p{
    text-align: center;
    display: inline-block;
    width: 6rem;
  }
  .havto{
    line-height: .4rem;
  }
</style>
